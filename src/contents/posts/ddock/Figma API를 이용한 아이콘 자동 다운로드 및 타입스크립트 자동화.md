---
slug: "Figma API를 이용한 아이콘 자동화"
date: "2024.10.19"
title: "Figma API를 이용한 아이콘 생성 자동화"
description: "Nodejs를 통해 Figma API와 통신 하여 디자이너가 등록한 아이콘을 생성할 수 있다. "
category: "Figma"
---

## 📝 개요

> Figma에 등록한 아이콘들을 디자이너가 추가, 삭제할 때 마다 다운 받아야 한다는 것에 상당히 불편함을 느껴서 찾아보니
> Figma API를 이용해서 svg파일을 자동으로 생성한다는 글이 있어서 회사 프로젝트에 도입을 해봤습니다.

## 🔗 깃주소

- 깃 주소: https://github.com/OhGyeongtaek/figma-icon-download

## ❌ 기존 방식의 문제점

- **아이콘 다운로드 및 관리의 비효율성**: 디자이너가 등록한 아이콘을 수동으로 다운로드하고 관리해야 했음.
- **아이콘 타입을 수기로 등록**: 다운로드한 아이콘의 유니온 타입을 수기로 등록해야 하는 번거로움.

## 🔧 해결 방법 및 개선사항

- **Figma API**: Figma API를 통해 디자이너가 등록한 아이콘을 자동으로 SVG 파일로 다운로드하도록 설정.
- **자동화 스크립트 작성**: 파일명을 생성하고, 전달받은 컴포넌트 명을 Union Type으로 변환하여 ts 파일을 자동으로 생성하는 스크립트 작성.

## 🤝 도입 규칙 (디자인팀 협조)

> 해당 스크립트를 제대로 동작시키기 위해 디자인팀의 협조가 필요합니다. 다음 세 가지 규칙을 제안했습니다.
 
1. 아이콘은 디자인 시스템 `ICON`이라는 페이지에만 작성.
2. 컴포넌트 이름은 `ic-xxx` 으로 정의. (이게 아이콘의 유니온 타입으로 정의됨.)
3. 등록한 아이콘을 컴포넌트로 지정.

## 📈 시퀀스 다이어그램(Sequence Diagram)

<img width="705" alt="image" src="https://github.com/user-attachments/assets/c43a48d0-d74c-40fc-bad0-cfb6b99601a6">

## 💾 스크립트 로직

### 메인(다운로드) 스크립트 설명

> 이 스크립트는 Figma API를 사용해 아이콘을 다운로드하고, 타입스크립트 파일을 생성하는 자동화 과정을 실행합니다.

```tsx
const download = async () => {
	// Figma API를 연결해 컴포넌트명이 `ic-`로 시작하는 컴포넌트 정보를 가져오는 로직.
  const components = await getComponentInfo();

  // Figma API를 연결해 컴포넌트들의 다운로드 URL를 가져옴.
  const urls = await getComponentDownloadURL(components);

  // Figma API를 연결해 아이콘의 SVG 정보를 받아와 .svg파일로 생성하는 로직.
  await downloadSvgFiles(urls, components);
  console.log('[SVG] 다운로드 완료!!');

  // 생성된 아이콘의 컴포넌트명을 Union Type으로 생성하는 로직.
  createIconTypesFile(components);
  console.log('[typescript] 파일 생성 완료');
};

// 다운로드 로직 실행.
download();
```

### getComponentInfo 스크립트 설명

```tsx
// Figma API를 연결해 컴포넌트명이 `ic-`로 시작하는 컴포넌트 정보를 가져오는 로직.
const getComponentInfo = async () => {
  // 통신할 Figma API 주소 생성.
  const url = `${baseUrl}/files/${fileId}/nodes?ids=${nodeId}`;

  // Figma API 통신.
  const { data: info } = await axios.get(url, { headers });

  // 응답값에서 컴포넌트명이 ic-로 시작하는 컴포넌트를 필터링하여 전달.
  return Object.fromEntries(
    Object.entries(info.nodes[nodeId.replace('-', ':')].components).filter(
      ([key, component]) => {
        return /^ic-/.test(component.name);
      }
    )
  );
};
```

### getComponentDownloadURL 스크립트 설명

```tsx
  // Figma API를 연결해 컴포넌트들의 다운로드 URL를 가져옴.
const getComponentDownloadURL = async (components) => {
  //피그마에서 가져올 컴포넌트들의 아이디를 문자열로 생성.
  const ids = Object.keys(components).join(',');

  //Figma API 주소 생성.
  const url = `${baseUrl}/images/${fileId}?ids=${ids}&format=svg&svg_include_id=false`;

  // 통신
  const { data } = await axios.get(url, { headers });

  return data.images;
};
```

### downloadSvgFiles 스크립트 설명

```tsx
  // Figma API를 연결해 아이콘의 SVG 정보를 받아와 .svg파일로 생성하는 로직.
const downloadSvgFiles = async (urls, components) => {
  // 파일의 저장할 경로
  const fileDir = path.dirname(__dirname + '/assets/icons/test.svg');

  // 폴더가 있는지 체크 후 없는 경우 폴더 생성.
  if (!fs.existsSync(fileDir)) {
    fs.mkdirSync(fileDir, { recursive: true });
  }

  // API 통신 후 파일 생성 로직.
  // 파일 생성은 비동기로 처리되도 무방하기 때문에 await 쓰지 않음.
  const actions = Object.entries(urls).map(async ([key, url]) => {
    const { data } = await axios.get(url);

    fs.writeFileSync(
      `${__dirname}/assets/icons/${components[key].name}.svg`,
      data,
      'utf-8'
    );
  });

  await Promise.all(actions);
};
```

### createIconTypesFile 스크립트 설명

```tsx
// 생성된 아이콘의 컴포넌트명을 Union Type으로 생성하는 로직.
const createIconTypesFile = (components) => {
  // 컴포넌트명을 'ic-xxx'형식의 문자열로 만든 후 | 를 붙임.
  const types = Object.values(components)
    .map((c) => `'${c.name}'`)
    .join(' | ');

  // .ts 파일을 생성함.
  // 최종 결과물: export type IconTypes = 'ic-xxx1' | 'ic-xxx2' | 'ic-xxx3' ...
  fs.writeFileSync(
    `${__dirname}/types.ts`,
    `export type IconTypes = ${types}`,
    'utf-8'
  );
};
```
## 🎉 결과

![작동 결과 이미지](https://github.com/OhGyeongtaek/figma-icon-download/assets/20200820/405a2165-401f-4abc-bcbf-c0de89ba8dcd)

## 마무리
이 방식으로 아이콘 다운로드와 관리가 자동화되어, 기존 수작업의 비효율성을 개선했습니다. 디자이너가 새로운 아이콘을 추가할 때마다 자동으로 다운로드되고, 타입스크립트 파일도 자동으로 생성되어 프로젝트의 유지보수성을 크게 향상시켰습니다.
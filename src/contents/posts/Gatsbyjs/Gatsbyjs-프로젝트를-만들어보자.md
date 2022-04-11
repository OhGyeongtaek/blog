---
slug: "Gatsbyjs-프로젝트를-만들어보자"
date: "2021.10.27"
title: "[Gatsbyjs] Gatsbyjs 프로젝트를 만들어보자!"
description: "[Gatsbyjs] Gatsbyjs를 이용하여 Gatsbyjs 프로젝트를 생성할 수 있다."
category: "Gatsbyjs"
---

이번에는 제가 [Gatsbyjs](https://www.gatsbyjs.com/docs/)를 이용하여 블로그를 만든 경험을 공유해볼려고 합니다.

# [Gatsby CLI 설치하기](https://www.gatsbyjs.com/docs/tutorial/part-0/#gatsby-cli)

우선 Gatsby 프로젝트를 생성 할 수 있도록 gatsby-cli를 설치합니다.

```shell
npm install -g gatsby-cli
```

설치 후 gatsby-cli가 잘 설치가 되었는지 gatsby --version를 입력하여 확인합니다.

```shell
gatsby --version

Gatsby CLI version: x.xx.x
Gatsby version: x.xx.x
```

위와 같이 나오면 정상적으로 설치가 된겁니다.

# [Gatsby 프로젝트 생성하기](https://www.gatsbyjs.com/docs/how-to/local-development/starters/)

저는 starter를 사용해도 되지만 저만의 블로그를 만들고 싶어 starter를 사용하지 않았습니다.

## [Starter Library 둘러보기](https://www.gatsbyjs.com/starters/?v=2)

```shell
gatsby new my-blog
```

my-blog라는 Gatsby프로젝트 생성

```shell
cd my-blog

npm run develop
# or
yarn develop
# or
gatsby develop
```

my-blog 프로젝트 디렉터리로 들어간 뒤 3가지 명령어중 1가지를 이용하여 Gatsby프로젝트를 실행해 주시면 됩니다.

# 결과물

<img width="1440" alt="스크린샷 2021-10-27 오후 4 06 11" src="https://user-images.githubusercontent.com/20200820/139016907-479414ec-e3cb-4f93-b07d-641ef1641085.png">

# 겪은 오류사항

gatsby develop만 입력하여 프로젝트를 실행했을 경우 프로젝트의 화면이 나오지 않았던 경험이 있습니다.

현재까지도 해결이 되지 않았는데, 혹시 따라 하셨는데 프로젝트가 나오지 않으시는 분들이 있다면

gatsby develop -p 8001로 프로젝트를 실행해 보세요.

해당 증상으로 며칠 동안 검색해 봤는데 결국 해결을 하지 못해서 저는 해당 방식으로 프로젝트를 실행하고 있습니다.

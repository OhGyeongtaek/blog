---
slug: "Type-Alias-정리"
date: "2021.10.08"
title: "[Typescript] Type Alias 정리"
description: "Typescript에서 type을 정의할 수 있다."
category: "Typescript"
---

# 기본사용법

```typescript
// 기존에 존재하는 타입정의
type Text = string;

// 객체 정의
type Center = {
  id: number;
  name: string;
};
```

# String Literal Types

type에 문자열로 넣을 경우 정의한 문자열만 정의할 수 있다.

```typescript
type Name = "OGT";
const name: Name = "OGT";
```

# Union Types: OR

```typescript
type Direction = "left" | "right" | "up" | "down";

//'left', 'right', 'up', 'down'만 정의할 수 있다.
const action: Direction = "left";
```

# Discriminated Union

Union 타입을 사용할때 공통적인 property를 갖음으로서 좀 더 직관적인 코드를 작성할 수 있다.

```typescript
type Child = {
  child_name: string;
  age: number;
};

type Worker = {
  worker_name: string;
  age: number;
};

type Center = {
  type: "어린이집";
  name: string;
  children: Child[];
};

type Company = {
  type: "회사";
  name: string;
  workers: Worker[];
};

//Group = Center와 Company를 병합
type Group = Center | Company;
```

Group을 Type으로 표현하자면 아래와 같다.

```typescript
type Group = {
  type: "어린이집" | "회사";
  name: string;

  // children, workers중 1가지는 꼭 있어야함
  workers: Worker[];
  children: Child[];
};
```

# Intersection Types : AND

type을 조합하는데 Union은 OR이라면 Intersction은 AND

```typescript
type Student = {
  name: string,
  score: number
}

type Worker = {
  enployeeId: number;
  work: () => void
}

const internWork(person: Student & Worker) => {
  console.log(`${person.name} is working!!`);
  person.work();
}

/*
  person에 값을 넣을때 Student에 있는 property랑 Worker의 property랑
  2가지 다 포함되어야 에러가 나지 않음.
*/
internWork({
  name: "경택",
  score: 100,
  enployeeId: 1,
  work: () => {
    alert("일하는중!");
  }
})
```

---
slug: "Type-Alias-VS-Interface"
date: "2021.12.08"
title: "[Typescript] Type Alias VS Interface"
description: "Type Alias와 Interface의 차이점을 이해할 수 있다."
category: "Typescript"
---

# Type Alias와 Interface의 공통점

Type Alias와 Interface는 거의 모든 기능을 유사하게 사용할 수 있습니다.

<div class="multicode">

<span>

<h2> Interface </h2>

```typescript
// 선언
interface IPointer {
  x: number;
  y: number;
}

// 인터 페이스 병합
interface IArea extends IPointer {
  name: string;
}

// 제네릭 선언
interface IObj<T> {
  getObject: T;
}
```

</span>

<span>

<h2> Type Alias </h2>

```typescript
// 선언
type Pointer = {
  x: number;
  y: number;
};

// 병합
type Area = {
  name: string;
} & Pointer;

// 제네릭 선언
type Obj<T> = {
  getObject: T;
};
```

</span>

</div>

# Type Alias와 Interface의 차이점

두가지가 거의 유사하지만 분명 차이점은 무엇이 있을까요??

Type Alias와 Interface의 차이점은 Interface는 선언 병합이 가능하지만 Type Alias는 할 수 없습니다.

<div class="multicode">

<span>

<h2> Interface </h2>

```typescript
interface Window {
  title: string;
}

interface Window {
  document: string;
}

interface Map<Area> {
  area: Area;
}

const window: Window = {
  title: "GyeongLog",
  document: "Type Alias VS Interface",
};

console.log(window);
```

</span>

<span>

<h2> Type Alias </h2>

```typescript
type Window = {
  title: string;
};

type Window = {
  document: string;
};

// Error: Duplicate identifier 'Window'.
```

</span>

</div>

# Typescript팀이 권장하는 방식

> For the most part, you can choose based on personal preference, and TypeScript will tell you if it needs something to be the other kind of declaration. If you would like a heuristic, use interface until you need to use features from type.

대부분의 경우 개인의 취향에 따라 Type Alias와 Interface를 선택 할 수 있습니다.

타입스크립트는 필요한 기능에 따라 다르게 선언하도록 권장합니다.

만약 당신이 휴리스틱을 원한다면, Type Alias의 기능이 필요하기 전까지는 Interface를 사용해주세요.

# 참고 사이트

- [공식문서](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces)

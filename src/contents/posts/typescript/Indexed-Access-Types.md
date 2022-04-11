---
slug: "Indexed-Access-Types"
date: "2021.10.17"
title: "[Typescript] Indexed Access Types"
description: "Typescript에서 Indexed Access Types이란 무엇인지 알아보자!"
category: "Typescript"
---

객체 타입에서 특정 요소의 타입을 지정하여 가져올 수 있다.

# [공식 사이트 참조](https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html)

## Indexed Types 사용해보기

```typescript
type Person = {
  age: number;
  name: string;
  alive: boolean;
};

// Age라는 타입은 Person의 age를 참조하여 number타입이 들어간다.
type Age = Person["age"];
```

## 여러가지 요소 가져오기

```typescript
type AgeOrName = Person["age" | "name"];
// type AgeOrName = number | string;

type AllAttributes = Person[keyof Person];
// type AllAttributes = number | string | boolean;
```

AgeOrName은 Person에서 age와 name타입을 가져와서 타입을 생성한다.

AllAttributes는 Person의 키값을 통해 Person 요소들의 타입을 가지고와서 Person의 모든 속성들이 타입을 정의한다.

## Typeof를 이용하여 타입 선언하기

상수로 이미 만들어진 객체를 타입으로 만들때 typeof를 사용할 수 있다.

```typescript
const MyArray = [
  { name: "Alice", age: 15 },
  { name: "Bob", age: 23 },
  { name: "Eve", age: 38 },
];

type Person = typeof MyArray[number];
// type Person = { name: string; age: number; }

type Age = typeof MyArray[number]["age"];
// type Age = number;
```

type Person는 MyArray를 타입으로 만들어 MyArray의 오브젝트 타입이 선언된다.

type Age는 MyArray의 age의 타입이 선언된다.

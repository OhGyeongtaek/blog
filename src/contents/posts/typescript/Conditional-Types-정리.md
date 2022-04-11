---
slug: "Conditional-Types-정리"
date: "2021.10.13"
title: "[Typescript] Conditional Types 정리"
description: "Typescript에서 Utility Type Conditional Types이란 무엇인지 알아보자!"
category: "Typescript"
---

타입을 검사하여 조건에 맞는 타입을 반환하는 타입.

# 사용법

```typescript
// type TypeName = (조건부) ? true type : false type
type SomethingType = SomeType extends OtherType ? TrueType : FalseType;
```

# [Example1 (Typescript 공식 문서 참고)](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html)

```typescript
interface Animal {
  live(): void;
}

interface Dog extends Animal {
  woof(): void;
}

type Example1 = Dog extends Animal ? number : string;
```

해당 예제에서는 interface Dog가 Animal을 상속 받았기에 Example1는 number타입으로 선언이 된다.

# [Example2 (Typescript 공식 문서 참고)](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html)

이번엔 Conditional Types를 사용했을 때와 사용하지 않았을 경우의 코드를 비교해 보자.

```typescript
interface IdLabel {
  id: number /* some fields */;
}

interface NameLabel {
  name: string /* other fields */;
}

// NameOrId 타입 선언
type NameOrId<T extends number | string> = T extends number
  ? IdLabel
  : NameLabel;
```

## Conditional Types를 사용 하지 않은 코드

```typescript
function createLabel(id: number): IdLabel;
function createLabel(name: string): NameLabel;
function createLabel(nameOrId: string | number): IdLabel | NameLabel;
function createLabel(nameOrId: string | number): IdLabel | NameLabel {
  throw "unimplemented";
}

let a = createLabel("typescript");
// let a: NameLabel

let b = createLabel(2.8);
// let b: IdLabel
```

## Conditional Types를 사용한 코드

```typescript
function createLabel<T extends number | string>(idOrName: T): NameOrId<T> {
  throw "unimplemented";
}

let a = createLabel("typescript");
// let a: NameLabel

let b = createLabel(2.8);
// let b: IdLabel
```

Conditional Types를 사용하지 않았을 때 createLabel 함수는 입력 유형에 따라 여러번의 overload를 해야하는 번거로워 생긴다.

위의 여러번의 overload를 해야하는 번거로움을 Conditional Types를 사용하여 단순화 시킬 수 있다.

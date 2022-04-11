---
slug: "Jest-Matcher"
date: "2022.01.17"
title: "[Jest] Jest Matcher"
description: "Jest에서 일반적으로 사용되는 Matcher에 대해 알 수 있다."
category: "Jest"
---

이번에는 Jest를 사용할 때 일반적으로 사용하는 몇가지의 Matcher에 대해 알아보겠습니다.

# [.toBe(value)](https://jestjs.io/docs/expect#tobevalue)

expect에서 전달된 값을 비교하거나 객체 인스턴스 참조 ID를 확인하는 데 사용합니다.

```javascript
test("two plus two is four", () => {
  expect(2 + 2).toBe(4);
});
```

# [.toEqual(value)](https://jestjs.io/docs/expect#toequalvalue)

객체의 값을 비교할 때 사용됩니다.

객체의 인스턴스 참조 ID를 비교하는 것이 아닌 객체의 모든 속성을 재귀적으로 비교하여 값이 같은지를 비교합니다.

```javascript
test("object check", () => {
  const obj = { one: 1, two: 2 };

  expect({ one: 1, two: 2 }).toBe(obj);
});
/* .toBe를 사용할 경우 아래와 같이 에러가 발생
    expect(received).toBe(expected) // Object.is equality

    If it should pass with deep equality, replace "toBe" with "toStrictEqual"

    Expected: {"one": 1, "two": 2}
    Received: serializes to the same string
*/

test("object check", () => {
  const obj = { one: 1, two: 2 };

  expect({ one: 1, two: 2 }).toEqual(obj);
});
```

# [Null, Undefined, False 구분 메서드](https://jestjs.io/docs/using-matchers#truthiness)

- [.toBeNull()](https://jestjs.io/docs/expect#tobenull) : expect에 전달된 값이 null인 경우 통과
- [.toBeUndefined()](https://jestjs.io/docs/expect#tobeundefined) : expect에 전달된 값이 undefined인 경우 통과
- [.toBeDefined()](https://jestjs.io/docs/expect#tobedefined) : expect에 전달된 값이 undefined이 아닌 경우 통과
- [.toBeTruthy()](https://jestjs.io/docs/expect#tobetruthy) : expect에 전달된 값이 if 명령문에서 true로 취급 하는 값인 경우 통과
- [.toBeFalsy()](https://jestjs.io/docs/expect#tobefalsy) : expect에 전달된 값이 if 명령문에서 false로 취급 하는 값인 경우 통과

```javascript
test("Check Null, Undefined, False", () => {
  // 값이 null일 경우만 통과
  expect(null).toBeNull();

  // 값이 undefined만 아니면 통과
  expect(n).toBeDefined();
  expect({}).toBeDefined();
  expect(100).toBeDefined();

  // 값이 undefined일 경우만 통과
  expect(undefined).toBeUndefined();

  // if문에서 true로 취급하는 경우 통과
  expect(true).toBeTruthy();
  expect(1).toBeTruthy();

  // if문에서 false로 취급하는 경우 통과
  expect(false).toBeFalsy();
  expect(null).toBeFalsy();
  expect(0).toBeFalsy();
  expect("").toBeFalsy();
});
```

# [Number 구분 메서드](https://jestjs.io/docs/using-matchers#numbers)

- [.toBeGreaterThan(value)](https://jestjs.io/docs/expect#tobegreaterthannumber--bigint) : value값이 expect value보다 크면 통과
- [.toBeGreaterThanOrEqual(value)](https://jestjs.io/docs/expect#tobegreaterthanorequalnumber--bigint) : value값이 expect value보다 크거나 같으면 통과
- [.toBeLessThan(value)](https://jestjs.io/docs/expect#tobelessthannumber--bigint) : value값이 expect value보다 작으면 통과
- [.toBeLessThanOrEqual(value)](https://jestjs.io/docs/expect#tobelessthanorequalnumber--bigint) : value값이 expect value보다 작거나 같으면 통과

```javascript
test("two plus two", () => {
  const value = 2 + 2;
  // value > 3
  expect(value).toBeGreaterThan(3);
  // value >= 4
  expect(value).toBeGreaterThanOrEqual(4);
  // value < 5
  expect(value).toBeLessThan(5);
  // value <= 4
  expect(value).toBeLessThanOrEqual(4);
});
```

# [정규식으로 문자열 체크하기](https://jestjs.io/docs/using-matchers#strings)

정규표현식으로 문자열을 확인할 경우에는 .toMatch를 사용할 수 있습니다.

```javascript
// 문자열에 I가 포함되어 있지 않은 경우 통과
test("there is no I in team", () => {
  expect("team").not.toMatch(/I/);
});

//문자열에 stop이 포함되어 있으면 있으면 통과
test('but there is a "stop" in Christoph', () => {
  expect("Christoph").toMatch(/stop/);
});
```

# [예외 체크하기](https://jestjs.io/docs/using-matchers#exceptions)

예외를 체크할 때에는 [.toThrow(error?)](https://jestjs.io/docs/expect#tothrowerror)를 이용하여 테스트할 수 있습니다.

## .toThrow에 전달 가능한 인자의 종류

- 정규식 : 오류 메시지가 패턴과 일치할 경우 통과
- 문자열 : 오류 메시지가 문자열과 동일하다면 통과
- 오류 객체: 오류 메세지가 오류 객체의 message의 값과 같다면 통과
- 오류 클레스: 오류 오브젝트의 인스턴스와 클레스가 같으면 통과

```javascript
function compileAndroidCode() {
  throw new Error("you are using the wrong JDK");
}

test("compiling android goes as expected", () => {
  // 에러가 발생했다면 통과
  expect(() => compileAndroidCode()).toThrow();

  // 에러 객체의 인스턴스가 Error라면 통과
  expect(() => compileAndroidCode()).toThrow(Error);

  // error 메시지가 "you are using the wrong JDK" 라면 통과
  expect(() => compileAndroidCode()).toThrow("you are using the wrong JDK");

  // error 메시지에 JDK라는 문자열이 있다면 통과
  expect(() => compileAndroidCode()).toThrow(/JDK/);
});
```

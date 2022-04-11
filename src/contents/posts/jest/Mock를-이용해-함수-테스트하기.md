---
slug: "Mock를 이용해 함수 테스트하기"
date: "2022.02.03"
title: "[Jest] Mock를 이용해 함수 테스트하기"
description: "Mock를 이용해 함수 테스트할 수 있다."
category: "Jest"
---

# Mock Function

Mock Function은 함수의 실제 구현부를 제거하고 함수에 대한 호출 횟수 및 호출에서 전달된 매개변수를 저장한 인스턴스를 전달하여 테스트 할 수 있습니다.

```javascript
const arr = [1, 2, 3, 4, 5, 6];

describe("Mock Functions", () => {
  let someMockFunction;

  beforeEach(() => {
    someMockFunction = jest.fn();

    arr.forEach(someMockFunction);
  });

  it("should call mockCallback function in forEach", () => {
    // 해당 메서드가 몇회 호출되었는지 테스트
    expect(someMockFunction).toBeCalledTimes(6);

    // 메서드에 들어간 인자값을 확인.
    arr.forEach((val, idx) => {
      expect(someMockFunction.mock.calls[idx][0]).toBe(val);
    });
  });
});
```

# Mock 함수의 반환값 지정

반환값이 구현되어 있지 않은 Mock함수에 반환값을 지정할 수 있습니다.

```javascript
const myMock = jest.fn();
console.log(myMock());
// > undefined

myMock.mockReturnValueOnce(10).mockReturnValueOnce("x").mockReturnValue(true);

console.log(myMock(), myMock(), myMock(), myMock());
// > 10, 'x', true, true
```

- .mockReturnValueOnce: 특정값을 1번만 반환
- .mockReturnValue: mock함수가 실행 될 때 마다 해당 설정값을 반환

mockReturnValueOnce, mockReturnValue 두가지 메서드를 1번씩 실행할 경우 mockReturnValueOnce로 설정된 값들이 전부 반환이 되면 mockReturnValue으로 설정된 값이 반환됩니다.

# Mocking 관련 커스텀 메서드

- [.toHaveBeenCalled()](https://jestjs.io/docs/expect#tohavebeencalled): mock 함수가 호출되었는지 확인
- [.toBeCalledTimes(number)](https://jestjs.io/docs/expect#tohavebeencalledtimesnumber) : mock 함수가 몇번 호출되었는지 확인
- [.toHaveBeenCalledWith(arg1, arg2, ...)](https://jestjs.io/docs/expect#tohavebeencalledwitharg1-arg2-): 특정인수를 사용하여 함수가 실행되었는지 확인
- [.toHaveBeenLastCalledWith(arg1, arg2, ...)](https://jestjs.io/docs/expect#tohavebeenlastcalledwitharg1-arg2-): 마지막으로 호출된 함수의 인수를 확인

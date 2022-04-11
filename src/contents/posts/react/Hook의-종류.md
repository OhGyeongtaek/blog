---
slug: "Hook의 종류"
date: "2021.12.20"
title: "[React] Hook의 종류"
description: "React Hook의 종류에 대해 알 수 있고, 상황별로 어떤 Hook을 사용해야 하는지 알 수 있다."
category: "React"
---

# Hook 이란?

함수형 컴포넌트에서 클래스 컴포넌트에서만 이용이 가능했던 State와 라이프 사이클 메서드를 이용할 수 있도록 도와주는 함수입니다.

# [useState](https://ko.reactjs.org/docs/hooks-state.html)

함수형 컴포넌트안에서 상태를 정의할 때 사용되는 훅입니다.

일반적으로 변수는 함수가 종료될 때 사라지지만, state변수는 React에 의해 사라지지 않습니다.

## 사용법

```javascript
import React, { useState } from "react";

function Example() {
  const [count, setCount] = useState(0);

  const handleClickAdd = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <span>{count}</span>
      <button onClick={handleClickAdd}>+</button>
    </div>
  );
}
```

위의 코드 예시와 같이 선언은 [Destructuring(구조 분해 할당)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)방식으로 const [상태값, 상태를 변경할 함수] = useState(초기값); 형식으로 선언할 수 있습니다.

버튼을 클릭했을 때 setCount 함수를 실행하여 카운트값을 변경 시킵니다.

# [useEffect](https://ko.reactjs.org/docs/hooks-effect.html)

useEffect는 함수를 인자로 받습니다.

useEffect에 전달된 함수는 화면에 <strong>렌더링이 완료된 후</strong>에 실행됩니다. 또한 어떤 값이 변경되었을 때도 실행이 되어집니다.

화면이 렌더링이 되기 전에 실행되어야 하는 함수가 있는 경우에 useLayoutEffect라는 훅을 제공합니다.

## 사용법

```javascript
import React, { useState, useEffect } from "react";

function Example() {
  const [count, setCount] = useState(0);

  // 아래의 코드는 타이틀이 `You clicked 0 times`이라고 변경 후 바뀌지 않는다.
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  // 아래의 코드는 타이틀이 `You clicked 0 times`이라고 변경 후 count값이 변경될 때 마다 타이틀이 업데이트 된다.
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  return <></>;
}
```

# [useReducer](https://ko.reactjs.org/docs/hooks-reference.html#usereducer)

useState의 대체 함수입니다. (state, action) => newState의 형태로 reducer를 받고 dispatch 메서드와 짝의 형태로 현재 state를 반환합니다.

다수의 하윗값을 포함하는 복잡한 정적 로직을 만드는 경우나 다음 state가 이전 state에 의존적인 경우에 보통 useState보다 useReducer를 선호합니다.

## 사용법

```javascript
const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </>
  );
}
```

# [useCallback](https://ko.reactjs.org/docs/hooks-reference.html#usereducer)

useCallback은 콜백의 메모이제이션된 버전을 반환합니다.

그 메모이제이션된 버전은 콜백의 의존성이 변경되었을 때에만 변경됩니다.

참조의 동일성에 의존적인 최적화된 자식 컴포넌트에 콜백을 전달할 때 유용합니다.

```javascript
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
```

# [useMemo](https://ko.reactjs.org/docs/hooks-reference.html#usememo)

메모이제이션된 값을 반환합니다.

useMemo는 의존성이 변경되었을 때에만 메모이제이션된 값만 다시 계산합니다.

리엑트에서는 아래 내용과 같이 말합니다.

> <p>useMemo는 성능 최적화를 위해 사용할 수는 있지만 의미상으로 보장이 있다고 생각하지는 마세요.<p>
> <p>useMemo를 사용하지 않고도 동작할 수 있도록 코드를 작성하고 그것을 추가하여 성능을 최적화하세요.<p>

useMemo와 useCallback을 난무해서 쓸 경우 해당값이 메모리에 캐싱이되어 가비지컬렉터가 재역할을 하지 못하게 됩니다.

useMemo를 사용하는것은 상쇄할만큼 이익을 가져다 주지는 않습니다.

그래서 리엑트에서 "useMemo를 사용하지 않고도 동작할 수 있도록 코드를 작성하고 그것을 추가하여 성능을 최적화하세요." 라고 말을 하는 것 같습니다.

## 사용법

```javascript
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

# [useRef](https://ko.reactjs.org/docs/hooks-reference.html#useref)

HTML 객체에 접근할 때 사용됩니다.

## 사용법

```javascript
function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}
```

# [useLayoutEffect](https://ko.reactjs.org/docs/hooks-reference.html#uselayouteffect)

useEffect의 경우에는 화면이 렌더링 된 뒤 호출이 되어지지만 useLayoutEffect는 화면이 그려지기 전에 실행되어지는 훅입니다.

렌더링될 상태값이 렌더링이 되어지기 전에 상태값이 설정되어 있어야 할 경우 사용자 경험을 위해 useLayoutEffect를 사용한다면 좋은 사용자경험을 제공할 수 있습니다.

## 사용법

```javascript
useLayoutEffect(() => {
  // effect
  return () => {
    //clean up
  };
}, [count]);
```

# 참고자료

- [React - Hook API 참고서](https://ko.reactjs.org/docs/hooks-reference.html)
- [Kent C. Dodds - When to useMemo and useCallback](https://kentcdodds.com/blog/usememo-and-usecallback?ck_subscriber_id=1410661209)

---
slug: "this란"
date: "2021.11.19"
title: "[Javascript] this란?"
description: "[Javascript] Javascript에서 this가 상황별로 어떤 객체가 들어가있는지 알 수 있다."
category: "Javascript"
---

# this란?

함수가 실행될 때 암묵적으로 생성되는 객체.

# this는 어떤식으로 결정이 될까요??

우선 [MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/this)을 왔을 때 this는 "대부분의 경우 this의 값은 함수를 호출한 방법에 의해 결정됩니다." 라고 나와있습니다.

그럼 이제 어떤식으로 호출이 되어지는지 확인해 보겠습니다.

```javascript
const obj = {
  description: "this 테스트중",
  thisTest: function () {
    console.log("this는", this, "입니다");
  },
};

// obj 객체 출력
obj.thisTest();

const { thisTest } = obj;

// window 객체 출력 global = window
console.log(this);

// global에서 함수를 실행 했기 때문에 window 객체 출력
thisTest();
```

javascript 에서 this는 누가 호출했는지에 따라 달라집니다.

# bind, call, apply의 차이점

호출에 따라 달라지는 this를 고정하기 위해서는 bind, call, apply를 사용할 수 있습니다.

- bind: 바인딩 된 함수를 반환
- call: 바인딩 된 함수를 실행 (parameter를 순차적으로 입력)
- apply: 바인딩 된 함수를 실행 (parameter를 2번째 인자에 배열로 입력)

```javascript
const bindObject = {
  description: "bind가 된 객체를 테스트 하기 위한 객체",
  console: function () {
    console.log(this, arguments[0]);
  },
};

const bindFunction = bindObject.console.bind(bindObject);

// {description: 'bind가 된 객체를 테스트 하기 위한 객체', console: ƒ} 1
bindFunction(1);

// {description: 'bind가 된 객체를 테스트 하기 위한 객체', console: ƒ} 1
bindObject.console.call(bindObject, 1, 2, 3);

// {description: 'bind가 된 객체를 테스트 하기 위한 객체', console: ƒ} 4
bindObject.console.apply(bindObject, [4, 5, 6]);
```

# [화살표 함수(Arrow Function)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

화살표 함수(Arrow Function)에서의 this를 한번 알아보겠습니다.

- this나 super에 대한 바인딩이 없고, methods 로 사용될 수 없습니다.
- 반면 화살표 함수에는 this에 대한 바인딩이 없기때문에 bind, call, apply를 사용할 수 없습니다.

```javascript
const arrowObj = {
  description: "arrow function을 확인하기 위한 함수",
  arrowFnc: () => {
    console.log(this);
  },
};

// window 객체 출력
arrowObj.arrowFnc();
// window 객체 출력
arrowObj.arrowFnc.bind(arrowObj)();
// window 객체 출력
arrowObj.arrowFnc.apply(arrowObj);
// window 객체 출력
arrowObj.arrowFnc.call(arrowObj);
```

위에 코드를 보면 bind, apply, call를 이용해 this를 다시 바인딩을 할려고 해도 this는 window를 출력하는 것을 볼 수 있습니다.

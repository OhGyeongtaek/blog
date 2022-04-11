---
slug: "Event-Loop"
date: "2022.02.28"
title: "[Javascript] Event Loop"
description: "Event Loop에 대해 이해하고 Call Stack, Task Queue, Heap에 대해 이해할 수 있다."
category: "Javascript"
---

자바스크립트는 <b>싱글스레드</b>언어입니다.
하지만 자바스크립트로 코드를 작성하다 보면 한나의 태스크만 처리하는 것이 아닌 많은 태스크를 동시에 처리하는것 처럼 느껴집니다.

그럼 이제 자바스크립트는 싱글스레드 언어인데 어떻게 많은 태스크를 동시에 처리하는것 처럼 느껴지는지에 대해 알아보겠습니다.

# Javascript Engine

이벤트 루프를 알아보기 전에 자바스크립트 엔진을 구성하는 3가지 영역에 대해 알아보겠습니다.

## Call Stack

자바스크립트는 단 하나의 콜스택만 사용을 합니다.
하나의 함수가 실행되면 이 함수 실행이 끝날 때까지 다른 어떤 태스크도 수행될 수 없다는 의미를 갖습니다.
실행한 함수 내부에서 다른 함수를 실행할 경우 순차적으로 콜스택에 해당 함수가 생성되고, 해당 함수가 종료되면 콜스택에서도 제거됩니다.

## Callback Queue

자바스크립트는 비동기 함수를 만났을 때 <b>Web API</b>라는 공간에 프레임을 생성하게 됩니다.
Web API에서 해당 함수가 실행될 준비가 됬다면, Callback Queue에 함수를 생성하고 Web API에서는 제거되게 됩니다.
Callback Queue에서는 Call Stack의 태스크가 끝날때 까지 기다린 뒤 탸스크가 끝나면 Callback Queue에 들어온 순서대로 태스크를 실행하게 됩니다.
이 부분에 대해서는 아래에서 추가 설명 하겠습니다.

## Heap

참조값을 갖는 객체, 함수, 배열이 힙에 저장됩니다.

<figure>
    <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FkF7gU%2Fbtq1Xlwhaaz%2FMAR4LAk3Tbj254Lp0fZK9k%2Fimg.png" alt="자바스크립트 메모리 구조: 콜스택, 메모리 힙" title="자바스크립트 메모리 구조: 콜스택, 메모리 힙"/>
    <figcaption>
        <a href="https://curryyou.tistory.com/276">자바스크립트 메모리 구조: 콜스택, 메모리 힙 - 카레유</a>
    </figcaption>
</figure>

배열, 객체, 함수를 선언했을 때 콜스택 상의 렉시컬 환경에 해당 인스턴스의 참조값이 저장이 되고, 힙 영역에는 해당 인스턴스가 생성 됩니다.

# 이벤트 루프 동작 방식

<figure>
    <img src="https://user-images.githubusercontent.com/20200820/155964887-2e1db2db-b62a-4d7c-991e-4c5a0f6174e0.png" title="이벤트 루프 동작 방식" alt="이벤트 루프 동작 방식" />
    <figcaption>이벤트 루프 동작 방식</figcaption>
</figure>

이벤트 루프가 동작하는 방식에 대해 코드를 통해 확인해보겠습니다.

```javascript
function first() {
  console.log("첫번 째");
  second();
}

function second() {
  setTimeout(() => {
    console.log("두번 째");
  }, 1000);

  third();
}

function third() {
  console.log("세번 째");
}

first();
```

가장 먼저 first 함수가 콜스택에 쌓입니다.
first에서 console.log가 실행되며 콜스택에 console.log가 추가 된 뒤 출력 후 콜스택에서 지워집니다.
다음으로 second 함수가 콜스택에 추가되고, setTimeout을 Web API에 전달 하고 third함수를 실행합니다.
third함수도 콜스택에 추가되고, console.log가 출력되고, 콜스택에서 third가 제거되고, second가 제거되고, first가 제거되면서 콜스택이 비어지게 됩니다.

Web API로 전달된 setTimeout은 1초뒤에 콜백함수를 콜백큐에 전달하여 콜스택이 비면 해당 콜백함수를 콜스택에 전달하여 로직을 실행합니다.
이때 콜백큐에서 콜스택이 비는것을 계속 감지하는 로직이 이벤트 루프입니다.

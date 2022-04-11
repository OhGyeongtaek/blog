---
slug: "Virtual-DOM이란"
date: "2021.12.18"
title: "[React] Virtual DOM이란?"
description: "Virtual DOM이란 무엇인지, 브라우저의 렌더링 과정에 대해 설명할 수 있다."
category: "React"
---

우선 Virtual Dom이 무엇인지 들어가기에 앞서 브라우저의 렌더링 과정에 대해 알아보겠습니다.

# 브라우저의 렌더링 과정

1. DOM Tree 생성

   렌더 엔진이 HTML을 파싱하여 DOM 노드로 이루어진 트리 생성

2. Render Tree 생성

   Css파일과 Inline 스타일을 파싱, DOM + CSSOM = Render Tree

3. Layout (Reflow)

   각 노드들의 스크린에서의 좌표에 따라 위치 결정

4. Paint (Repaint)

   실제 화면에 그리기

# Virtual DOM은 어떤 문제를 해결하기 위한 기술인가?

1. 브라우저는 사용자의 액션에 의해 DOM에 변화가 발생하면 Render Tree가 재생성이 되고 Render Tree > Layout > Paint 과정이 반복되어 비효율 적인 문제가 생기게 됩니다.

2. SPA에서 DOM Tree을 즉각적으로 변경해야하는 작업이 많아짐에 따라 DOM 조작을 더 효율적으로 할 수 있는 최적화가 필요해졌습니다.

# 그래서 Virtual DOM이란??

Virtual DOM이란 UI에서 일어나는 동작에 의해 렌더링을 하게 된다면 Virtual DOM에서 렌더링 후 실제 DOM과 비교를 하여 업데이트 된 부분만 실제 DOM에 적용시켜 실제 DOM 전체를 렌더링하지 않아도 됩니다.

Virtual DOM은 실제 브라우저에서 렌더링이 되는것이 아니기 때문에 연산 비용이 적습니다.

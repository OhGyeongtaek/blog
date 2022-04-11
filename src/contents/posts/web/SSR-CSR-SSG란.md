---
slug: "SSR-CSR-SSG란"
date: "2021.12.11"
title: "[WEB] SSR, CSR, SSG란?"
description: "[Web] SSR, CSR, SSG, Isomorphic App, TTV, TTI에 대해 이하할 수 있다."
category: "Web"
---

# SSR(Server Side Rendering)

사용자가 서버에 페이지를 요청하는 시점에 HTML을 생성하여 사용자에게 전달하는 방식

## SSR의 장점

- 초기 화면 로딩 속도가 빠르다.
- SEO에 유리하다.

## SSR의 단점

- 화면 깜빡임이 있다.
- TTV와 TTI간의 간격이 있어 사용자 경험에 좋지 않다.
- 서버에 해당 페이지를 요청하는 즉시 HTML을 생성하기에 서버 부하가 있다.

# CSR(Client Side Rendering)

사용차가 첫 요청시 서버에서 빈 HTML 파일을 전달받고 HTML에 링크된 JS파일을 서버로부터 다운받아 동적으로 HTML을 생성하는 방식

## CSR의 장점

- 페이지가 이동되어지는 시점에 페이지가 전부 렌더링이 되지 않아 빠르다.
- TTV와 TTI의 간격이 없어 사용자 경험에 좋다.

## CSR의 단점

- SEO가 불리하다.
- 초기 화면 로딩속도가 느리다.

## CSR의 단점 보안 방법

### 초기 로딩속도 개선 방법

- 라이브러리, 프레임워크에서 제공하는 Code Splitting 기능을 통해 App.js의 파일 크기를 줄일 수 있다.
- 웹팩에서 제공하는 Tree Shaking 기능을 통해 실제로 사용하지 않는 코드를 빌드할 때 제거하는 기능을 사용할 수 있다.

### SEO 개선 방법

- pre render 플러그인을 통해 HTML파일을 미리 생성해두는 방식을 사용할 수 있다.

# SSG(Static Side Generation)

서버에서 미리 사용자에게 보여지는 HTML을 생성해두고 사용자가 요청시 미리 만들어 둔 HTML파일을 전달하는 방식

# TTV(Time To View)

사용자가 사이트에 접속 하고부터 화면이 보는 시점까지의 걸리는 시간.

# TTI(Time To Interact)

사용자가 사이트에 접속 하고부터 사이트의 기능을 사용할 수 있을 때 까지의 시간.

# Isomorphic App

초기 랜더링방식에서는 SSR를 사용하고 그 이후부터는 CSR를 사용하는 방식의 어플리케이션

## Isomorphic App의 장점

- SEO에 유리하다.
- 화면 깜빡임이 없다.
- 초기 렌더링 방식이 빠르다.
- 페이지가 이동되어지는 시점에 페이지가 전부 렌더링이 되지 않아 빠르다.

## Isomorphic App의 단점

- CSR에 비해 코드의 복잡도가 올라간다.
- 프레임워크다 보니 직접 제어할 수 없는 영역이 존재한다.

# 그럼 SSR, CSR, SSG, Isomorphic App 중 어떤것을 사용해야 할까요??

사이트의 성격에 따라 어떤 렌더링 방식을 사용할지 고민을 해봐야 합니다.

- SSR: 데이터가 자주 바뀌고 SEO를 통해 검색포털 상위에 노출해야 하는 경우 적합합니다.
- CSR: 고객의 개인정보가 많이 이용되어 지는 경우 SEO를 통해 포털 상위에 노출이 필요 없는 경우 적합합니다.
- SSG: 페이지의 내용이 바뀔일이 많이 없고 SEO를 통해 포털 상위에 노출해야 하는 경우 적합합니다.
- Isomorphic App: 빠른 반응속도도 중요하고 SEO를 통해 포털 상위에 노출이 필요한 경우 적합니다.

# 참고

- [드림코딩 엘리 - 서버사이드 렌더링](https://www.youtube.com/watch?v=iZ9csAfU5Os)
- [코드팩토리 - Client Side Rendering vs Server Side Rendering](https://www.youtube.com/watch?v=5W72UHb-9iI)
- [우아한Tech- 신세한탄의 CSR&SSR](https://www.youtube.com/watch?v=YuqB8D6eCKE)

---
slug: "SSO(Single Sign On) 처리하기"
date: "2024.11.30"
title: "SSO(Single Sign On) 처리하기"
description: "SSO(Single Sign On)를 이해하고 SSO를 구축할 수 있다."
category: "SSO"
---
# 📝 개요

회사에서 챗봇 서비스를 구축하면서, 메인 ERP 서비스에 로그인한 후에도 챗봇 서비스로 이동할 때 로그인을 유지할 수 있도록 **SSO(Single Sign-On)** 구축을 위한 PoC(Proof of Concept)를 진행했습니다.

# 📝 SSO란 무엇인가?

**SSO(Single Sign-On)**는 한 번의 인증으로 여러 서비스나 사이트를 별도의 인증 없이 이용할 수 있도록 하는 기술입니다. 사용자는 반복적으로 로그인할 필요가 없으며, 인증 정보는 안전하게 공유됩니다.

# 🔧 구현 방법

## 1. **로그인 요청 및 쿠키 설정**  
   사용자가 로그인을 요청하면 서버에서 인증 정보를 확인한 뒤, 인증이 완료되면 `Set-Cookie`를 통해 쿠키를 설정합니다. 이때 쿠키에는 다음 속성이 포함됩니다:
   - **SameSite=None**: 크로스 도메인에서도 쿠키가 전송될 수 있도록 설정.
   - **Secure**: HTTPS에서만 쿠키를 전송.
   - **HttpOnly**: JavaScript로 쿠키에 접근하지 못하도록 설정.
   - **Domain**: 인증 정보가 공유될 도메인 지정. 
       - 예를 들어, `a.test.com`과 `b.test.com`에서 인증을 공유하려면 `Domain=.test.com`으로 설정해야 합니다. 이렇게 하면 두 서브도메인에서 동일한 쿠키를 사용할 수 있습니다.


## 2. **프론트엔드의 쿠키 전송 설정**  
프론트엔드에서는 `credentials` 옵션을 설정하여 동일한 쿠키를 포함해 요청을 보낼 수 있도록 처리합니다. 

예를 들어, `A 사이트`와 `B 사이트`에서 API 요청 시 동일한 쿠키를 사용하려면 두 사이트 모두 `credentials` 설정이 필요합니다.

# 🔧 Credentials 설정 방법

## 1. Axios를 사용하는 경우
Axios를 사용할 때는 `withCredentials` 옵션을 활성화해야 합니다.

```typescript
const axiosInstance = axios.create({
  baseURL: 'https://example.com/api',
  withCredentials: true, // 쿠키 포함
});
```

## 2. Fetch를 사용하는 경우

Fetch를 사용할 때는 요청마다 credentials 옵션을 추가해야 합니다.

```typescript
fetch('https://example.com/api/user', {
  method: 'GET',
  credentials: 'include', // 쿠키 포함 (same-origin 또는 cross-origin 지원)
})
```

# 📊 데이터 흐름도

![image](https://github.com/user-attachments/assets/766c93cf-3bd1-4264-8e8b-038eefc12f71)

#  🎉 결과

![image](https://github.com/user-attachments/assets/283031cf-4218-4c1e-902e-5dc786966c19)

---
slug: "모바일 웹뷰에서 Safe Area 처리하기"
date: "2024.12.01"
title: "모바일 웹뷰에서 Safe Area 처리하기"
description: "웹뷰 서비스 모바일 Safe Area의 여백을 기기별로 다르게 줄 수 있다."
category: "Mobile"
---

# 📝 개요

> Safe Area는 모바일 기기에서 실제 콘텐츠를 표시할 수 있는 안전한 영역을 의미합니다. 제가 처음 웹뷰 프로젝트를 진행하면서 겪은 Safe Area 처리 경험을 공유합니다.


# Safe Area를 처음 알게 된 경험

프로젝트 초기, 저는 Safe Area의 존재를 인지하지 못했습니다. 앱을 개발하고 디자이너에게 시연했을 때, 의도했던 dim(어두운) 영역이 기기의 최상단까지 자연스럽게 채워지지 않았습니다.

## 문제의 화면

<img src="https://github.com/user-attachments/assets/fec8278d-7d41-4b5f-a3d6-45cbd51a9d3f" width="360px" />

# 문제 해결 방법

### 1. CSS를 통해 처리하는 방법.

* env(safe-area-inset-*) 를 사용하는 방법
    
### 2. flutter에서 Safe Area에 대한 사이즈 값을 웹뷰를 띄울 때 주입하는 방법.

- app쪽에서 스타일에 대해 개입하기 때문에 유지보수 측면에서 좋지 않다고 판단했습니다.

### 3. 그냥 자연스러움을 포기하는 방법.

- 최후의 수단이라고 생각하고 고려조차 하지 않았습니다.

저희는 일단 1번 CSS를 통해 처리하는 방법을 선택했습니다.

# css 적용 방법

다음과 같이 header부분에 css를 적용하면 됩니다.

```css
header {
    ...
    padding-top: env(safe-area-inset-top); /* Safe Area 고려한 패딩 */
    ...
}
```

# 결과 화면 

flutter쪽에서 Safe Area를 제거하고 웹에서 css 스타일을 적용하면 적용이되면 다음과 같이 출력됩니다.

dim 부분이 SafeArea부분까지 자연스럽게 출력되는 모습을 확인할 수 있습니다.

<img src="https://github.com/user-attachments/assets/d02abf55-c3ab-41a7-931a-481c52869bfb" width="360px"/>
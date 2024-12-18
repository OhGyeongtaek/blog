---
slug: "경력기술서"
category: "경력기술서"
---

# 경력기술서 <span class="period">(6년 1개월)<span>

## 똑똑 <span class="period">2022.10.01 ~ 현재(2년 2개월)<span>

### 프로젝트명
* VC투자 솔루션 개발 재개발 프로젝트

### 서비스 설명
* VC에서 미팅부터 투자까지의 프로세스를 관리하고, 투자 업체의 분기별 사업현황을 보고 받아 투자 정보를 LP에게 보고하는 서비스.

### 프로젝트 목표
* 기존 레거시 코드의 불안정성, 개발 생산성을 높이기 위해 프로젝트를 리빌딩

### 담당업무
* 기존 시스템의 기술 부채를 청산하고, 안정성과 유지보수성을 개선하는 것을 목표로 한 프로젝트에서, 개발 생산성을 높이기 위해 다양한 시도를 했습니다. 시스템 운영을 효율화하고, 비효율적인 작업을 줄이기 위한 자동화 프로세스를 구축하여 회사 전체의 작업 효율성을 강화했습니다.

### 본인이 수행한 역할
**Figma API 연동을 통한 자동화 구현**
* 디자이너가 Figma에 등록한 아이콘 파일을 자동으로 생성하고, TypeScript의 union 타입을 자동으로 생성하는 스크립트를 작성하여  디자인팀과의 비효율적인 소통을 개선했습니다.
**공통 코드 업무 최적화**
* API 호출 비용을 줄이기 위해 데이터 변경 시 공통 코드 담당자가 DB 수정 후 깃액션을 통해 자동으로 업데이트 후 PR이 생성되도록 프로세스를 개선했습니다.
**구글시트 API를 활용한 노코드 툴 구현**
* 구글시트에 내용을 입력하면 자동으로 UI 컴포넌트를 코드로 변환하는 노코드 툴을 개발했습니다. 해당 툴은 2분마다 API를 호출해 코드를 생성하며, 이를 통해 기획자가 목업을 작성하는 시간과 프론트엔드 개발자가 레이아웃을 설계하는 시간을 단축시켰습니다.

### 성과
* Figma API를 이용해 디자이너팀과의 불필요한 소통 제거
* 공통 코드 업데이트 업무 자동화로 공통 코드 담당자와의 불필요한 소통 제거
* 구글시트 API를 활용한 노코드 툴 구현으로 기획자의 목업 파일을 생성하는 시간, 프론트 개발자의 레이아웃을 구현하는 시간 단축

### 팀 규모
* 프론트 5명, 기획 7명, 백엔드 4명

### 기술 스택
* Vue3, Pinia, TypeScript, AG Grid, Figma API, Google Sheet API, Yarn Workspace 활용.

---

### 프로젝트명
* VC투자 솔루션 유지보수 및 UI프레임워크 자체 컴포넌트로 마이그레이션

### 서비스 설명
* VC에서 미팅부터 투자까지의 프로세스를 관리하고, 투자 업체의 분기별 사업현황을 보고 받아 투자 정보를 LP에게 보고하는 서비스.

### 프로젝트 목표
* VC의 투자 프로세스를 통합적으로 관리할 수 있는 시스템을 구축

### 담당 업무
* 투자정보 ERP 시스템의 신규 개발 및 기존 서비스의 개선 작업을 통해 안정성을 강화하고, 개발 효율성을 향상시키는 데 주력했습니다.

### 본인이 수행한 역할
**에러 로깅 시스템 구축**: 기존 시스템 유지보수 중 디버깅에 많은 시간이 소요되는 문제가 발견되어, 이를 해결하기 위해 에러 로깅 시스템 구축
* Request Header에 있는 사용자 브라우저 환경 데이터와 에러 메시지를 데이터베이스(DB)에 기록하는 방식을 도입했습니다.
* 이를 통해 에러 분석 시간과 대응 시간이 크게 감소하며 시스템 안정성과 유지보수 효율성이 강화되었습니다.

**UI 프레임워크의 의존성 제거 및 자체 컴포넌트 구축**:
* 기존 시스템에서 사용되던 Quasar 컴포넌트를 모두 제거하고, 요구사항에 맞는 자체 컴포넌트를 새로 설계 및 구현. 이를 통해 컴포넌트의 경량화와 커스터마이징이 가능해졌으며, 유지보수성과 확장성을 크게 개선했습니다.

**서버 실행 자동화 스크립트 개발**: 
* 복잡한 서버 실행 절차를 1개의 명령어로 통합하여, 3개의 서버가 동시에 실행되도록 자동화 스크립트를 작성. 개발 서버 실행시간을 크게 단축시켰습니다.

### 팀 규모
* 프론트 5명, 기획 3명, 백엔드 4명

### 성과
* 에러 로깅 시스템 도입으로 문제 해결 시간 단축
* 퀘이사 의존성 제거와 자체 컴포넌트 개발로 코드 경량화 및 유지보수성 향상
* 서버 실행 자동화로 개발 준비 시간을 단축

### 팀 규모
* 프론트 5명, 기획 3명, 백엔드 4명

### 기술 스택
* 프론트엔드: Vue3, Pinia, TypeScript
* 도구 및 라이브러리: RushJs, TUI Grid
* 백엔드: Node.js, Axios

---

## 가치브라더 <span class="period">2020.02 ~ 2021.09(1년 7개월)<span>

### 프로젝트명
* 아이알피 전자출결 시스템 백오피스 개발

### 서비스 설명
* 어린이집에서 아이들의 출석 시간을 비콘과 키오스크를 이용해 기록하고, 해당 데이터를 보육통합시스템으로 전송하는 관리 시스템입니다.

### 프로젝트 목표
* 출결 데이터 관리 및 보육통합시스템에 출결 데이터 전송 과정을 자동화하는 프로젝트입니다.

### 담당 업무
* 관리자 페이지 설계 및 구현을 포함해 전반적인 시스템 유지보수와 자동화 작업을 진행하며 시스템 성능을 개선했습니다.

### 본인이 수행한 역할
**백업 시스템 개선**:
* 기존에 한달에 1번 6시간 소요되던 백업 프로세스를 자동화하고 주기를 하루 단위로 변경하여 백업 시간이 1~3분으로 대폭 단축. (99% 단축)

**키오스크 설정 자동화**:
* 키오스크 설정 과정에서 반복적으로 발생하던 수작업을 제거하기 위해 자동 실행 스크립트를 개발하여 설정 작업 시간을 크게 단축.

### 성과
* 백업 시스템 자동화로 백업의 시간 소요를 99% 단축.
* 키오스크 설정 작업 인원을 기존 2명에서 1명으로 감소하여 인력 효율성 향상.

### 팀 규모
* 풀스택 개발자 2명, CS 4명

### 기술 스택
* 프론트엔드: Vue.js, Vuetify, TypeScript, Axios
* 백엔드: Laravel, ORM

---
### 프로젝트명
* 오네키즈 인수합병 API 구축

### 서비스 설명
* 오네키즈 서비스를 인수합병하기 위해 어린이집 출결 데이터와 단말기 정보를 통합 관리하는 API를 개발 및 테스트한 프로젝트입니다.

### 프로젝트 목표
* 오네키즈와의 서비스 통합을 통해 출결 데이터 및 알림 기능을 안정적으로 제공하여 800개 이상의 어린이집과 재계약 성공.

### 담당 업무
* 서비스 통합을 위한 API 설계 및 구현, 테스트를 수행하여 데이터 일관성과 안정성을 확보했습니다.

### 본인이 수행한 역할
**출결 데이터 및 단말기 정보 API 구현**:
* 어린이집의 출결 데이터와 단말기 정보를 수집 및 관리하기 위한 API를 설계하고 안정적으로 구현.

### 성과
* 데이터 일관성과 안정성을 확보하며 800개 어린이집과 성공적으로 재계약.

### 프로젝트 규모
* 단말기 개발자 1명, 풀스택 개발자 2명

### 기술 스택
* 백엔드: Laravel, MariaDB
---
## 넥스트소프트 <span class="period">2015.11 - 2018.03(2년 4개월)<span>

### 프로젝트명
* DB그룹 보건 관리 시스템 구축

### 서비스 설명
* DB그룹 임직원의 안전 및 보건 관리를 위한 시스템으로, 건강 데이터의 실시간 관리를 하는 임직원의 복지 서비스.

### 본인이 수행한 역할
**API 통신 설계 및 구현**
* 클라이언트와 서버 간의 API 통신을 설계하고 안정적으로 구현하여 실시간 건강 데이터를 제공했습니다.

**UI 설계 및 구현**
* ExtJs와 HTML을 활용하여 사용자 친화적인 UI를 설계하고, 실시간 데이터 시각화를 통해 사용자 편의성을 높였습니다.

**데이터베이스 구조 분석 및 API 쿼리 구현**
* Oracle을 이용하여 저장, 수정, 조회 로직을 구현했습니다.

### 성과
* 실시간 건강 데이터 관리 시스템을 개발하여 DB그룹 임직원의 보건 관리 시스템 성공적으로 구축.

### 팀 규모
* 웹개발자 5명, 기획 2명, 퍼블리셔 1명, DBA 1명

### 기술 스택
* Java, Spring, ExtJs, HTML, CSS, Oracle

---

### 프로젝트명
* 에쎈코어 SCM Rolling 시스템 구축

### 서비스 설명
* 매출 데이터를 기반으로 제품 수요를 예측하고, 재고 관리 효율성을 극대화하는 시스템.

### 프로젝트 목표
* 수요 예측 데이터를 사용자에게 안정적으로 제공하고, 직관적인 UI를 통해 재고 관리 업무를 지원.

### 담당 업무
* API 통신을 구현하여 데이터를 전달하고, 데이터를 시각적으로 표시하는 UI를 개발했습니다.


### 본인이 수행한 역할
**API 통신 구현**
* 클라이언트와 서버 간 데이터를 안정적으로 전달하기 위한 API를 구현했습니다.

**UI 개발**
* xPlatform을 활용하여 사용자가 매출 데이터를 쉽게 확인하고 분석할 수 있는 UI를 개발했습니다.

**데이터 로직 구현**
* 매출 데이터를 기반으로 비즈니스 로직을 구현하여 사용자 요구사항을 충족시켰습니다.

### 성과
* 사용자 친화적인 UI를 통해 재고 관리와 수요 예측화면 구현.
* 재고 관리 프로세스를 지원하는 도구로 사용자 만족도 향상.

### 팀 규모
* 개발자 3명, 기획 3명

### 기술 스택
* Java, Spring, xPlatform, Oracle
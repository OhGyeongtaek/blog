---
slug: "Jest-프로젝트-환경설정-및-간단한-테스트코드-작성"
date: "2022.01.13"
title: "[Jest] Jest 프로젝트 환경설정 및 간단한 테스트코드 작성"
description: "Jest 프로젝트 환경설정을 완료한 후 간단한 테스트코드를 작성할 수 있다."
category: "Jest"
---

이번에는 Jest를 이용하여 테스트 코드를 작성하는 방법에 대해 알아보겠습니다.

우선 작업환경 셋팅부터 하겠습니다.

```bash
mkdir jest-study

cd jest-study

// 해당 폴더를 npm환경으로 만들기
npm init --yes

//jest를 글로벌 환경에 설치
npm install jest --global

// Error: EACCES: permission denied가 뜬다면
sudo npm install jest --global

// 해당 패키지에서 jest를 사용할 수 있도록 설정
jest --init

// package.json에 jest를 사용할 수 있도록 스크립트를 추가할 것인지
 ✓ Would yo like to use Jest when running "test" script in "package.json"? > Yes

// Typescript를 사용할 것인지
 ✓ Would you like to use Typescript for the configuration file? > no

// 테스트 환경 선택
 ✓ Choose the test environment that will be used for testing > node

// jest가 coverage reports를 보여주기를 원하는지
 ✓ Do you want Jest to add coverage reports? > no

// js 코드를 빌드할 때 어떤 엔진을 사용할 것인지
 ✓ Which provider should be used to instrument code for coverage? > v8

// 테스트를 할 때 마다 mock call이나 instance를 clear할 것 인지
 ✓ Automatically clear mock calls and instances between every test? > yes
```

위와 같이 설정을 완료 했다면 이제 jest를 사용할 준비가 완료 되었습니다.

이제 예제코드를 통해 간단한 코드를 테스트 해보겠습니다.

```javascript
// src > basic > add.js
function add(a, b) {
  return a + b;
}

module.exports = add;
```

간단하게 a + b 를 하는 함수입니다.

```javascript
// src > basic > test > add.test.js
const add = require("../add.js");

// test('description', callback, timeout)
test("1 + 2를 했을 때 3이 return 되는지 테스트", () => {
  expect(add(1, 2)).toBe(3);
});
```

- [test(description, callback, timeout)](https://jestjs.io/docs/api#testname-fn-timeout)
  - it으로도 사용이 되며 모든 테스트파일에서 테스트를 실행할 때 필요한 함수
- [expect(value)](https://jestjs.io/docs/expect#expectvalue)
  - 값을 테스트 할 때 마다 사용되는 함수
- [.toBe(value)](https://jestjs.io/docs/expect#tobevalue)
  - expect에 전할한 값을 비교하거나 객체 인스턴스 참조 ID를 확인하는 데 사용합니다.

npm run test를 통해 jest를 실행합니다.

```bash
npm run test

  ✓ 1 + 2를 했을 때 3이 return 되는지 테스트 (2 ms)

----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------|---------|----------|---------|---------|-------------------
All files |     100 |      100 |     100 |     100 |
 add.js   |     100 |      100 |     100 |     100 |
----------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.567 s, estimated 1 s
Ran all test suites.
```

위에 표 차트로 나오는게 위에서 jest 설정할 때 coverage reports를 볼 수 있게 설정하면 나오는 데이터입니다.

저는 보여드리기 위해 yes를 설정했고 다음 글부터는 coverage reports없이 진행하겠습니다.

여기까지는 기본셋팅 후 add를 테스트하는 테스트 코드를 구현해 봤습니다.

coverage reports를 보고싶지 않으신 분들은 jest.config.js에서 collectCoverage값을 false로 바꿔주세요.

# 참조

- [Jestjs Getting Started](https://jestjs.io/docs/getting-started)

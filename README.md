# skala-vue

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Hands on Log

### 01. Project Scaffolding & HMR

#### 학습 내용

- Vue 개발을 위한 로컬 개발 환경 구성
  - Node.js 설치 및 실행 환경 확인
  - VS Code를 활용한 Vue 개발 환경 구성
  - Windows 환경에서는 WSL2 / Ubuntu 및 WSL 확장 프로그램 활용
- Vue 프로젝트의 생성 과정과 기본 디렉터리 구조 이해
- Vite 개발 서버의 실행 방식 이해
- Vue Router가 적용된 기본 프로젝트 구조 확인
- HMR(Hot Module Replacement)의 개념과 동작 방식 이해

#### 실습 내용

- skala-vue 프로젝트 생성 및 실행
- npm run dev를 사용해 Vite 개발 서버 실행
- http://localhost:5173/에서 애플리케이션 정상 동작 확인
- src, components, views, router, assets 등 기본 프로젝트 구조 확인
- App.vue에서 RouterLink, RouterView를 통해 화면이 전환되는 구조 확인
- Home / About 메뉴를 이용해 /about 경로로 이동
- src/views/AboutView.vue의 Template 내용을 직접 수정
- 브라우저를 새로고침하지 않고 수정 사항이 즉시 반영되는지 확인하여 HMR 동작 검증

#### 실습 결과

AboutView.vue의 화면 문구를 변경한 뒤 파일을 저장하자 별도의 브라우저 새로고침 없이 변경된 내용이 즉시 화면에 반영되는 것을 확인하고, 이를 통해 Vite 개발 환경에서 HMR이 정상적으로 동작하고 있음을 확인했다.
또한 App.vue에서 URL에 따라 서로 다른 View 컴포넌트가 표시되는 Vue 프로젝트의 기본적인 화면 구성 방식도 확인했다.

#### 핵심 정리

- Project Scaffolding
  - 애플리케이션 개발을 시작할 수 있도록 기본 파일, 디렉터리, 설정 등을 자동으로 구성하는 과정
- Vite
  - Vue 프로젝트에서 개발 서버 실행과 빌드 등을 지원하는 프론트엔드 개발 도구
  - 개발 중 빠른 실행과 HMR 지원
- HMR (Hot Module Replacement)
  - 개발 중 소스 코드가 변경되었을 때 전체 페이지를 다시 불러오지 않고 변경된 모듈을 즉시 반영하는 기능
  - 코드 수정 결과를 빠르게 확인할 수 있어 개발 효율을 높여줌
- Vue Router 기본 구조
  - RouterLink는 지정된 경로로 이동하기 위한 링크 제공
  - RouterView는 현재 URL에 대응하는 View 컴포넌트가 표시되는 위치

#### 직접 확인한 파일

src/App.vue
src/views/AboutView.vue

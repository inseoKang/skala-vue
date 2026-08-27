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

### 02. Weather Mockup

#### 학습 내용

- Vue Template에서 반복 렌더링과 조건부 렌더링 사용하는 방법 이해
- `v-for`와 `:key`를 활용한 배열 데이터 반복 출력
- `v-if`, `v-else`를 활용한 조건에 따른 UI 분기
- `ref()`를 활용한 반응형 상태 관리
- `@input`, `@click`을 활용한 사용자 이벤트 처리
- Mock 데이터를 활용해 실제 API 연동 전 화면과 기능을 먼저 구현하는 방식 이해

#### 실습 내용

- 도시별 날씨 정보를 Mock 데이터로 구성
- `v-for`를 사용해 서울, 수원, 부산 등 여러 도시의 날씨 카드를 반복 렌더링
- 각 카드에 고유한 `id`를 지정하고 `:key`로 바인딩
- 기온이 25도 이상인 경우 `🔥 더움`, 25도 미만인 경우 `❄️ 선선함`이 표시되도록 조건부 렌더링 구현
- 검색 입력창에서 `@input` 이벤트를 받아 입력한 도시명을 화면에 실시간 출력
- 날씨 카드를 클릭하면 선택된 도시 정보를 상태바에 표시
- `상세보기` 버튼을 클릭하면 `window.alert()`를 통해 해당 도시의 현재 날씨 상태 출력
- 버튼 클릭 이벤트가 부모 카드 클릭 이벤트까지 전달되지 않도록 `.stop` 이벤트 수식어 적용
- 기본 데이터 외 대구, 제주, 강릉 데이터를 추가하여 Mock 데이터 확장
- Vue 기본 프로젝트의 전역 레이아웃을 수정하여 날씨 대시보드가 화면 너비를 자연스럽게 활용하도록 구성
- 카드, 검색창, 상태 배지, 버튼 등에 스타일과 Hover 효과를 적용하여 대시보드 UI 개선

#### 실습 결과

Mock 데이터를 기반으로 여러 도시의 날씨 정보를 카드 형태로 출력하고, 온도 조건에 따라 서로 다른 상태 배지를 표시하도록 구현했다. 검색창에 입력한 값은 반응형 상태를 통해 즉시 화면에 반영되며, 도시 카드를 선택하면 선택된 도시가 상태바에 표시되는 것을 확인했다.

또한 상세보기 버튼에서는 카드 선택 이벤트와 분리하여 해당 도시의 날씨 상태만 Alert로 표시하도록 구현했다. 기본 Vue 프로젝트의 레이아웃 스타일도 함께 조정하여 한쪽에 좁게 표시되던 화면을 넓은 대시보드 형태로 개선했다.

#### 핵심 정리

- **v-for**
  - 배열이나 객체 데이터를 기반으로 동일한 Template 구조를 반복 렌더링할 때 사용하는 디렉티브
  - 반복 렌더링 시 각 항목을 식별할 수 있도록 고유한 `:key`를 함께 지정하는 것이 중요함

- **v-if / v-else**
  - 조건의 참·거짓에 따라 서로 다른 요소를 렌더링할 때 사용하는 조건부 렌더링 디렉티브
  - 이번 실습에서는 기온 25도를 기준으로 날씨 상태 배지를 구분함

- **ref()**
  - Vue Composition API에서 반응형 데이터를 생성할 때 사용하는 함수
  - 값이 변경되면 해당 값을 사용하는 화면도 자동으로 갱신됨

- **@input**
  - 입력 요소의 값이 변경될 때 실행되는 이벤트
  - 검색어 입력값을 반응형 상태에 저장하고 화면에 즉시 출력하는 데 활용함

- **@click**
  - 사용자의 클릭 동작을 처리하는 이벤트
  - 카드 선택과 상세보기 기능에 활용함

- **.stop**
  - 이벤트 버블링을 중단하는 Vue 이벤트 수식어
  - 상세보기 버튼 클릭 시 부모 카드의 클릭 이벤트가 함께 실행되지 않도록 사용함

- **Mock Data**
  - 실제 서버나 외부 API를 연결하기 전에 화면 및 기능 구현을 위해 임시로 사용하는 데이터
  - 이후 Axios 및 OpenWeatherMap API 실습에서 실제 날씨 데이터로 대체할 수 있음

#### 직접 구현 및 수정한 파일

`src/App.vue`  
`src/views/WeatherHomeView.vue`  
`src/assets/main.css`

### 03. Weather Component

#### 학습 내용

- Vue 컴포넌트를 역할별로 분리하는 방법 이해
- 부모 컴포넌트와 자식 컴포넌트 간 데이터 전달 방식 학습
- `props`를 활용한 부모 → 자식 데이터 전달
- `emits`를 활용한 자식 → 부모 이벤트 전달
- `<slot>`을 활용한 공통 레이아웃 컴포넌트 구성
- `<style scoped>`를 활용한 컴포넌트별 스타일 분리
- 기존 기능을 유지하면서 컴포넌트 구조로 리팩터링하는 방법 이해

#### 실습 내용

- 기존 `WeatherCompositionView.vue`에 구현되어 있던 날씨 대시보드 기능을 컴포넌트 단위로 분리
- `WeatherParent.vue`에서 전체 반응형 상태와 비즈니스 로직 관리
  - `weatherList`
  - `searchQuery`
  - `selectedCityInfo`
  - `computed`
  - `watch`
  - `watchEffect`
- `BaseDashboardCard.vue`를 생성하여 검색 영역과 날씨 목록 영역에서 사용하는 공통 카드 디자인 구성
- `<slot>`을 사용하여 부모 컴포넌트에서 전달한 내용을 공통 카드 내부에 렌더링
- `SearchBar.vue`를 생성하여 검색 입력 UI 분리
  - `currentQuery`를 `props`로 전달받아 현재 검색어 표시
  - 검색어 변경 시 `update-query` 이벤트를 발생시켜 부모 컴포넌트에 변경된 값 전달
- `WeatherCard.vue`를 생성하여 도시별 날씨 카드 UI 분리
  - 도시 객체를 `props`로 전달받아 도시명, 날씨 상태, 기온 출력
  - 카드 클릭 시 `select-card` 이벤트 발생
  - 상세보기 버튼 클릭 시 `click-detail` 이벤트 발생
  - `.stop` 이벤트 수식어를 적용하여 상세보기 클릭 시 카드 선택 이벤트가 함께 실행되지 않도록 처리
- `WeatherComponentView.vue`를 별도로 생성하여 `WeatherParent` 컴포넌트를 페이지 단위로 렌더링
- 각 컴포넌트의 스타일을 `<style scoped>`로 분리하여 스타일 적용 범위를 해당 컴포넌트로 제한
- 기존 검색, 조건부 렌더링, 카드 선택, 상세보기 기능이 컴포넌트 분리 이후에도 동일하게 동작하는지 확인

#### 실습 결과

기존 하나의 파일에 집중되어 있던 날씨 대시보드 UI와 로직을 역할에 따라 여러 컴포넌트로 분리했다. 상위 `WeatherParent.vue`에서 반응형 상태와 검색 로직을 관리하고, `SearchBar.vue`와 `WeatherCard.vue`는 필요한 데이터를 `props`로 전달받아 화면을 렌더링하도록 구성했다.

자식 컴포넌트에서 발생한 사용자 동작은 `emits`를 통해 부모에게 전달하도록 구현했으며, `BaseDashboardCard.vue`에서는 `<slot>`을 사용해 서로 다른 콘텐츠에 동일한 카드 스타일을 재사용했다. 이를 통해 기능은 유지하면서 코드의 역할과 책임을 명확하게 분리할 수 있었다.

#### 핵심 정리

- **Component**
  - 화면과 기능을 역할 단위로 분리하여 재사용하고 관리하기 위한 Vue의 기본 구성 단위
  - 기능이 커질수록 하나의 파일에 모든 내용을 작성하는 것보다 역할별 컴포넌트 분리가 유지보수에 유리함

- **Props**
  - 부모 컴포넌트가 자식 컴포넌트로 데이터를 전달할 때 사용하는 방식
  - 자식 컴포넌트는 전달받은 값을 직접 변경하기보다 필요한 이벤트를 부모에게 전달하는 방식으로 구성하는 것이 좋음

- **Emits**
  - 자식 컴포넌트에서 발생한 이벤트나 값을 부모 컴포넌트에 전달할 때 사용
  - 이번 실습에서는 검색어 변경, 카드 선택, 상세보기 이벤트 전달에 활용함

- **Slot**
  - 부모 컴포넌트에서 전달한 Template 내용을 자식 컴포넌트의 지정된 위치에 삽입할 수 있는 기능
  - 공통 레이아웃은 유지하면서 내부 콘텐츠만 다르게 구성할 때 유용함

- **style scoped**
  - 작성한 CSS가 현재 컴포넌트에만 적용되도록 범위를 제한함
  - 컴포넌트 간 스타일 충돌을 줄이고 각 컴포넌트의 UI를 독립적으로 관리할 수 있음

- **컴포넌트 분리**
  - 단순히 파일 수를 늘리는 것이 아니라 상태 관리, UI 표현, 이벤트 처리 등 각 역할과 책임을 구분하는 것이 중요함

#### 컴포넌트 구조

```text
WeatherComponentView.vue
└─ WeatherParent.vue
   ├─ BaseDashboardCard.vue
   │  └─ SearchBar.vue
   │
   └─ BaseDashboardCard.vue
      └─ WeatherCard.vue
```

#### 직접 구현 및 수정한 파일

`src/components/exercise/WeatherParent.vue`  
`src/components/exercise/BaseDashboardCard.vue`  
`src/components/exercise/SearchBar.vue`  
`src/components/exercise/WeatherCard.vue`  
`src/views/WeatherComponentView.vue`  
`src/App.vue`

### 04. Weather Router

#### 학습 내용

- Vue Router를 활용한 SPA 페이지 이동 방식 이해
- `createRouter()`와 `createWebHistory()`를 활용한 Router 설정
- `RouterLink`를 활용한 선언적 페이지 이동
- `RouterView`를 활용한 현재 URL에 대응하는 View 렌더링
- `useRouter()`를 활용한 프로그래밍 방식의 페이지 이동
- `useRoute()`와 Route Parameter를 활용한 동적 라우팅
- `/:pathMatch(.*)*`를 활용한 404 Not Found 페이지 처리
- 여러 View를 역할별로 분리하여 페이지 구조를 구성하는 방법 이해

#### 실습 내용

- 기존 날씨 대시보드 기능을 `WeatherHomeView.vue`에 구성하고 메인 경로 `/`와 연결
- `src/router/index.js`에서 날씨 서비스에 필요한 Route 구성
  - `/` → 날씨 메인 페이지
  - `/about` → 서비스 소개 페이지
  - `/guide` → 이용 가이드 페이지
  - `/weather/:cityId` → 도시별 날씨 상세 페이지
  - 존재하지 않는 경로 → 404 페이지
- `App.vue`에 공통 Header와 Navigation 구성
- `RouterLink`를 사용하여 날씨, 서비스 소개, 이용 가이드 페이지 간 이동 구현
- `RouterView`를 사용하여 현재 URL에 해당하는 View가 공통 레이아웃 내부에 렌더링되도록 구성
- `WeatherHomeView.vue`에서 날씨 카드의 상세보기 버튼 클릭 시 `useRouter()`와 `router.push()`를 사용하여 해당 도시의 상세 페이지로 이동
- 도시별 고유 ID를 URL의 `cityId` Route Parameter로 전달
- `WeatherDetailView.vue`에서 `useRoute()`를 사용하여 URL의 `cityId` 값 확인
- 전달받은 `cityId`와 일치하는 Mock Data를 찾아 도시명, 현재 기온, 날씨 상태 등의 상세 정보 출력
- 잘못된 도시 ID가 전달된 경우 도시 정보를 찾을 수 없다는 안내 화면 표시
- `WeatherAboutView.vue`를 생성하여 Weather Dashboard 서비스 소개 페이지 구성
- `WeatherGuideView.vue`를 생성하여 검색, 카드 선택, 상세 페이지 이동 방법 안내
- `NotFoundView.vue`를 생성하여 등록되지 않은 URL 접근 시 404 안내 화면 표시
- 각 페이지에서 메인 대시보드로 다시 이동할 수 있도록 `RouterLink` 또는 `router.push()` 활용

#### 실습 결과

Vue Router를 적용하여 하나의 날씨 대시보드 화면에서 여러 페이지로 확장되는 SPA 구조를 구현했다. `App.vue`에는 모든 페이지에서 공통으로 사용하는 Header와 Navigation을 배치하고, `RouterView`를 통해 현재 URL에 맞는 View가 표시되도록 구성했다.

날씨 메인 화면에서는 기존에 구현한 검색, 카드 선택, 컴포넌트 구조를 유지하면서 상세보기 버튼을 클릭하면 `/weather/:cityId` 형태의 URL로 이동하도록 변경했다. 상세 페이지에서는 URL을 통해 전달된 `cityId`를 읽어 해당 도시의 Mock Data를 찾아 출력하는 동적 라우팅을 구현했다.

또한 서비스 소개와 이용 가이드 페이지를 별도의 View로 분리했으며, 등록되지 않은 주소에 접근했을 때는 404 Not Found 페이지가 표시되도록 구성했다. 이를 통해 Vue Router를 활용한 페이지 이동, 동적 Route Parameter 전달, 공통 레이아웃 구성 및 예외 경로 처리 방법을 확인했다.

#### 핵심 정리

- **Vue Router**
  - Vue 기반 SPA에서 URL에 따라 서로 다른 화면을 표시할 수 있도록 페이지 이동을 관리하는 공식 Router
  - 페이지 전체를 새로 불러오지 않고 필요한 View만 변경할 수 있음

- **createRouter()**
  - 애플리케이션에서 사용할 Router 객체를 생성하는 함수
  - `routes` 배열을 통해 URL과 해당 URL에서 표시할 컴포넌트를 연결함

- **createWebHistory()**
  - 브라우저의 History API를 활용하여 일반적인 URL 형태로 페이지 이동을 관리함
  - 이번 실습에서는 `createWebHistory(import.meta.env.BASE_URL)` 형태로 사용함

- **RouterLink**
  - Vue Router에서 페이지 이동 링크를 만들 때 사용하는 컴포넌트
  - 일반 `<a>` 태그와 달리 SPA의 페이지 이동 방식을 유지하면서 URL을 변경함
  - 이번 실습에서는 날씨, 서비스 소개, 이용 가이드 페이지 이동에 활용함

- **RouterView**
  - 현재 URL과 일치하는 Route의 View 컴포넌트가 렌더링되는 위치
  - 공통 Header는 유지하면서 본문 영역만 URL에 따라 변경할 수 있음

- **useRouter()**
  - `<script setup>` 내부에서 Router 객체를 사용하기 위한 함수
  - `router.push()`를 이용하면 사용자 이벤트나 로직에 따라 원하는 URL로 이동할 수 있음
  - 이번 실습에서는 날씨 카드의 상세보기 버튼을 클릭했을 때 상세 페이지로 이동하는 데 활용함

- **useRoute()**
  - 현재 접근 중인 Route의 정보를 확인하기 위한 함수
  - URL Parameter, Query String 등의 값을 읽을 수 있음
  - 이번 실습에서는 `route.params.cityId`를 통해 선택한 도시의 ID를 확인함

- **Dynamic Route**
  - URL의 일부를 동적인 값으로 사용하는 Routing 방식
  - `/weather/:cityId`에서 `:cityId` 부분에 도시별 ID가 전달됨
  - 하나의 상세 View를 여러 도시에서 공통으로 사용할 수 있음

- **Route Parameter**
  - URL 경로에 포함하여 페이지에 값을 전달하는 방식
  - 예를 들어 `/weather/city_01`로 이동하면 `city_01`이 `cityId` 값으로 전달됨

- **404 Route**
  - 정의되지 않은 URL에 접근했을 때 보여줄 페이지를 처리하는 Route
  - `/:pathMatch(.*)*` 패턴을 사용하여 기존 Route와 일치하지 않는 모든 경로를 처리함

#### 라우팅 구조

```text
App.vue
├─ /                    → WeatherHomeView.vue
├─ /about               → WeatherAboutView.vue
├─ /guide               → WeatherGuideView.vue
├─ /weather/:cityId     → WeatherDetailView.vue
└─ 그 외 경로            → NotFoundView.vue
```

#### 페이지 이동 흐름

```text
WeatherHomeView.vue
      │
      │ 상세보기
      ▼
/weather/:cityId
      │
      ▼
WeatherDetailView.vue
      │
      │ route.params.cityId
      ▼
해당 도시 Mock Data 조회
```

#### 직접 구현 및 수정한 파일

`package.json`  
`package-lock.json`  
`src/App.vue`  
`src/router/index.js`  
`src/views/WeatherHomeView.vue`  
`src/views/WeatherDetailView.vue`  
`src/views/WeatherAboutView.vue`  
`src/views/WeatherGuideView.vue`  
`src/views/NotFoundView.vue`

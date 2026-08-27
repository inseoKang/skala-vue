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

### 05. Pinia Store

#### 학습 내용

- Pinia를 활용한 Vue 전역 상태 관리 방식 이해
- `defineStore()`를 활용한 Store 생성 방법 학습
- `state`를 활용한 전역 상태 저장
- `getters`를 활용한 상태 기반 값 계산 및 반환
- `actions`를 활용한 Store 상태 변경
- 여러 컴포넌트에서 동일한 Store를 공유하는 방법 이해
- 전역 상태 변경 시 해당 상태를 사용하는 컴포넌트가 반응형으로 갱신되는 동작 확인
- 공통 로직을 Store에 분리하여 컴포넌트 간 중복 코드를 줄이는 방법 이해

#### 실습 내용

- 프로젝트에 Pinia 패키지 설치
- `main.js`에서 `createPinia()`를 생성하고 Vue 애플리케이션에 등록
- `src/stores/configStore.js`를 생성하여 날씨 단위 설정을 관리하는 Store 구성
- `unit` state를 생성하고 초기값을 `celsius`로 설정
- 현재 온도 단위에 따라 `°C` 또는 `°F`를 반환하는 `unitSymbol` getter 구현
- `celsius`와 `fahrenheit` 값을 서로 전환하는 `toggleUnit()` action 구현
- 추가 getter인 `formatTemperature`를 구현하여 섭씨 원본 데이터를 현재 설정된 단위에 맞게 변환
  - Celsius 선택 시 기존 섭씨 값 출력
  - Fahrenheit 선택 시 `(섭씨 × 9 / 5) + 32` 공식을 적용하여 화씨로 변환
  - 변환된 온도는 반올림하여 출력
- `UnitToggler.vue` 컴포넌트를 생성하여 온도 단위 변경 버튼 구현
- Navigation 영역에 `UnitToggler.vue`를 배치하여 모든 페이지에서 단위 설정을 변경할 수 있도록 구성
- `WeatherCard.vue`에서 기존에 고정되어 있던 `°C` 표시를 Store의 `formatTemperature` getter를 사용하도록 변경
- `WeatherDetailView.vue`에서도 동일한 Store를 사용하여 상세 페이지의 온도 단위가 함께 변경되도록 구현
- 날씨 데이터 자체는 섭씨 원본 값으로 유지하고 화면에 출력할 때만 선택한 단위로 변환
- 메인 화면과 상세 화면에서 각각 온도 변환 코드를 작성하지 않고 Store의 공통 getter를 사용하도록 구성

#### 실습 결과

Pinia를 적용하여 날씨 대시보드의 온도 단위 설정을 전역 상태로 관리하도록 구현했다. `configStore.js`에서 현재 단위를 나타내는 `unit` 상태를 관리하고, `toggleUnit()` action을 통해 Celsius와 Fahrenheit 상태를 전환할 수 있도록 구성했다.

Navigation에 배치한 단위 변경 버튼을 클릭하면 Pinia Store의 상태가 변경되고, 동일한 Store를 사용하는 메인 날씨 카드와 도시 상세 페이지의 온도 표시가 별도의 데이터 전달 없이 동시에 변경되는 것을 확인했다.

또한 각 컴포넌트에서 직접 섭씨와 화씨 변환 공식을 작성하지 않고 `formatTemperature` getter를 Store에 추가하여 공통으로 사용했다. 이를 통해 전역 상태뿐만 아니라 여러 화면에서 반복되는 온도 변환 로직까지 Store에서 관리하여 코드 중복을 줄일 수 있었다.

#### 핵심 정리

- **Pinia**
  - Vue 애플리케이션에서 여러 컴포넌트가 공유하는 상태를 관리하기 위한 상태 관리 라이브러리
  - 서로 다른 컴포넌트나 View에서도 동일한 Store의 상태와 기능을 사용할 수 있음

- **defineStore()**
  - Pinia에서 Store를 정의할 때 사용하는 함수
  - Store의 이름과 `state`, `getters`, `actions` 등을 정의할 수 있음

- **State**
  - 애플리케이션에서 여러 컴포넌트가 공유할 상태를 저장하는 영역
  - 이번 실습에서는 현재 온도 단위를 나타내는 `unit` 값을 관리함
  - 초기값은 `celsius`로 설정함

- **Getters**
  - Store의 state를 기반으로 필요한 값을 계산하거나 가공하여 반환하는 기능
  - Vue의 `computed`와 유사한 역할을 함
  - `unitSymbol`을 통해 현재 단위에 따라 `°C` 또는 `°F`를 반환하도록 구성함

- **Actions**
  - Store의 state를 변경하거나 관련 로직을 처리할 때 사용하는 기능
  - 이번 실습에서는 `toggleUnit()`을 사용하여 `celsius`와 `fahrenheit` 상태를 전환함

- **formatTemperature**
  - 이번 실습에서 추가로 구현한 getter
  - 원본 섭씨 온도를 현재 Store의 단위 설정에 맞추어 출력함
  - 여러 컴포넌트에서 동일한 온도 변환 로직을 재사용하여 코드 중복을 줄임

- **전역 상태 관리**
  - 부모에서 자식으로 여러 단계의 `props`를 전달하지 않아도 필요한 컴포넌트가 Store에 직접 접근할 수 있음
  - `UnitToggler.vue`, `WeatherCard.vue`, `WeatherDetailView.vue`가 동일한 `configStore`를 공유하도록 구성함

- **반응형 상태 변경**
  - Store의 `unit` 값이 변경되면 해당 상태를 사용하는 화면도 자동으로 다시 렌더링됨
  - 따라서 단위 변경 버튼을 한 번 클릭하는 것만으로 메인 화면과 상세 페이지의 온도 표시를 동일하게 변경할 수 있음

- **원본 데이터와 표시 데이터 분리**
  - `cityItem.temp`와 같은 Mock Data는 기존 섭씨 값을 그대로 유지함
  - 화면에 값을 출력하는 시점에만 Store를 이용하여 화씨로 변환함
  - 원본 데이터를 직접 변경하지 않아 조건 판단이나 다른 로직에서 일관된 기준값을 사용할 수 있음

#### Store 구조

```text
configStore
├─ state
│  └─ unit
│     └─ 'celsius'
│
├─ getters
│  ├─ unitSymbol
│  └─ formatTemperature
│
└─ actions
   └─ toggleUnit()
```

#### Store 사용 구조

```text
                     configStore
                         │
                unit: 'celsius'
                         │
          ┌──────────────┼──────────────┐
          ▼              ▼              ▼
    UnitToggler      WeatherCard   WeatherDetailView
          │              │              │
          │              └──── 온도 표시 ┘
          │
          └─ toggleUnit()
                 │
                 ▼
       celsius ↔ fahrenheit
```

#### 온도 변환 흐름

```text
Mock Data
temp: 28
   │
   ▼
configStore.formatTemperature(28)
   │
   ├─ unit === 'celsius'
   │      └─ 28°C
   │
   └─ unit === 'fahrenheit'
          └─ 82°F
```

#### 직접 구현 및 수정한 파일

`package.json`  
`package-lock.json`  
`src/main.js`  
`src/App.vue`  
`src/stores/configStore.js`  
`src/components/exercise/UnitToggler.vue`  
`src/components/exercise/WeatherCard.vue`  
`src/views/WeatherDetailView.vue`

### 06. Weather Axios

#### 학습 내용

- Axios를 활용한 외부 API 비동기 통신 방법 이해
- `async / await`을 활용한 API 요청 및 응답 처리
- OpenWeatherMap API를 활용한 실제 날씨 데이터 조회
- 여러 API 요청을 `Promise.all()`로 동시에 처리하는 방법 학습
- API 요청 중 Loading 상태와 오류 발생 시 Error 상태를 관리하는 방법 이해
- 환경 변수를 활용하여 API Key를 코드와 분리하는 방법 학습
- 외부 API를 추가로 연동하여 기존 Application의 기능을 확장하는 방법 이해
- 기존 Mock Data를 실제 API 데이터로 대체하는 과정 이해

#### 실습 내용

- 프로젝트에 Axios 라이브러리 설치
- OpenWeatherMap API 가입 및 API Key 발급
- `.env` 파일에 `VITE_OPENWEATHER_API_KEY` 환경 변수 등록
- `src/data/cities.js`를 생성하여 도시별 ID, 이름, 위도, 경도 정보를 관리
- `src/services/weatherApi.js`를 생성하여 외부 API 요청 로직 분리
- Axios를 사용하여 OpenWeatherMap Current Weather API 호출
- 기존 Mock Data의 고정 기온과 날씨 상태를 제거하고 실제 API 응답 데이터로 대체
- API를 통해 현재 기온, 날씨 상태, 습도, 풍속 등의 실제 날씨 정보 조회
- `WeatherHomeView.vue`에서 여러 도시의 현재 날씨를 조회하여 기존 WeatherCard 컴포넌트에 전달
- 날씨 데이터를 불러오는 동안 Loading 메시지가 표시되도록 구현
- API 요청 실패 시 사용자에게 오류 메시지가 표시되도록 Error 처리
- 기존 검색 기능, 카드 선택 기능, Vue Router 상세 페이지 이동 기능 유지
- 기존 Pinia Store와 연동하여 API에서 받은 섭씨 온도를 `°C / °F`로 변환하여 표시
- OpenWeatherMap의 Forecast API를 추가로 활용하여 도시별 시간대별 날씨 예보 제공
- 상세 페이지에서 현재 기온, 체감 온도, 날씨 상태, 습도, 풍속 등의 상세 정보 제공
- `Promise.all()`을 사용하여 현재 날씨, 예보, 대기질 데이터를 동시에 요청
- OpenWeatherMap 외의 외부 API인 Open-Meteo Air Quality API 추가 연동
- Open-Meteo API를 통해 PM10, PM2.5, US AQI 정보를 조회하여 상세 페이지에 대기질 정보 제공

#### 실습 결과

기존에 직접 작성한 Mock Data 대신 Axios를 사용하여 OpenWeatherMap API에서 실제 날씨 데이터를 받아 화면에 표시하도록 변경했다. 도시별 위도와 경도를 기준으로 현재 날씨를 조회하고, API 응답에서 현재 기온, 날씨 상태, 습도, 풍속 등의 값을 추출하여 기존 WeatherCard 컴포넌트에 전달했다.

상세 페이지에서는 OpenWeatherMap의 Current Weather API와 Forecast API를 활용하여 현재 날씨뿐만 아니라 체감 온도와 시간대별 예보도 확인할 수 있도록 기능을 확장했다. 여러 API 요청은 `Promise.all()`을 사용하여 동시에 처리하도록 구성했다.

또한 OpenWeatherMap 이외의 외부 API인 Open-Meteo Air Quality API를 추가로 연동하여 PM10, PM2.5, US AQI 등의 대기질 정보를 제공하도록 Application 기능을 확장했다.

API 요청 중에는 Loading 상태를 표시하고 요청 실패 시 Error 메시지를 출력하도록 예외 처리했으며, 기존 Pinia Store와 연동하여 실제 API에서 받은 섭씨 데이터를 사용자가 선택한 온도 단위에 따라 Celsius 또는 Fahrenheit로 표시하도록 기존 기능도 유지했다.

#### 핵심 정리

- **Axios**
  - JavaScript에서 HTTP 요청을 처리하기 위해 사용하는 라이브러리
  - 외부 API 또는 서버와 데이터를 주고받을 때 활용할 수 있음
  - 이번 실습에서는 OpenWeatherMap과 Open-Meteo API 요청에 사용함

- **API**
  - 서로 다른 Application이 정해진 방식으로 데이터와 기능을 주고받을 수 있도록 제공되는 인터페이스
  - 이번 실습에서는 외부 날씨 및 대기질 서비스를 Vue Application과 연결함

- **async / await**
  - 비동기 작업의 결과를 기다린 후 다음 코드를 실행할 수 있도록 하는 JavaScript 문법
  - API 응답을 기다린 뒤 받은 데이터를 화면에 적용하는 데 활용함

- **Promise.all()**
  - 여러 비동기 작업을 동시에 실행하고 모든 작업이 완료될 때까지 기다리는 방법
  - 상세 페이지에서 현재 날씨, 날씨 예보, 대기질 API를 동시에 요청하는 데 활용함

- **OpenWeatherMap Current Weather API**
  - 위도와 경도를 기준으로 현재 날씨 정보를 조회하는 데 사용함
  - 현재 기온, 체감 온도, 습도, 풍속, 날씨 상태 등의 정보를 활용함

- **OpenWeatherMap Forecast API**
  - 현재 날씨 외에 미래의 날씨 예보 데이터를 제공하는 API
  - 이번 실습에서는 상세 페이지에 시간대별 날씨 예보를 추가하는 데 활용함

- **Open-Meteo Air Quality API**
  - OpenWeatherMap 이외에 추가로 연동한 외부 API
  - PM10, PM2.5, US AQI 등의 대기질 정보를 조회하여 날씨 Application의 기능을 확장함

- **환경 변수**
  - API Key처럼 코드에 직접 작성하지 않는 것이 좋은 설정값을 별도의 환경 파일로 관리하는 방법
  - 이번 실습에서는 `.env` 파일의 `VITE_OPENWEATHER_API_KEY`를 사용함

- **Loading / Error 상태**
  - API 요청은 응답까지 시간이 필요하거나 실패할 가능성이 있으므로 요청 상태를 별도로 관리하는 것이 중요함
  - 데이터를 불러오는 동안 Loading 메시지를 표시하고 요청 실패 시 Error 메시지를 제공하도록 구현함

- **Mock Data → API Data**
  - 이전 실습에서는 직접 작성한 기온과 날씨 데이터를 사용했지만 이번 실습에서는 실제 API 응답으로 대체함
  - 도시의 ID, 이름, 위치 정보는 별도로 관리하고 실제 날씨 정보는 API 요청 시점에 받아오도록 구성함

#### API 구성

```text
Weather Application
        │
        ├─ OpenWeatherMap Current Weather API
        │     ├─ 현재 기온
        │     ├─ 체감 온도
        │     ├─ 날씨 상태
        │     ├─ 습도
        │     └─ 풍속
        │
        ├─ OpenWeatherMap Forecast API
        │     └─ 시간대별 날씨 예보
        │
        └─ Open-Meteo Air Quality API
              ├─ PM10
              ├─ PM2.5
              └─ US AQI
```

#### 데이터 처리 흐름

```text
cities.js
   │
   │ 도시별 위도 / 경도
   ▼
weatherApi.js
   │
   │ Axios API 요청
   ▼
외부 API
   │
   ▼
WeatherHomeView / WeatherDetailView
   │
   ├─ 실제 날씨 데이터 표시
   ├─ Loading / Error 처리
   │
   └─ Pinia configStore
          │
          └─ °C ↔ °F 변환
```

#### 직접 구현 및 수정한 파일

`package.json`  
`package-lock.json`  
`.env`  
`.gitignore`  
`src/data/cities.js`  
`src/services/weatherApi.js`  
`src/views/WeatherHomeView.vue`  
`src/views/WeatherDetailView.vue`

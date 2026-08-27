# skala-vue

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.)
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox
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

### Lint with ESLint

```sh
npm run lint
```

---

# Hands on Log

## 01. Project Scaffolding & HMR

### 학습 내용

- Vue 프로젝트 생성 과정과 기본 디렉터리 구조 이해
- Vite 개발 서버 실행 방식 이해
- HMR(Hot Module Replacement)의 동작 확인
- Vue Router가 포함된 기본 Vue 프로젝트 구조 확인
- `RouterLink`, `RouterView`의 역할 이해

### 실습 내용

- `skala-vue` 프로젝트 생성 및 실행
- `npm run dev`를 통해 Vite 개발 서버 실행
- `src`, `components`, `views`, `router`, `assets` 등의 기본 구조 확인
- Home / About Route 간 이동 확인
- `AboutView.vue`를 수정한 뒤 브라우저 새로고침 없이 변경사항이 반영되는지 확인

### 실습 결과

Vue 프로젝트의 기본 구조와 Vite 개발 환경을 확인했으며, 소스 코드를 수정했을 때 전체 페이지를 다시 불러오지 않고 변경사항이 즉시 반영되는 HMR 동작을 확인했다.

### 핵심 정리

- **Project Scaffolding**: 개발에 필요한 기본 파일과 설정을 자동으로 구성하는 과정
- **Vite**: Vue 프로젝트의 개발 서버와 Build를 지원하는 개발 도구
- **HMR**: 전체 페이지를 새로고침하지 않고 변경된 모듈만 즉시 반영하는 기능
- **RouterLink / RouterView**: SPA에서 Route 이동과 View 렌더링을 담당

---

## 02. Weather Mockup

### 학습 내용

- `v-for`, `v-if`, `v-else`를 활용한 반복·조건부 렌더링
- `ref()`를 활용한 반응형 상태 관리
- `@input`, `@click`을 활용한 사용자 이벤트 처리
- 실제 API 연동 전 Mock Data를 활용한 UI 구현 방식 이해

### 실습 내용

- 서울, 수원, 부산 등 도시별 Mock 날씨 데이터 구성
- `v-for`와 `:key`를 사용하여 날씨 카드 반복 출력
- 기온 25도를 기준으로 `더움 / 선선함` 상태 표시
- 검색 입력값을 화면에 실시간 반영
- 카드 선택 시 선택된 도시 정보를 상태 영역에 출력
- 상세보기 버튼에 `.stop`을 적용하여 부모 클릭 이벤트 전파 방지
- 도시 데이터를 추가하고 날씨 대시보드 UI 개선

### 실습 결과

Mock Data를 기반으로 도시별 날씨 카드를 구현하고 검색, 카드 선택, 조건부 상태 표시 등의 기본적인 Vue 반응형 UI 동작을 확인했다.

### 핵심 정리

- **v-for**: 배열 데이터를 반복 렌더링
- **v-if / v-else**: 조건에 따른 UI 분기
- **ref()**: 반응형 상태 생성
- **.stop**: 이벤트 버블링 방지
- **Mock Data**: 실제 서버 연동 전 화면과 기능 구현에 사용하는 임시 데이터

### 주요 파일

`src/views/WeatherHomeView.vue`  
`src/App.vue`  
`src/assets/main.css`

---

## 03. Weather Component

### 학습 내용

- Vue 컴포넌트를 역할별로 분리하는 방법 이해
- `props`를 활용한 부모 → 자식 데이터 전달
- `emits`를 활용한 자식 → 부모 이벤트 전달
- `<slot>`을 활용한 공통 레이아웃 구성
- `<style scoped>`를 활용한 컴포넌트별 스타일 관리

### 실습 내용

기존 하나의 View에 집중되어 있던 날씨 대시보드를 역할에 따라 분리했다.

- `WeatherParent.vue`: 반응형 상태 및 비즈니스 로직 관리
- `SearchBar.vue`: 검색 입력 UI
- `WeatherCard.vue`: 도시별 날씨 카드
- `BaseDashboardCard.vue`: 공통 카드 레이아웃
- `WeatherComponentView.vue`: 페이지 단위 컴포넌트 렌더링

자식 컴포넌트는 필요한 데이터를 `props`로 전달받고, 사용자 이벤트는 `emits`를 통해 부모에게 전달하도록 구성했다.

### 실습 결과

기존 기능을 유지하면서 UI, 상태 관리, 이벤트 처리의 역할을 분리하여 컴포넌트 구조를 개선했다.

### 핵심 정리

- **Props**: 부모가 자식에게 데이터 전달
- **Emits**: 자식이 부모에게 이벤트 전달
- **Slot**: 공통 레이아웃 내부에 서로 다른 콘텐츠 삽입
- **style scoped**: 컴포넌트별 CSS 적용 범위 제한

### 주요 파일

`WeatherParent.vue`  
`BaseDashboardCard.vue`  
`SearchBar.vue`  
`WeatherCard.vue`  
`WeatherComponentView.vue`

---

## 04. Weather Router

### 학습 내용

- Vue Router를 활용한 SPA 페이지 이동 방식 이해
- `RouterLink`, `RouterView` 활용
- `useRouter()`, `useRoute()` 활용
- Route Parameter를 활용한 동적 라우팅
- 404 Route 처리

### 실습 내용

다음 Route를 구성했다.

```text
/                    → WeatherHomeView.vue
/about               → WeatherAboutView.vue
/guide               → WeatherGuideView.vue
/weather/:cityId     → WeatherDetailView.vue
그 외 경로            → NotFoundView.vue
```

날씨 카드의 상세보기 버튼을 클릭하면 `router.push()`를 사용해 `/weather/:cityId`로 이동하도록 구현했다.

상세 페이지에서는 `route.params.cityId`를 읽어 선택한 도시의 정보를 출력하고, 등록되지 않은 URL은 `NotFoundView.vue`에서 처리하도록 구성했다.

### 실습 결과

기존 단일 화면 형태의 날씨 대시보드를 여러 View를 갖는 SPA 구조로 확장했으며, 동적 Route를 통해 도시별 상세 페이지를 공통 View로 처리했다.

### 핵심 정리

- **RouterLink**: 선언적인 Route 이동
- **RouterView**: 현재 Route의 View 렌더링
- **useRouter()**: 코드에서 페이지 이동
- **useRoute()**: 현재 Route 정보 확인
- **Dynamic Route**: 하나의 View에서 URL Parameter에 따라 서로 다른 데이터 표시
- **404 Route**: 정의되지 않은 URL 처리

### 주요 파일

`src/router/index.js`  
`WeatherHomeView.vue`  
`WeatherDetailView.vue`  
`WeatherAboutView.vue`  
`WeatherGuideView.vue`  
`NotFoundView.vue`

---

## 05. Pinia Store

### 학습 내용

- Pinia를 활용한 Vue 전역 상태 관리
- `state`, `getters`, `actions`의 역할 이해
- 여러 컴포넌트에서 동일한 Store를 공유하는 방법 이해

### 실습 내용

`configStore.js`를 생성하여 온도 단위를 전역 상태로 관리했다.

- `unit`: 현재 온도 단위 저장
- `unitSymbol`: 현재 단위에 따른 `°C / °F` 반환
- `toggleUnit()`: Celsius와 Fahrenheit 전환
- `formatTemperature`: 현재 설정에 맞게 온도 값을 변환하여 출력

`UnitToggler.vue`, `WeatherCard.vue`, `WeatherDetailView.vue`에서 동일한 Store를 사용하도록 구성했다.

Mock/API 데이터의 원본 온도는 섭씨로 유지하고 화면에 출력할 때만 변환하도록 구현했다.

### 실습 결과

한 곳에서 온도 단위를 변경하면 Store를 사용하는 여러 화면의 온도 표시가 동시에 변경되는 것을 확인했다. 온도 변환 로직도 Store에 공통으로 구성하여 중복을 줄였다.

### 핵심 정리

- **State**: 여러 컴포넌트에서 공유하는 상태
- **Getters**: State 기반 값 계산
- **Actions**: State 변경 로직
- **Pinia**: 서로 다른 View와 컴포넌트에서 공통 상태를 쉽게 공유할 수 있도록 지원

### 주요 파일

`src/stores/configStore.js`  
`UnitToggler.vue`  
`WeatherCard.vue`  
`WeatherDetailView.vue`

---

## 06. Weather Axios

### 학습 내용

- Axios를 활용한 HTTP 비동기 통신
- `async / await`을 활용한 API 응답 처리
- `Promise.all()`을 활용한 병렬 요청
- Loading / Error 상태 관리
- 환경 변수를 활용한 API Key 관리

### 실습 내용

기존 Mock 날씨 데이터를 실제 외부 API 데이터로 변경했다.

#### OpenWeatherMap

- Current Weather API
  - 현재 기온
  - 체감 온도
  - 습도
  - 풍속
  - 날씨 상태
- Forecast API
  - 시간대별 날씨 예보

#### Open-Meteo Air Quality API

- PM10
- PM2.5
- US AQI

`cities.js`에는 도시의 ID, 이름, 위도와 경도만 관리하고 실제 날씨 정보는 API 요청을 통해 가져오도록 구조를 변경했다.

상세 페이지에서는 `Promise.all()`을 활용하여 현재 날씨, 예보, 대기질 데이터를 동시에 요청하도록 구현했다.

### 실습 결과

Mock Data 대신 실제 날씨 데이터를 대시보드에 적용했으며, 상세 페이지에서는 현재 날씨뿐 아니라 시간대별 예보와 대기질 정보까지 확인할 수 있도록 기능을 확장했다.

API 요청 중에는 Loading UI를 표시하고 요청 실패 시 Error 메시지를 제공하도록 구성했다.

### 핵심 정리

- **Axios**: HTTP 요청을 처리하는 라이브러리
- **async / await**: 비동기 응답을 순차적인 코드 형태로 처리
- **Promise.all()**: 여러 비동기 요청을 병렬로 실행
- **Environment Variable**: API Key와 같은 설정값을 코드와 분리하여 관리
- **Loading / Error State**: 비동기 통신 상태에 따른 UI 처리

### 주요 파일

`src/data/cities.js`  
`src/services/weatherApi.js`  
`WeatherHomeView.vue`  
`WeatherDetailView.vue`

---

## 07. Weather UI Library

### 학습 내용

- 외부 UI Library를 Vue 프로젝트에 적용하는 방법 이해
- PrimeVue 컴포넌트와 Theme 활용
- 기존 기능을 유지하면서 사용자 인터페이스를 확장하는 방법 이해

### 실습 내용

PrimeVue와 Aura Theme를 적용하여 날씨 대시보드 UI를 개선했다.

사용한 주요 컴포넌트:

- `InputText`: 도시 검색
- `Select`: 정렬 기준 및 표시 개수 선택
- `SelectButton`: 카드 / 목록 보기 전환
- `DataView`: 데이터 목록 및 Pagination
- `Card`: 날씨 카드
- `Tag`: 기온 상태 표시
- `Button`: 상세보기 및 기능 버튼
- `ProgressSpinner`: API Loading 상태

추가한 사용자 기능:

- 기온 높은 순 / 낮은 순 / 도시 이름순 정렬
- 5개 / 10개 단위 표시
- Pagination
- Card / List 레이아웃 전환
- 도시 데이터를 10개 지역으로 확장

이후 메인, 상세, 서비스 소개, 이용 가이드 화면의 디자인을 동일한 색상과 레이아웃 컨셉으로 정리하고 사용자 중심의 문구와 이동 버튼을 추가했다.

### 실습 결과

단순한 날씨 카드 목록을 검색, 정렬, 페이지네이션 및 레이아웃 전환이 가능한 데이터 대시보드 형태로 확장했다.

기존 Axios, Pinia, Vue Router 기능은 유지하면서 PrimeVue를 활용해 전체 UI의 일관성과 사용성을 개선했다.

### 핵심 정리

- **PrimeVue**: Vue용 UI Component Library
- **DataView**: 데이터 목록과 Pagination 구성
- **Select / SelectButton**: 정렬·표시 방식 선택
- **Card / Tag / Button**: 일관된 UI 컴포넌트 구성
- **ProgressSpinner**: 비동기 Loading 상태 시각화

### 주요 파일

`src/main.js`  
`WeatherToolbar.vue`  
`WeatherCard.vue`  
`UnitToggler.vue`  
`WeatherHomeView.vue`  
`WeatherDetailView.vue`  
`WeatherAboutView.vue`  
`WeatherGuideView.vue`

---

## 08. Weather Deployment

### 학습 내용

- Vue + Vite 프로젝트의 Production Build 과정 이해
- ESLint를 활용한 배포 전 코드 점검
- 환경 변수와 API Key 관리
- Vercel을 활용한 Vue SPA 배포
- Vue Router History Mode의 배포 환경 설정

### 실습 내용

배포 전 다음 명령으로 코드와 Build 상태를 확인했다.

```sh
npm run lint
npm run build
```

ESLint에서 발견된 미사용 `ref` import를 제거하여 Error를 해결하고 Production Build가 정상적으로 완료되는 것을 확인했다.

OpenWeatherMap API Key가 포함된 `.env` 파일은 `.gitignore`에 등록하여 GitHub에 업로드되지 않도록 설정했다.

Vercel에서는 별도의 Environment Variable로 다음 값을 등록했다.

```text
VITE_OPENWEATHER_API_KEY
```

Vue Router History Mode 사용 시 직접 URL 접근 또는 새로고침에서 발생할 수 있는 404 문제를 방지하기 위해 `vercel.json`에 SPA Rewrite 설정을 추가했다.

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### 실습 결과

Vercel에 Vue 날씨 Application을 배포하고 실제 배포 URL에서 다음 기능이 정상적으로 동작하는 것을 확인했다.

- 메인 날씨 조회
- 도시 검색 및 정렬
- 5개 / 10개 단위 표시
- Card / List 보기
- Celsius / Fahrenheit 단위 변경
- 도시별 상세 페이지
- 시간대별 날씨 예보
- 대기질 조회
- 서비스 소개 / 이용 가이드
- Route 직접 접근 및 새로고침

### 핵심 정리

- **ESLint**: 배포 전 코드 오류 및 품질 점검
- **Production Build**: `npm run build`를 통해 배포용 결과물 생성
- **.gitignore**: API Key가 포함된 환경 파일을 Git에서 제외
- **Vercel**: GitHub Repository를 기반으로 Frontend Application Build 및 Hosting
- **SPA Rewrite**: Vue Router 경로를 직접 접근해도 `index.html`을 기준으로 정상 처리

### 주요 파일

`.gitignore`  
`vercel.json`  
`src/components/practices/basic/SampleTwo.vue`

---

## 실습 진행 흐름

```text
Project Scaffolding
        ↓
Weather Mockup
        ↓
Component 분리
        ↓
Vue Router
        ↓
Pinia Store
        ↓
Axios / External API
        ↓
PrimeVue UI Library
        ↓
Production Build & Vercel Deployment
```

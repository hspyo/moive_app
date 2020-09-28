# Movie Town
### 리액트를 사용하여 반응형으로 구현하였고, 실시간 영화 차트를 보여주는 웹 어플리케이션입니다. <br /> ✅ www.movietown.ml

### 스크린샷
<p width="100%">
   <img width="69%" height="500"  alt="스크린샷 2020-09-14 오후 4 06 13" src="https://user-images.githubusercontent.com/53952734/93054416-3f94b080-f6a4-11ea-9669-8bc81de2ad61.png">

<img width="30%" height="500" alt="스크린샷2" src="https://user-images.githubusercontent.com/53952734/93053008-212db580-f6a2-11ea-925c-6ebaaa5893a4.png">
</p>


### 화면 구성
<p> 총 6개의 화면으로 구성되어있습니다.

 ✔️ 메인페이지 (Home)
<br/> ✔️ 현재상영중 (NowPlaying)
<br/> ✔️ 인기영화 (Popular)
<br/> ✔️ 높은평점 (TopRated)
<br/> ✔️ 개봉예정 (Upcoming)
<br/> ✔️ 영화상세페이지 (MovieDetail)

### 컴포넌트 폴더 구조 간단 설명
#### 들어가기전
common, components, routers 3개의 폴더로 나누었고, 
<br/>CSS는 각 컴포넌트별로 외부 파일방식으로 작성하였습니다.

#### src
* common
   * MainImage (영화 메인이미지 -> Home과 MovieDetail 사용됨)
   * MovieList (영화 리스트 -> routers 컴포넌트들에서 사용됨)
* components
   * Home (메인 페이지)
   * Navbar (네비게이션 바)
   * MovieDetail (영화 상세 페이지 -> 메인이미지, 출연배우, 영화 정보)
      * MovieCasts 
      * MovieInfo
* routers
   * NowPlaying (현재상영작)
   * Popular (인기영화)
   * TopRated (높은평점)
   * Upcoming (개봉예정)
 
 App.js
 <br/>config.js (중복되는 API 주소를 상수값으로 관리한다.) 
 <br/>index.js

### 컴포넌트 구조 및 플로우

1. 사용자가 처음 보게되는 Home 화면에는 실시간 1위 영화가 보여집니다.
2. 사용자는 네비게이션을 통해 원하는 페이지로 이동합니다.
3. 원하는 페이지를 클릭하면 해당 페이지에 맞는 영화리스트가 보여집니다.
4. 영화리스트에서 원하는 영화를 클릭하면 상세페이지로 이동합니다.
5. 상세페이지에는 메인포스터, 배우들, 영화 정보가 담겨져있습니다.

<img width="873" alt="스크린샷 2020-09-27 오후 2 25 38" src="https://user-images.githubusercontent.com/53952734/94356793-589e5800-00cd-11eb-8e75-bd138e12648b.png">

### 사용된 기술
* HTML
* CSS
* ReactJS (React Hooks)
* React Router

### API
* TMDB API

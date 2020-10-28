# Movie Town
### 리액트 반응형 SPA입니다. 영화를 검색하고 실시간 영화 차트를 확인할 수 있습니다. <br /> ✅ www.movietown.ml

# 스크린샷
<p width="100%">
<img width="69%" height="500" alt="스크린샷 2020-10-29 오전 1 14 27" src="https://user-images.githubusercontent.com/53952734/97464323-1f832d00-1984-11eb-9a23-e2ceb56c692a.png">
<img width="30%" height="500" alt="스크린샷2" src="https://user-images.githubusercontent.com/53952734/93053008-212db580-f6a2-11ea-925c-6ebaaa5893a4.png">
</p>

# 개발환경
### 사용된 기술
* HTML5
* PostCSS (모듈화)
* React (React Hooks, Custom hooks)
* React Router
* 영화 API (TMDB API)

### 주요 기능
* SPA
* 검색기능 (모든페이지에서 검색기능 사용가능)
* 실시간 영화 1위 (메인화면)
* 실시간 카테고리별 영화 순위 (현재상영중, 인기작, 높은평점, 개봉예정)
* 영화 상세페이지 (포스터, 영화정보, 출연배우)
* 반응형 웹


### Folder Structure
```
src
  |ㅡㅡ components           # 컴포넌트 폴더
  |    |ㅡㅡ MainImage         # 메인포스터
  |    |ㅡㅡ MovieHome         # 메인화면
  |    |ㅡㅡ MovieItem         # 영화상세페이지
  |    |    |ㅡㅡ imgs         
  |    |    |ㅡㅡ MovieCasts     # 영화출연배우
  |    |    |ㅡㅡ MovieInfo      # 영화정보
  |    |ㅡㅡ MovieList         # 영화리스트
  |    |ㅡㅡ MovieMoreBtn      # 영화더보기 버튼
  |    |ㅡㅡ Navbar            # 네이게이션
  |    |    |ㅡㅡ imgs
  |    |    |ㅡㅡ NavToggle      # 네비게이션 토글
  |    |ㅡㅡ Search            # 검색화면
  |ㅡㅡ hooks                 # 커스텀훅스 (영화 API)
  |ㅡㅡ router                # 라우터페이지 (현재상영, 인기, 높은평점, 개봉예정)
  |ㅡㅡ service               # 검색 API JS 클래스파일
 App.css
 App.js
 Config.js                 # API URL, API KEY 관련 Config 파일
 index.js
```

# 화면 구성
총 7개의 화면으로 구성되어있습니다.
<br /> ✔️ 메인페이지 (Home)
<br /> ✔️ 검색페이지 (Search)
<br /> ✔️ 현재상영중 (NowPlaying)
<br /> ✔️ 인기영화 (Popular)
<br /> ✔️ 높은평점 (TopRated)
<br /> ✔️ 개봉예정 (Upcoming)
<br /> ✔️ 영화상세페이지 (MovieDetail)

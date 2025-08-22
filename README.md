<!-- BANNER -->
<p align="center">
  <img src="./public/next-movie.jpg" alt="next-movie Banner" width="200px" />
</p> 



<h1 align="center">⚡Next-Movie TMDB 박스오피스 순위</h1>
<p align="center">
  <b>Next.js + TypeScript 기반의 인터렉티브 TMDB 박스오피스 순위 페이지</b>
</p>

<p align="center">
  <a href="https://poke-next-amber.vercel.app">
    <img src="https://img.shields.io/badge/Live-Demo-blue?logo=vercel&logoColor=white" />
  </a>
  <a href="https://github.com/choidy180/poke-next">
    <img src="https://img.shields.io/github/stars/choidy180/poke-next?style=social" />
  </a>
  <img src="https://img.shields.io/github/license/choidy180/poke-next?color=brightgreen" />
  <img src="https://img.shields.io/badge/PRs-welcome-yellow?logo=github" />
  <img src="https://img.shields.io/badge/Made%20with-❤️-ff69b4" />
</p>

---

##  기능
- 📢 **상세 정보 제공**: 영화 포스터, 기본 줄거리, 등장인물 등
- 🎨 **반응형 디자인**
- ⚓ **빠른 로딩 및 화면 전환** (Next.js의 ISR/SSG 활용)
- 😄 **직관적인 UI 구성** (카드형 리스트, 모달, 탭 등)

---

##  기술 스택
<p align="center">
  <img src="https://img.shields.io/badge/Next.js-000?logo=next.js" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff" />
  <img src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=000" />
  <img src="https://img.shields.io/badge/API-PokeAPI-059CFA?logo=api" />
  <img src="https://img.shields.io/badge/CSS Modules-000?logo=css3&logoColor=fff" />
  <img src="https://img.shields.io/badge/Vercel-000?logo=vercel&logoColor=fff" />
</p>

---

##  라이브 데모
-  URL: 현재 미배포
-  Next.js + Vercel 환경에서 배포 중

---

##  프로젝트 요약
#### 1. NextJS + 스타일컴포넌트 사용
#### 2. TMDB API 사용하여, 박스오피스 순위 가져오기
#### 3. 영화박스 클릭하여, 포스터 및 추가 영화정보(등장인물, 평점 등) 표시


##  Install
```bash
# 1) 레포지토리 복제
git clone https://github.com/choidy180/next-molvie-v15
cd poke-next

# 2) 의존성 설치
npm install

# 3) 개발 서버 실행
npm run dev
# 브라우저에서 http://localhost:3000, http://127.0.0.1:3000 열기
```

## 📡 Example Fetch (Import Spotify Playlist)
```bash
export async function GET() {
    const res = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}&language=ko-KR`
    );
    const data = await res.json();
    return Response.json(data);
}
```

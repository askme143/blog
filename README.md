# Blog

Astro로 만든 개인 블로그입니다.

## Commands

```sh
npm install
npm run dev
npm run build
```

## Writing

글은 `src/content/blog`에 Markdown 파일로 추가합니다.

## GitHub Pages

`main` 브랜치에 push하면 GitHub Actions가 `dist`를 빌드해서 Pages에 배포합니다.

프로젝트 저장소는 배포 경로가 `/repo-name/`가 되도록 자동 설정됩니다. 커스텀 도메인이나 `username.github.io` 저장소를 쓰면 루트 경로(`/`)로 빌드됩니다.

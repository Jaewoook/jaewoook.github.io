---
layout: post
title: "내가 쉬면서 한 것들 #1 - 크롬 확장 프로그램 stay FOCUS 개발기"
date: 2020-04-11
categories: blog develop chrome-extension
tags: blog develop guide chrome-extension stay-focus
---

마지막으로 블로그에 글을 쓴 지 2년이 넘었다. 그동안 열심히 공부도 하고 일도 하고 놀기도 참 많이 놀았다. 그러다가 지난 1월, 퇴사를 하고 다시 학교로 복학 할 준비를 하다가 뜻하지 않게 한 학기정도 쉬는 ㅣ깐을 갖게 되었다. 쉬는 동안 아무것도 안하고 맨날 놀기도 좀 그래서 그동안 만들어 보고 싶었던 것들을 하나씩 만들어 보기로 했다.

<br>

## 그래서 처음으로 만들어 보기로 한 것은,

예전부터 크롬 확장프로그램을 만들어보고 싶었는데 마땅히 떠오르는 아이디어가 없었다. 그러다가 친구와 통제된 작업 환경이 작업에 도움이 된다는 주제로 이야기를 하다가, 작업하다가 무의식적으로 유튜브나 트위치 같은 사이트에 접속하지 못하게 하는 크롬 확장 프로그램을 만들어보면 재밌을 것 같아서 바로 프로젝트를 시작하게 되었다.

글을 쓰다 보니 어떤 내용의 글을 써내려가려고 하는지 아직 설명이 없었는데, 이 글은 크롬 확장프로그램을 만들면서 고민한 것들, 막혔던 부분 등에 대한 내용을 정리한 글이다. 멍청한 미래의 나 혹은 고통받는 다른 누군가가 이 글을 보고 도움이 될 수 있으면 좋겠다.

## 어떤 기능을 만들어야 할까?

제일 먼저 한 일은 만드려는 프로그램의 요구사항을 정리했다. 요구사항은 생각보다 명확했는데, 다음과 같다.

**[요구사항]**  
<br>
1. 공부/작업 등에 방해되는 사이트 추가/삭제
2. 방해되는 사이트에 접속했을 경우 해당 사이트 차단 & 작업에 집중할 수 있게 집중하라는 메시지 표시
3. 특정 페이지는 허용하는 기능 (예를 들어, 유튜브를 차단했는데, 유튜브에서 음악을 듣는 경우 음악은 들을 수 있게끔)

## 프로젝트 구조에 대한 고민

기본적으로 [Chrome Extension Documentation](https://developer.chrome.com/extensions) 에 들어가서 간단한 내용을 훑어봤는데, 크게 세 가지 정도로 크롬 확장프로그램이 구성되어 있다는 것을 알 수 있었다. 그냥 내 주관적인

### 1. extension

확장 프로그램 영역 안에서 실행되는 것들, (예를 들어 팝업 같은 프론트엔드 영역을) extension 이라고 생각했다.

### 2. backgrond

백그라운드에서 실행되어야 하는 작업, 비동기 작업, 유저 액션에 크게 관련 없는 동작들을 수행하는 것 등을 background 에서 실행되어야 해서 확장 프로그램의 백엔드라고 생각했다.

### 3. content-scripts

실질적으로 페이지에 삽입되어 페이지를 조작하거나 원하는 콘텐츠를 추가/수정 하는 등의 기능을 하는 부분이다.

간단하게 개발 문서를 훑어본 뒤, background script 는 딱히 필요 없을 것 같고, 설정을 위한 팝업, 페이지에 삽입되어 실행되는 content-scripts 정도 작성하면 될 것 같았다. 하지만 두 스크립트는 모두 브라우저 위에서 실행되긴 하지만 실행되는 영역이 chroe extension / page 로 나뉘기 때문에 하위에 각각 프로젝트를 세팅하고 개발해야겠다는 생각을 했다. 이렇게 생각한 데에는 또 몇가지 이유가 있었는데, 팝업 부분은 React 로 만들고 싶었고, 페이지에 삽입되는 스크립트는 그냥 자바스크립트로만 작업하면 되겠다고 생각해서 리엑트 프로젝트 세팅하기 귀찮아서 [CRA](https://github.com/facebook/create-react-app)를 사용하려고 했다.

## 타입스크립트를 쓰고 싶은데

나는 타입스크립트를 좋아한다. 그래서 타입스크립트로 프로젝트를 하고 싶었다. CRA 같은 경우에는 그냥 `create-react-app [APP_NAME] --typescript` 만 입력하면 되는데, chrome extension 에서는 chrome 객체가 따로 있길래 타입 정의가 필요했다.

역시나, 똑똑한 다른 개발자들이 이미 타입 정의를 `@types/chrome` 이라는 이름으로 만들어 놓았다. 나는 팝업에서도, 페이지에 삽입되는 스크립트에서도 chrome API를 사용해야 하기 때문에 각각 프로젝트에 `@types/chrome` 을 설치했다.

그리고 `tsconfig.json` 을 작성해주면 끝이다. CRA로 만든 프로젝트는 이미 타입스크립트 템플릿으로 생성되었기 때문에 따로 tsconfig 을 수정하지 않았고, content-scripts 는 직접 tsconfig.json 을 수정해다.

### 빌드 & 패키지, 그리고 테스트

타입스크립트로 프로젝트를 하려니까 자바스크립트로 트랜스파일하고, content-scripts, popup 등을 한데 묶어야 했다. 생각보다 귀찮다. 이 작업을 매번 소스 수정하고 테스트 하기 위해 수동으로 하기에는 너무 귀찮다. 그래서 생각을 했다. 그냥 root 폴더에 `package.json` 파일 하나 만들고 scripts 에 내부 프로젝트에서 쓰이는 커맨드들을 묶어주는 커맨드를 한번 더 적었다. 이 이상 간단하게 할 방법은 생각이 안났다.

```json
...
  "scripts": {
      "postinstall": "cd settings && yarn && cd ../extension && yarn",
      "build-extension": "cd extension && yarn build",
      "build-settings": "cd settings && yarn build",
      "build": "rm -rf extension/build && yarn build-extension && yarn build-settings",
      "lint-extension": "",
      "lint-settings": "",
      "lint": "yarn lint-extension && yarn lint-settings",
      "package": "rm -rf dist && mkdir dist && cp extension/manifest.json dist/manifest.json && cp -r extension/build dist/build"
  },
...
```

각각 프로젝트 설치도 귀찮아서 루트 폴더에서 yarn install 하면 postinstall 로 설치되게끔 했다. yarn workspaces 나 lema 같은 
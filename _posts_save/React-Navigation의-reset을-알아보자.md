---
title: "React Navigation reset을 알아보자"
subtitle: "쓸데없이 어렵게 만든 Navigation 방법"
categories: react-native
cover: 
tags: react react-native react-navigation
---

React Native를 사용해서 앱 개발을 할 때 Screen Navigation 라이브러리로 `React Navigation`을 사용하고 있었다. 일반적인 상황에서는 매우 편하지만, 특정 상황에서는 스택을 임의로 조작해야 할 일이 생긴다.

간단한 예를 들면,

* 로그인 후 다시 로그인 페이지를 보이기 않게 하기
* 로그아웃 시 로그인 페이지로 이동하기
* 회원가입 후 로그인 페이지로 이동하기 (혹은 로그인 처리 후 메인 화면으로 이동)

위 경우와 같은 쉽게 생각해볼 만한 경우가 있고, 다른 이유로 인해 스택을 조작해야 할 수 있다.

그럴 때는 React Navigation의 reset 기능을 이용해야 한다.


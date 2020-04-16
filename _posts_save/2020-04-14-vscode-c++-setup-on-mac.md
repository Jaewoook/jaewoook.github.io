---
layout: post
title: "VSCode에서 C++로 백준 알고리즘 문제 풀기"
date: 2020-04-14
categories: blog baekjoon develop c++ vscode macos guide
tags: blog baekjoon boj develop guide c++ vscode visual-studio-code
---

VSCode 성애자인 내가 백준 알고리즘 문제를 풀기 위해 VSCode에서 C++로 작성된 알고리즘 문제를 컴파일하고 테스트하기 위한 환경 구축을 어떻게 했는지 작성해보려고 한다.

## 내가 알고리즘 문제를 푸는 방법

사람마다 다르겠지만, 난 깃허브에 

## 백준 알고리즘 채점 환경 알아보기

## GNU C++ 컴파일러 설치

## VSCode 스크립트 작성

## laubch.json 작성하기

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "C++ build and debug active file",
            "type": "cppdbg",
            "request": "launch",
            "program": "${fileDirname}/${fileBasenameNoExtension}",
            "args": [],
            "stopAtEntry": false,
            "cwd": "${workspaceFolder}",
            "environment": [],
            "externalConsole": true,
            "MIMode": "lldb",
            "preLaunchTask": "C++ Build",
            "osx": {
                "MIMode": "lldb"
            }
        }
    ]
}
```

## 결론


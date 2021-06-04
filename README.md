# 1. 프로젝트 생성 - cli

```bash
$ npm install -g @vue/cli

$ vue create vue-todo
 - default 선택 

$ cd vue-todo
$ npm run serve
```

# 2. 프로젝트 소개 및 컴포넌트 설계

## 2-1. 프로젝트
<img src="./md/1.png" width="40%" >

## 2-2. 컴포넌트

> 컴포넌트를 작게하는 경우 재사용성이 높아진다.

- TodoHeader: 제목
- TodoInput: 할일 타이핑하는 input
- TodoList: 할일 리스트 - 완료 유무, 리스트 제거
- TodoFooter: 모든 리스트를 없애는 버튼
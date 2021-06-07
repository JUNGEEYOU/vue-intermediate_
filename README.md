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
- TodoSentiment: 오늘의 기분 설정 - 커스텀 컴포넌트 

# 3. 프로젝트 구현 순서
1. 컴포넌트 생성 
2. 파비콘, 아이콘, 폰트, 반응형 태그 설정 
    - 파비콘 생성: [https://www.favicon-generator.org/](https://www.favicon-generator.org/)
    - 반응형 웹(뷰포트): [https://www.w3schools.com/css/css_rwd_viewport.asp](https://www.w3schools.com/css/css_rwd_viewport.asp)
    - 아이콘(fontawesome): [https://fontawesome.com/](https://fontawesome.com/)
    - 구글 폰트(ubuntu): [https://fonts.google.com/specimen/Ubuntu](https://fonts.google.com/specimen/Ubuntu)
3. 각 컴포넌트 구현
4. 애플리케이션 구조 개선하기 (vuex의 축소 구조)
 - App.vue: 해당 뷰에서 모두 데이터를 관리 - 컨테이너 컴포넌트 역할
 - 다른 컴포넌트: App.vue의 하위 컴포넌트 
 - 하위 <-> 상위 데이터를 전달하기 위해 emit과 props 사용 
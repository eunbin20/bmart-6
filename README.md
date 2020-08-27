# 🛒 Bmart

![version](https://img.shields.io/github/v/release/woowa-techcamp-2020/bmart-6?include_prereleases&sort=semver&label=version)

## 소개
[Bmart](http://3.35.66.51) 프로젝트는 배달의 민족의 Bmart 모바일 앱 서비스를 반응형 모바일 웹으로 클론하면서 **사용자에게 앱과 유사한 경험을 제공**하며 **재사용성이 높은 컴포넌트**와 **안정적인 상태 관리를 목표**로 하고 있습니다.

## 배포
[배포 링크](http://3.35.66.51)

## 재사용성 높은 UI 컴포넌트
![UI 컴포넌트 구조](https://user-images.githubusercontent.com/36878344/91496983-15976c00-e8f8-11ea-8551-e5a1bcc2d067.png)

**Atomic Design Pattern**을 참고하여 지금 프로젝트에서의 재사용성에 초점을 둔 3개의 계층을 가진 컴포넌트 구조를 만들었습니다. 

>* small: 하위에 있는 컴포넌트가 현재 프로젝트에서 재사용될 여지가 없는 컴포넌트
>* medium: small 혹은 medium 컴포넌트를 조합한 컴포넌트
>* large: small, medium을 조합해서 만든 컴포넌트

각 페이지에 필요한 데이터와 상태 관리는 page에서 이루어지고 컴포넌트는 받은 데이터를 렌더링하는 역할을 수행합니다.

## 프로젝트 구조
```bash
|-- github
    |-- workflows // github actions
|-- client
    |-- public
        |-- aseets // images
        index.html
    |-- src
        |-- apis
        |-- commons
        		constants.ts
            svgs.tsx
        |-- components // UI Components
        		|-- largs
        		|-- medium
        		|-- small
        |-- contexts
        		|-- user // user context
        |-- hooks // custom hooks
        |-- libs // libraries
        |-- pages // page components
        |-- styles // common & global styles
        |-- tyles // common types
        |-- utils // util functions..
				App.tsx
|-- scripts // deploy scripts
|-- server
		|-- bin // www
		|-- controllers
		|-- lib
		|-- middlewares // express middlewares
		|-- models // sequelize models
		|-- routes // routing
		|-- seeder // dummy data
		|-- utils // constants & utils functions
		app.js
 
```

## 설치 가이드

### 프로젝트 가져오기
```
git clone https://github.com/woowa-techcamp-2020/bmart-6.git
```
### 클라이언트 코드 빌드하기
```
cd client
npm install
npm run build
```
### 서버 코드 실행하기

> ⚠️ `server/.env`에 다음 환경 변수가 등록되어야 합니다.  
> IS_DEMO를 true로 설정하면 실행할 때 마다 테이터베이스가 초기화되고 준비된 데이터가 추가됩니다.

```
PORT=3000
NODE_ENV=production
IS_DEMO=true
DB_HOST={데이터베이스 주소}
DB_USER={데이터베이스 사용자}
DB_PW={데이터베이스 사용자 비밀번호}
DB_NAME={데이터베이스 이름}
JWT_SECRET={임의의 JWT SECRET KEY}
```

```
cd server
npm install
npm start
```

서버가 실행됐다면 http://localhost:3000 에서 확인하실 수 있습니다.

## 협업 내용

> 다음과 같은 규칙과 디자인에 따라 협업을 진행했습니다.

- [Ground Rule](https://github.com/woowa-techcamp-2020/bmart-6/wiki/Ground-Rule)
- [Convention](https://github.com/woowa-techcamp-2020/bmart-6/wiki/Convetion)

- [ERD](https://github.com/woowa-techcamp-2020/bmart-6/wiki/ERD)
- [API Documentation](https://github.com/woowa-techcamp-2020/bmart-6/wiki/API-Documentation)
- [Component Name](https://github.com/woowa-techcamp-2020/bmart-6/wiki/Component-Name)
- [Design](https://www.figma.com/file/8PheL4eBFXz8IEEgtjZsR2/%EC%9A%B0%EC%95%84%ED%95%9C%ED%85%8C%ED%81%AC%EC%BA%A0%ED%94%843%EA%B8%B0-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8?node-id=171%3A78)


## 팀원

- 이관형 [@wudys](https://github.com/wudys)
- 정진혁 [@zoomkoding](https://github.com/zoomKoding)
- 홍동욱 [@doonguk](https://github.com/doonguk)

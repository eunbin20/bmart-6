# 🛒 Bmart

![version](https://img.shields.io/github/v/release/woowa-techcamp-2020/bmart-6?include_prereleases&sort=semver&label=version)

## 소개
[Bmart](http://3.35.66.51) 프로젝트는 배달의 민족의 Bmart 모바일 앱 서비스를 반응형 모바일 웹으로 클론하면서 **사용자에게 앱과 유사한 경험을 제공**하며 **재사용성이 높은 컴포넌트**와 **안정적인 상태 관리를 목표**로 하고 있습니다.

## 배포
[배포 링크](http://3.35.66.51)

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

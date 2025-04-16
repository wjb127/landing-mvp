# 랜딩 페이지 템플릿 라이브러리

다양한 목적에 맞는 랜딩 페이지 템플릿을 제공하는 라이브러리입니다. 제품, 서비스, 이벤트 등 여러 용도에 맞게 쉽고 빠르게 랜딩 페이지를 생성할 수 있습니다.

## 특징

- **재사용 가능한 템플릿**: 핵심 컴포넌트를 재사용하여 다양한 랜딩 페이지 생성
- **빠른 개발**: 기획 1일, 개발 1일, 광고 세팅 1일, 데이터 수집 1주일, 분석 1일로 약 2주 내에 완료 가능
- **반응형 디자인**: 모든 디바이스에서 최적화된 경험 제공
- **커스터마이징 용이**: 컨텐츠 및 디자인 요소를 손쉽게 변경 가능
- **검증된 구조**: 전환율에 최적화된 구조와 디자인

## 예시 페이지

- **제품 랜딩 페이지**: 제품 소개 및 판매를 위한 최적화된 랜딩 페이지
- **서비스 랜딩 페이지**: 전문 서비스 비즈니스를 위한 특화된 랜딩 페이지
- **이벤트 랜딩 페이지**: 특별 할인, 프로모션 이벤트에 최적화된 랜딩 페이지

## 시작하기

```bash
# 저장소 클론
git clone https://github.com/wjb127/landing-mvp.git

# 디렉토리 이동
cd landing-mvp

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

## 기술 스택

- Next.js
- React
- Tailwind CSS
- TypeScript

## 사용 예시

```tsx
import LandingTemplate from "../components/LandingTemplate";

export default function CustomLandingPage() {
  return (
    <LandingTemplate
      title="나만의 랜딩 페이지 제목"
      subtitle="부제목을 입력하세요"
      primaryCTA={{
        text: "지금 시작하기",
        href: "/start",
      }}
      // 기타 필요한 속성들 추가
    />
  );
}
```

## 라이선스

MIT

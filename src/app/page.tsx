import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <h1 className="text-3xl md:text-4xl font-bold text-center">랜딩 페이지 템플릿 라이브러리</h1>
        <p className="text-xl text-center max-w-2xl">
          다양한 목적에 맞는 랜딩 페이지 템플릿을 확인하고 빠르게 적용해보세요
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          <div className="border rounded-xl p-6 hover:shadow-lg transition-shadow flex flex-col">
            <h2 className="text-xl font-semibold mb-4">제품 랜딩 페이지</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-auto">제품 소개 및 판매를 위한 최적화된 랜딩 페이지 템플릿</p>
            <Link 
              href="/examples/product" 
              className="mt-6 w-full px-4 py-2 bg-blue-600 text-white text-center rounded-lg hover:bg-blue-700 transition-colors"
            >
              데모 보기
            </Link>
          </div>

          <div className="border rounded-xl p-6 hover:shadow-lg transition-shadow flex flex-col">
            <h2 className="text-xl font-semibold mb-4">서비스 랜딩 페이지</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-auto">전문 서비스 비즈니스를 위한 특화된 랜딩 페이지 템플릿</p>
            <Link 
              href="/examples/service" 
              className="mt-6 w-full px-4 py-2 bg-blue-600 text-white text-center rounded-lg hover:bg-blue-700 transition-colors"
            >
              데모 보기
            </Link>
          </div>

          <div className="border rounded-xl p-6 hover:shadow-lg transition-shadow flex flex-col">
            <h2 className="text-xl font-semibold mb-4">이벤트 랜딩 페이지</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-auto">특별 할인, 프로모션 이벤트에 최적화된 랜딩 페이지 템플릿</p>
            <Link 
              href="/examples/event" 
              className="mt-6 w-full px-4 py-2 bg-blue-600 text-white text-center rounded-lg hover:bg-blue-700 transition-colors"
            >
              데모 보기
            </Link>
          </div>
        </div>

        <div className="mt-16 max-w-2xl text-center">
          <h2 className="text-2xl font-semibold mb-4">랜딩 페이지 템플릿의 장점</h2>
          <ul className="text-left list-disc pl-6 space-y-2">
            <li>빠른 개발: 기획 1일, 개발 1일, 광고 세팅 1일, 데이터 수집 1주일, 분석 1일로 약 2주 내에 완료 가능</li>
            <li>쉬운 커스터마이징: 컨텐츠 및 디자인 요소를 손쉽게 변경 가능</li>
            <li>검증된 구조: 전환율에 최적화된 구조와 디자인으로 성과 극대화</li>
            <li>다양한 용도: 제품, 서비스, 이벤트 등 다양한 목적에 맞는 템플릿 제공</li>
            <li>비용 효율성: 처음부터 개발하는 것보다 훨씬 저렴한 비용으로 고품질 랜딩 페이지 구축</li>
          </ul>
        </div>
      </main>
      <footer className="row-start-3 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} 랜딩 페이지 템플릿 라이브러리. 모든 권리 보유.</p>
      </footer>
    </div>
  );
}

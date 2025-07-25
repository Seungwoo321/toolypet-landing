import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '업데이트 - Toolypet',
  description: 'Toolypet 서비스의 최신 업데이트 내역입니다.',
}

export default function Updates() {
  return (
    <main className="min-h-screen max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">업데이트</h1>
      
      <section className="space-y-8">
        <div className="border-l-4 border-blue-500 pl-6">
          <h2 className="text-2xl font-semibold mb-2">2025년 7월 24일</h2>
          <h3 className="text-lg font-medium mb-2">Toolypet 공식 런칭</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600">
            <li>루트 도메인 사이트 오픈</li>
            <li>4개 핵심 서비스 통합 (DevTools, CSS Studio, SEO Tools, Security Tools)</li>
            <li>다국어 지원 (한국어, 영어, 일본어, 중국어)</li>
            <li>라이트/다크 모드 지원</li>
          </ul>
        </div>
        
        <div className="border-l-4 border-gray-300 pl-6">
          <h2 className="text-2xl font-semibold mb-2">예정된 업데이트</h2>
          <div className="space-y-4 mt-4">
            <div>
              <h3 className="text-lg font-medium">2025년 8월 (Phase 2)</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>JSON Tools 출시</li>
                <li>Image Tools 출시</li>
                <li>Converter Tools 출시</li>
                <li>워크스페이스 기능 베타 테스트</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium">2025년 9월 (Phase 3)</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>API Tools 출시</li>
                <li>Performance Tools 출시</li>
                <li>Documentation Tools 출시</li>
                <li>커뮤니티 기능 오픈</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium">2025년 4분기</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>AI 통합 기능 도입</li>
                <li>나머지 10개 서비스 순차 출시</li>
                <li>프리미엄 기능 도입</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
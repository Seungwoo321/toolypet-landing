import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '개인정보처리방침 - Toolypet',
  description: 'Toolypet 서비스의 개인정보처리방침입니다.',
}

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">개인정보처리방침</h1>
      <p className="text-gray-600 mb-8">시행일: 2025년 7월 24일</p>
      
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-3">1. 개인정보의 수집 및 이용목적</h2>
          <p>Toolypet은 서비스 제공을 위해 최소한의 개인정보만을 수집합니다.</p>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-3">2. 수집하는 개인정보 항목</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>이메일 주소 (뉴스레터 구독 시)</li>
            <li>접속 IP 정보</li>
            <li>쿠키</li>
          </ul>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-3">3. 개인정보의 보유 및 이용기간</h2>
          <p>수집된 개인정보는 서비스 이용 종료 시까지 보유하며, 이용자의 요청 시 즉시 삭제합니다.</p>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-3">4. 개인정보의 파기</h2>
          <p>개인정보 보유기간이 경과하거나 처리목적이 달성된 경우 지체없이 파기합니다.</p>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-3">5. 문의처</h2>
          <p>이메일: privacy@toolypet.com</p>
        </div>
      </section>
    </main>
  )
}
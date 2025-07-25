import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '이용약관 - Toolypet',
  description: 'Toolypet 서비스 이용약관입니다.',
}

export default function Terms() {
  return (
    <main className="min-h-screen max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">이용약관</h1>
      <p className="text-gray-600 mb-8">시행일: 2025년 7월 24일</p>
      
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-3">제1조 (목적)</h2>
          <p>이 약관은 Toolypet(이하 "회사")이 제공하는 서비스의 이용조건 및 절차, 회사와 회원 간의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.</p>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-3">제2조 (서비스의 내용)</h2>
          <p>회사는 다음과 같은 서비스를 제공합니다:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>개발자 도구 서비스</li>
            <li>CSS 디자인 도구</li>
            <li>SEO 분석 도구</li>
            <li>보안 도구</li>
          </ul>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-3">제3조 (서비스 이용)</h2>
          <p>서비스는 회사의 업무상 또는 기술상 특별한 지장이 없는 한 연중무휴, 1일 24시간 제공함을 원칙으로 합니다.</p>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-3">제4조 (회원의 의무)</h2>
          <p>회원은 서비스 이용 시 다음 각 호의 행위를 하여서는 안 됩니다:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>타인의 정보 도용</li>
            <li>서비스의 정상적인 운영 방해</li>
            <li>저작권 등 제3자의 권리 침해</li>
          </ul>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-3">제5조 (면책조항)</h2>
          <p>회사는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다.</p>
        </div>
      </section>
    </main>
  )
}
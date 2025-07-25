import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '문의하기 - Toolypet',
  description: 'Toolypet 서비스에 대한 문의사항을 보내주세요.',
}

export default function Contact() {
  return (
    <main className="min-h-screen max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">문의하기</h1>
      
      <section className="space-y-8">
        <div>
          <p className="text-lg mb-6">
            Toolypet 서비스에 대한 문의사항이나 제안사항이 있으시면 아래 연락처로 연락해 주세요.
          </p>
        </div>
        
        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 pl-4">
            <h2 className="text-xl font-semibold mb-2">일반 문의</h2>
            <p className="text-black dark:text-gray-300">contact@toolypet.com</p>
          </div>
          
          <div className="border-l-4 border-green-500 pl-4">
            <h2 className="text-xl font-semibold mb-2">기술 지원</h2>
            <p className="text-black dark:text-gray-300">support@toolypet.com</p>
          </div>
          
          <div className="border-l-4 border-purple-500 pl-4">
            <h2 className="text-xl font-semibold mb-2">제휴 문의</h2>
            <p className="text-black dark:text-gray-300">partner@toolypet.com</p>
          </div>
          
          <div className="border-l-4 border-red-500 pl-4">
            <h2 className="text-xl font-semibold mb-2">버그 신고</h2>
            <p className="text-black dark:text-gray-300">bugs@toolypet.com</p>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-3">답변 안내</h3>
          <p className="mb-3">
            안녕하세요! Toolypet은 1인 개발자가 운영하는 서비스입니다.
          </p>
          <p className="mb-3">
            모든 문의는 직접 확인하고 답변드리고 있으며, 평균 <strong>2-3일 이내</strong> 답변을 목표로 하고 있습니다.
          </p>
          <p className="text-sm text-black dark:text-gray-400">
            • 개발 작업 중에는 답변이 지연될 수 있습니다<br/>
            • 주말/공휴일 문의는 평일에 순차적으로 처리됩니다<br/>
            • 긴급한 버그는 최우선으로 확인합니다
          </p>
        </div>
      </section>
    </main>
  )
}
#!/bin/bash

# 로컬 테스트를 위한 스크립트
# 모든 서비스를 각각 다른 포트로 실행

echo "🚀 Starting local development servers..."

# 색상 정의
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# toolypet-developer 디렉토리로 이동
cd ../toolypet-developer

echo -e "${YELLOW}Starting toolypet-developer services...${NC}"

# 각 앱을 백그라운드에서 실행
echo -e "${BLUE}Starting CSS Studio on port 3001...${NC}"
cd apps/css-studio && PORT=3001 pnpm dev &
CSS_PID=$!
cd ../..

echo -e "${BLUE}Starting DevTools on port 3002...${NC}"
cd apps/devtools && PORT=3002 pnpm dev &
DEVTOOLS_PID=$!
cd ../..

echo -e "${BLUE}Starting Security Tools on port 3003...${NC}"
cd apps/security-tools && PORT=3003 pnpm dev &
SECURITY_PID=$!
cd ../..

echo -e "${BLUE}Starting SEO Tools on port 3004...${NC}"
cd apps/seo-tools && PORT=3004 pnpm dev &
SEO_PID=$!
cd ../..

# toolypet 디렉토리로 돌아가기
cd ../toolypet

echo -e "${YELLOW}Starting toolypet landing on port 3000...${NC}"
pnpm dev &
LANDING_PID=$!

echo -e "${GREEN}✅ All services started!${NC}"
echo ""
echo "📍 Service URLs:"
echo "   - Landing: http://localhost:3000"
echo "   - CSS Studio: http://localhost:3001"
echo "   - DevTools: http://localhost:3002"
echo "   - Security Tools: http://localhost:3003"
echo "   - SEO Tools: http://localhost:3004"
echo ""
echo "Press Ctrl+C to stop all services..."

# 종료 시 모든 프로세스 정리
trap "echo 'Stopping all services...'; kill $CSS_PID $DEVTOOLS_PID $SECURITY_PID $SEO_PID $LANDING_PID 2>/dev/null; exit" INT

# 프로세스가 계속 실행되도록 대기
wait
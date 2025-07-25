const puppeteer = require('puppeteer');

(async () => {
  console.log('Opening browser...');
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  
  // Set viewport
  await page.setViewport({ width: 1920, height: 1080 });
  
  console.log('Navigating to http://localhost:3000/ko...');
  await page.goto('http://localhost:3000/ko', { waitUntil: 'networkidle2' });
  
  // Wait for animations to complete
  await page.waitForTimeout(2000);
  
  // Check layout elements
  const layoutInfo = await page.evaluate(() => {
    const results = {};
    
    // Check navigation
    const nav = document.querySelector('nav');
    results.navigation = {
      exists: !!nav,
      position: nav ? window.getComputedStyle(nav).position : 'not found',
      top: nav ? window.getComputedStyle(nav).top : 'not found'
    };
    
    // Check hero section
    const heroTitle = document.querySelector('h1');
    results.heroTitle = {
      text: heroTitle ? heroTitle.innerText : 'not found',
      opacity: heroTitle ? window.getComputedStyle(heroTitle).opacity : 'not found',
      textAlign: heroTitle ? window.getComputedStyle(heroTitle.parentElement).textAlign : 'not found'
    };
    
    // Check service cards
    const serviceCards = document.querySelectorAll('.card-3d');
    results.serviceCards = {
      count: serviceCards.length,
      display: serviceCards.length > 0 ? window.getComputedStyle(serviceCards[0].parentElement.parentElement).display : 'not found'
    };
    
    // Check gradient background
    const gradientBg = document.querySelector('.gradient-bg');
    results.gradientBg = {
      exists: !!gradientBg,
      opacity: gradientBg ? window.getComputedStyle(gradientBg).opacity : 'not found'
    };
    
    // Check text gradient
    const textGradient = document.querySelector('.text-gradient');
    results.textGradient = {
      exists: !!textGradient,
      text: textGradient ? textGradient.innerText : 'not found'
    };
    
    // Check overall layout
    const main = document.querySelector('main');
    const sections = main ? main.querySelectorAll('section') : [];
    results.layout = {
      mainExists: !!main,
      sectionCount: sections.length,
      bodyBackground: window.getComputedStyle(document.body).backgroundColor
    };
    
    return results;
  });
  
  console.log('\n=== Layout Analysis ===');
  console.log(JSON.stringify(layoutInfo, null, 2));
  
  // Take screenshot
  await page.screenshot({ path: '/tmp/toolypet-rendered.png', fullPage: false });
  console.log('\nScreenshot saved to /tmp/toolypet-rendered.png');
  
  await browser.close();
})();
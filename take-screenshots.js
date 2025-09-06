const { chromium } = require('playwright');

async function takeScreenshots() {
  let browser = null;
  
  try {
    // Launch browser
    console.log('🚀 Launching Chromium browser...');
    browser = await chromium.launch({ 
      headless: true,
      args: ['--disable-dev-shm-usage', '--no-sandbox'] 
    });
    
    const context = await browser.newContext();
    const page = await context.newPage();
    
    // Wait for the page to load
    console.log('🔗 Navigating to http://localhost:3000');
    await page.goto('http://localhost:3000', { 
      waitUntil: 'domcontentloaded',
      timeout: 30000 
    });
    
    // Wait for network to be idle and all assets to load
    await page.waitForLoadState('networkidle');
    
    // Wait extra time for CSS animations and JavaScript to execute
    console.log('⏳ Waiting for page to fully render...');
    await page.waitForTimeout(5000);
    
    // Check if CHOP text is visible
    try {
      await page.waitForSelector('text=CHOP', { timeout: 10000 });
      console.log('✅ Found CHOP text');
    } catch (e) {
      console.log('⚠️ Could not find CHOP text, continuing anyway...');
    }
    
    // 1. Full page screenshot (desktop view)
    console.log('📸 Capturing full page screenshot...');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(1000);
    await page.screenshot({ 
      path: 'screenshots/homepage-fullpage.png',
      fullPage: true 
    });
    
    // 2. Desktop view (1920x1080)
    console.log('📸 Capturing desktop view (1920x1080)...');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(1000);
    await page.screenshot({ 
      path: 'screenshots/homepage-desktop.png',
      fullPage: false 
    });
    
    // 3. Mobile view (iPhone 12 Pro)
    console.log('📸 Capturing mobile view (iPhone 12 Pro)...');
    await page.setViewportSize({ width: 390, height: 844 });
    await page.waitForTimeout(1000);
    await page.screenshot({ 
      path: 'screenshots/homepage-mobile-iphone12pro.png',
      fullPage: true 
    });
    
    // 4. Tablet view for good measure
    console.log('📸 Capturing tablet view (iPad)...');
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.waitForTimeout(1000);
    await page.screenshot({ 
      path: 'screenshots/homepage-tablet.png',
      fullPage: true 
    });
    
    console.log('✅ All screenshots captured successfully!');
    console.log('📁 Screenshots saved to ./screenshots/');
    
    // Get page info for reporting
    const title = await page.title();
    const url = page.url();
    
    console.log('📊 Page Information:');
    console.log(`   Title: ${title}`);
    console.log(`   URL: ${url}`);
    
    // Check for key elements
    console.log('🔍 Checking for key elements...');
    
    try {
      const chopShopText = await page.locator('text=CHOP SHOP').first().isVisible();
      console.log(`   ✅ "CHOP SHOP" text: ${chopShopText ? 'Found' : 'Not found'}`);
    } catch (e) {
      console.log('   ❌ "CHOP SHOP" text: Not found');
    }
    
    try {
      const heroSection = await page.locator('section').first().isVisible();
      console.log(`   ✅ Hero section: ${heroSection ? 'Found' : 'Not found'}`);
    } catch (e) {
      console.log('   ❌ Hero section: Not found');
    }
    
    try {
      const servicesSection = await page.locator('#services').isVisible();
      console.log(`   ✅ Services section: ${servicesSection ? 'Found' : 'Not found'}`);
    } catch (e) {
      console.log('   ❌ Services section: Not found');
    }
    
    try {
      const packages = await page.locator('text=MILD').isVisible();
      console.log(`   ✅ Package tiers (MILD): ${packages ? 'Found' : 'Not found'}`);
    } catch (e) {
      console.log('   ❌ Package tiers: Not found');
    }
    
  } catch (error) {
    console.error('❌ Error taking screenshots:', error.message);
    if (error.message.includes('Target page, context or browser has been closed')) {
      console.log('💡 This usually means the server is not running or not accessible.');
    }
    process.exit(1);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

// Run the screenshot function
takeScreenshots();
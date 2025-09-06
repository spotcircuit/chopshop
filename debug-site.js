const { chromium } = require('playwright');
const fs = require('fs');

async function debugSite() {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  
  try {
    console.log('Navigating to http://localhost:3001...');
    await page.goto('http://localhost:3001', { waitUntil: 'networkidle', timeout: 30000 });
    
    // Take screenshots
    console.log('Taking full page screenshot...');
    await page.screenshot({ path: 'full-page-debug.png', fullPage: true });
    
    console.log('Taking viewport screenshot...');
    await page.screenshot({ path: 'viewport-debug.png' });
    
    // Get page title
    const title = await page.title();
    console.log(`Page title: "${title}"`);
    
    // Check for console errors
    const consoleErrors = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });
    
    // Get the HTML content
    const htmlContent = await page.content();
    fs.writeFileSync('page-content.html', htmlContent);
    
    // Check for specific elements
    const chopShopText = await page.textContent('body').catch(() => 'Could not get body text');
    console.log('Page contains text:', chopShopText.substring(0, 200) + '...');
    
    // Check if images are loading
    const images = await page.locator('img').all();
    console.log(`Found ${images.length} images on the page`);
    
    for (let i = 0; i < Math.min(images.length, 10); i++) {
      const src = await images[i].getAttribute('src');
      const alt = await images[i].getAttribute('alt');
      console.log(`Image ${i + 1}: src="${src}", alt="${alt}"`);
    }
    
    // Check for CSS files
    const styleLinks = await page.locator('link[rel="stylesheet"]').all();
    console.log(`Found ${styleLinks.length} CSS files`);
    
    for (let i = 0; i < styleLinks.length; i++) {
      const href = await styleLinks[i].getAttribute('href');
      console.log(`CSS ${i + 1}: ${href}`);
    }
    
    // Check computed styles of key elements
    const bodyStyles = await page.evaluate(() => {
      const body = document.body;
      const styles = window.getComputedStyle(body);
      return {
        backgroundColor: styles.backgroundColor,
        backgroundImage: styles.backgroundImage,
        color: styles.color,
        fontFamily: styles.fontFamily
      };
    });
    console.log('Body computed styles:', bodyStyles);
    
    // Check for any elements with "CHOP SHOP" text
    const chopShopElements = await page.locator('text=CHOP SHOP').all();
    console.log(`Found ${chopShopElements.length} elements containing "CHOP SHOP"`);
    
    // Check for any glassmorphic or gradient classes
    const glassMorphElements = await page.locator('[class*="glass"], [class*="backdrop"], [class*="gradient"]').all();
    console.log(`Found ${glassMorphElements.length} elements with glass/gradient classes`);
    
    // Check network failures
    const failedRequests = [];
    page.on('response', response => {
      if (response.status() >= 400) {
        failedRequests.push(`${response.status()} - ${response.url()}`);
      }
    });
    
    // Wait a moment for any async content
    await page.waitForTimeout(3000);
    
    console.log('Failed requests:', failedRequests);
    console.log('Console errors:', consoleErrors);
    
    // Get the main content area dimensions
    const mainContent = await page.evaluate(() => {
      const main = document.querySelector('main') || document.body;
      const rect = main.getBoundingClientRect();
      return {
        width: rect.width,
        height: rect.height,
        hasContent: main.textContent.trim().length > 0
      };
    });
    console.log('Main content info:', mainContent);
    
  } catch (error) {
    console.error('Error debugging site:', error);
  } finally {
    await browser.close();
  }
}

debugSite().catch(console.error);
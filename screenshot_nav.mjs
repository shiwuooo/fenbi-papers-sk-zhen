import pkg from 'file:///C:/Users/石/.workbuddy/binaries/node/workspace/node_modules/playwright/index.js';
const {chromium} = pkg;
const browser = await chromium.launch({headless:true});
const page = await browser.newPage();
await page.goto('file:///D:/workbuddy/fenbi-deploy/fenbi-papers-sk-zhen/index.html');
await page.waitForTimeout(1000);
// click tab-16 (江苏） to see multi-page
const tab = await page.$('.categories-item[data-tab="16"]');
if(tab) await tab.click();
await page.waitForTimeout(500);
await page.screenshot({path:'nav_screenshot.png', fullPage:false});
console.log('screenshot saved');
await browser.close();

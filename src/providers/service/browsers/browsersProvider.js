import { ChromeBrowser } from "./browsersLibrary/chromeBrowser.js"
//import { FFBrowser } from "./browsersLibrary/ffBrowser.js"

export class BrowsersProvider {
    static BROWSER_MAPPER = {
        'chrome': ChromeBrowser
       // 'ff': FFBrowser
    }
    async getDriver(browserName) {
        const browser = new BrowsersProvider.BROWSER_MAPPER[browserName];
        if(!browser) {
            throw new Error('Browser not supported')
        }
        const driver = await browser.getDriver();
        return driver
    }
}
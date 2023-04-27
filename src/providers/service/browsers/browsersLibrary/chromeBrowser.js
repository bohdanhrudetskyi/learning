//import  WebDriverManager from 'webdriver-manager'
import chrome from 'selenium-webdriver/chrome.js'
import { Builder } from 'selenium-webdriver'
export class ChromeBrowser {
    async getDriver() {
        // const manager = new WebDriverManager();
        //  await manager.update();
        //  const service = new chrome.ServiceBuilder(manager.getDownloadedDriverPath()).build();
        //  const options = new chrome.Options();
        //const driver = await new Builder().setChromeOptions(options).setChromeService(service).forBrowser('chrome').build();
        const driver = await new Builder().forBrowser('chrome').build();
        return driver
    }
}
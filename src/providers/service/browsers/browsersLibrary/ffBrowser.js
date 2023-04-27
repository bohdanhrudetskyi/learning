import WebDriverManager from 'webdriver-manager'
import ff from 'selenium-webdriver/firefox.js'
import { Builder } from 'selenium-webdriver';
export class FFBrowser {
    async getDriver() {
        const manager = new WebDriverManager();
        await manager.update();
        const service = new ff.ServiceBuilder(manager.getDownloadedDriverPath()).build();
        const options = new ff.Options();
        const driver = await new Builder().forBrowser('firefox').setFirefoxOptions(options).setFirefoxService(service).build();
        return driver
    }
}
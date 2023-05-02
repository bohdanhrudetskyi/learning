import { BrowsersProvider } from "../../providers/service/browsers/browsersProvider.js"
import { By } from 'selenium-webdriver'

export class BaseAPP {

    constructor() {
        this.driverPromise = null;
    }

    async openBrowser(browserName) {
        const provider = new BrowsersProvider();
        this.driverPromise = provider.getDriver(browserName);
    }

    async goTo(browserPage) {
        return this.driverPromise.then((driverPromise) => {
            driverPromise.get(browserPage);
        });
    }

    async clickOnElementById(locator) {
        this.driverPromise.then((driverPromise) => {
            driverPromise.findElement(By.id(locator)).click();
        });
    }

    async clickOnElementByClass(locator, countOfTimes) {
        for (let i = 0; i < countOfTimes; i++) {
             this.driverPromise.then((driverPromise) => {
                 driverPromise.findElement(By.className(locator)).click()
            })
        }
    }

    async clickOnElementByXPath(locator, countOfElements) {
        for (let i = 0; i < countOfElements; i++) {
            this.driverPromise.then((driverPromise) => {
                driverPromise.findElement(By.xpath(locator)).click()
            })
        }
    }

    async waitForNewElementsToAppear(locator, timeout = 5000) {
        const driver = await this.driverPromise;
        const startTime = new Date().getTime();
        while(new Date().getTime() - startTime < timeout) {
            const elements = await driver.findElements(By.className(locator));
            if(elements.length > 0) {
                return elements;
            }
            await driver.sleep(500);
        }
        throw new Error('Timeout exceeded while waiting for the element')
    }

    async findElementsByClass(locator) {
        const driver = await this.driverPromise;
        return driver.findElements(By.className(locator));
    }

    async typeText(locator, text) {
        this.driverPromise.then((driverPromise) => {
            driverPromise.findElement(By.id(locator)).sendKeys(text);
        });
    }

    async quit() {
        return this.driverPromise.then((driverPromise) => {
            driverPromise.quit();
        });
    }
}
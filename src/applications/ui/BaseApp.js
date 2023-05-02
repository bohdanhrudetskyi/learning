import { BrowsersProvider } from "../../providers/service/browsers/browsersProvider.js"
import { By } from 'selenium-webdriver'

export class BaseAPP {

    constructor() {
        this.driverPromise = new BrowsersProvider().getDriver('chrome');
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

    async clickOnElementById(locator) {
        this.driverPromise.then((driverPromise) => {
            driverPromise.findElement(By.id(locator)).click();
        });
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
        return this.driverPromise.then((driverPromise) => {
            return driverPromise.findElements(By.className(locator));
        })
    }

    async typeText(locator, text) {
        this.driverPromise.then((driverPromise) => {
            driverPromise.findElement(By.id(locator)).sendKeys(text);
        });
    }

    async quit() {
        this.driverPromise.then((driverPromise) => {
            driverPromise.quit();
        });
    }
}
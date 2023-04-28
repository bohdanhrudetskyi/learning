import { BrowsersProvider } from "../../providers/service/browsers/browsersProvider.js"

export class BaseAPP {     
    constructor(response) {
        this.driver = new BrowsersProvider().getDriver('chrome');
        this.response = response
    }
    async goTo(browserPage) {
          response = await this.driver.get(browserPage);
          return response
    }
}
const hut = new BaseAPP();
hut.goTo('https://github.com/login')
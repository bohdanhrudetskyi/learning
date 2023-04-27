import {BrowsersProvider} from "../../providers/service/browsers/browsersProvider.js"

export class BaseAPP {
    async goTo() {
          const driver = await new BrowsersProvider().getDriver('chrome');
          driver.get('https://github.com/login')
    }
}
const go = new BaseAPP();
go.goTo()
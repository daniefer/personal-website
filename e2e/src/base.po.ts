import { browser, by, element } from 'protractor';

export class BasePage {
    navigateTo(url: string = ''): Promise<any> {
        return browser.get(browser.baseUrl + url) as Promise<any>;
    }

    getBrowserUrl(): Promise<string> {
        return browser.getCurrentUrl() as Promise<string>;
    }
}

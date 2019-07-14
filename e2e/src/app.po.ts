import { by, element } from 'protractor';
import { BasePage } from './base.po';

export class AppPage extends BasePage {
  getTitleText() {
    return element(by.css('.hero .title')).getText() as Promise<string>;
  }

  getSubTitleText() {
    return element(by.css('.hero .subtitle')).getText() as Promise<string>;
  }
}

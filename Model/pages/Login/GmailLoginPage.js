import { Page } from '../../../Base/Page.js';

export class GmailLoginPage extends Page {
  constructor(page) {
    super(page);
    this.emailField = 'input[type="email"]';
    this.passwordField = 'input[type="password"]';
    this.nextButton = '//span[contains(text(),"Next")]';
  }

  async goToLogin() {
    await this.navigate('https://accounts.google.com/');
  }

  async login(email, password) {
    await this.page.fill(this.emailField, email);
    await this.page.click(this.nextButton);
    await this.page.waitForTimeout(4000);
    await this.page.fill(this.passwordField, password);
    await this.page.click(this.nextButton);
    await this.page.waitForLoadState('networkidle');
  }
}
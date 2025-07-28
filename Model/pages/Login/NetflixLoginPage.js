import { Page } from '../../../Base/Page.js';

export class NetflixLoginPage extends Page {
  constructor(page) {
    super(page);
    this.emailField = 'input[name="userLoginId"]';
    this.passwordField = 'input[name="password"]';
    this.loginButton = 'button[type="submit"]';
  }

  async goToLogin() {
    await this.navigate('https://www.netflix.com/login');
  }

  async login(email, password) {
    await this.page.fill(this.emailField, email);
    await this.page.fill(this.passwordField, password);
    await this.page.click(this.loginButton);
    await this.page.waitForLoadState('networkidle');
  }
}
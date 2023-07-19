import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string;
  password: string;
  showError: boolean;
  errorMessage: string;

  constructor(private navCtrl: NavController) {
    this.showError = false;
    this.errorMessage = '';
  }

  login() {
    // Default credentials for regular users
    const defaultUsername = 'user1';
    const defaultPassword = 'pass1';
    const adminUsername = 'admin';
    const adminPassword = 'adminpass';

    if (this.username === defaultUsername && this.password === defaultPassword) {
      // Successful login for regular users
      this.navCtrl.navigateRoot('/requirement-list');
    } else if (this.username === adminUsername && this.password === adminPassword) {
      // Successful admin login
      this.navCtrl.navigateRoot('/admin-interface');
    } else {
      // Invalid credentials
      this.showError = true;
      this.errorMessage = 'Invalid username or password.';
    }
  }
}

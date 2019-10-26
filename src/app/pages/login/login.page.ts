import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/providers/auth.service';
import { AlertController } from '@ionic/angular';
import { TokenService } from 'src/app/providers/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  user: string;
  pass: string;

  constructor(
    private router: Router,
    private authSer: AuthService,
    public alertController: AlertController,
    private tokSer: TokenService
  ) {}

  registerPage() {
    this.router.navigate(['/register']);
  }
  async showErrorAlert(msg) {
    const alert = await this.alertController.create({
      header: 'Login Error',
      // subHeader: `${msg}`,
      message: `${msg}`,
      buttons: ['OK'],
      cssClass: 'alert-css'
    });
    await alert.present();
  }

  loginUser() {
    // this.showLoader();
    this.authSer
      .loginUser(this.user, this.pass)
      .subscribe(
        data => {
          // this.showLoader();
          this.tokSer.setToken(data.token);
          this.router.navigate(['tabs/streams']);
        },
        err => {
          if (err.error.msg) {
            this.showErrorAlert(err.error.msg[0].message);
          }
          if (err.error.message) {
            this.showErrorAlert(err.error.message);
          }
        }
      );
  }
  ngOnInit() {}
}

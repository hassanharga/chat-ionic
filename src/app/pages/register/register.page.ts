import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/providers/auth.service';
import { AlertController, LoadingController } from '@ionic/angular';
import { TokenService } from 'src/app/providers/token.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  username: string;
  email: string;
  password: string;
  loading: any;
  loaderToShow: any;

  constructor(
    private authSer: AuthService,
    public alertController: AlertController,
    private tokSer: TokenService,
    public loadingController: LoadingController,
    public router: Router
  ) { }

  registerUser() {
    // this.showLoader();
    this.authSer.registerUser(this.username, this.email, this.password).subscribe(
      data => {
        // this.showLoader();
        this.tokSer.setToken(data.token);
        this.router.navigate(['tabs']);
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

  async showErrorAlert(msg) {
    const alert = await this.alertController.create({
      header: 'Sign UP Error',
      // subHeader: `${msg}`,
      message: `${msg}`,
      buttons: ['OK'],
      cssClass: 'alert-css'
    });
    await alert.present();
  }
  async showLoader() {
    const loading = await this.loadingController.create({
      message: 'Loading...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();

    console.log('Loading dismissed!');
  }

  ngOnInit() {
  }

}

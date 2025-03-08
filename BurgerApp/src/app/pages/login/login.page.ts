import { Component } from '@angular/core';
import { Auth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from '@angular/fire/auth'; // Nuevas importaciones

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage {

  constructor(private auth: Auth) {} // Inyecta el servicio Auth

  async loginWithGoogle() {
    const provider = new GoogleAuthProvider(); // Usa GoogleAuthProvider directamente
    await signInWithPopup(this.auth, provider); // Usa signInWithPopup
  }

  async loginWithFacebook() {
    const provider = new FacebookAuthProvider(); // Usa FacebookAuthProvider directamente
    await signInWithPopup(this.auth, provider); // Usa signInWithPopup
  }
}
import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
} from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  isAuthenticated = false;
  username = '';

  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password)
      .then(
        () => {
          this.username = email;
          this.isAuthenticated = true;
          this.route.navigate(['/profile']);
        },
        (error) => {
          window.alert(error.message);
          this.isAuthenticated = false;
        }
      )
      .catch((error) => {
        this.isAuthenticated = false;
        window.alert(error);
      });
  }

  register(name: string, email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password)
      .then(() => {
        this.route.navigate(['/login']);
      })
      .catch((error) => {
        this.isAuthenticated = false;
        window.alert(error.message);
      });
  }

  logOut() {
    return signOut(this.auth).then(() => {
      this.isAuthenticated = false;
      this.route.navigate(['/login']);
    });
  }

  constructor(private auth: Auth, private route: Router) {}
}

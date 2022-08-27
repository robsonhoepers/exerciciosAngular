import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'angularProject';

  constructor(private router: Router){}

  public signiOut(){
    localStorage['token'] = 'false'
    this.router.navigate(['/login']);
  }

  /**
   * readLocalStorageToken
   */
  public readLocalStorageToken() {
    if (localStorage['token'] === 'true'){
      return true
    } else {
      return false
    }
    
  }
}

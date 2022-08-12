import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'angularProject';

  titulo: string = ""
  input: string = ""
  value: string = ""
 
  public cliqueSalvar(){
   this.titulo = this.input
   this.value = this.input
  }

  public cliqueLimpar(){
   this.value = ""
  }
}

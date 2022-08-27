import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { AutentificacaoComponent } from './autenticacao/autenticacao.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { HomeComponent } from './pages/home/home.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { Error404Component } from './pages/error404/error404.component';
import { AuthGuard } from './services/auth/auth.guard';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './pages/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent, 
    AutentificacaoComponent,
    UsuariosComponent,
    HomeComponent,
    ContatoComponent,
    Error404Component,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

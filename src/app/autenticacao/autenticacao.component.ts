import { Component } from "@angular/core";

import { Usuario } from "../interfaces/usuario";
import { AutenticacaoService } from "../services/autenticacao.service";

@Component({
    selector: 'app-autenticacao', 
    templateUrl: './autenticacao.component.html', 
    styleUrls: ['./autenticacao.component.css']
})
export class AutentificacaoComponent{
    msn?: string;
    contSenha: number = 0
    isBloqueado: boolean = false;
    classMsn: string[] = []
    showSpinner: boolean = false

    usuario: Usuario = {
        userId: "",
        password: "",
        tipo: ""
    }

    serverUser: Usuario = {
        userId: "",
        password: "",
        tipo: ""
    }

 


    constructor (private autenticacaoService: AutenticacaoService){
    }
    
    
    public login(){

        this.showSpinner = true

        this.autenticacaoService.getUsuario().subscribe((usuario) => (this.serverUser = usuario[0]))

        setTimeout(() => {
            this.showSpinner = false
        }, 3000);

        
        
        if(this.usuario.password == this.serverUser.password && this.usuario.userId == this.serverUser.userId && this.isBloqueado == false){
            this.msn = "Logado!"
            this.contSenha = 0
            this.classMsn = ["clLogado"]          
        
        } else if(this.usuario.password !== this.serverUser.password){
            this.msn = "Acesso negado, senha incorreta"
            this.classMsn = ["clError"]
            this.contSenha++

        } else if(this.usuario.userId !== this.serverUser.userId){
            this.msn = "Acesso negado, usuário incorreto"
            this.classMsn = ["clError"]
            this.contSenha++

        }  else if (this.contSenha >= 3) {
            this.msn = "Usuário Bloqueado!"
            this.classMsn = ["clError"]
            this.isBloqueado = true
        
    
        }
    
}
}
import { Component } from "@angular/core";

import { Usuario } from "../interfaces/usuario";

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
    
    
    public login(){

        this.showSpinner = true

        setTimeout(() => {
            this.showSpinner = false
        }, 3000);
        
        if(this.usuario.password == "Trocar@123" && this.usuario.userId == "XPTO-21" && this.isBloqueado == false){
            this.msn = "Logado!"
            this.contSenha = 0
            this.classMsn = ["clLogado"]          
        
        } else if(this.usuario.password !== "Trocar@123"){
            this.msn = "Acesso negado, senha incorreta"
            this.classMsn = ["clError"]
            this.contSenha++

        } else if(this.usuario.userId !== "XPTO-21"){
            this.msn = "Acesso negado, usuário incorreto"
            this.classMsn = ["clError"]
            this.contSenha++

        }  else if (this.contSenha >= 3) {
            this.msn = "Usuário Bloqueado!"
            this.classMsn = ["clError"]
            this.isBloqueado = true
        
        console.log(this.contSenha);
        }
    
}
}
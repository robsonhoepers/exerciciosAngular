import { Component } from "@angular/core";

@Component({
    selector: 'app-autenticacao', 
    templateUrl: './autenticacao.component.html', 
    styleUrls: ['./autenticacao.component.css']
})
export class AutentificacaoComponent{
    email: string = "";
    senha: string = "";
    msn: string = "";
    contSenha: number = 0
    msnStyle: string = "d-flex justify-content-center"
    isBloqueado: boolean = false;

    public login(){
        
        if(this.senha == "Trocar@123" && this.email == "XPTO-21" && this.isBloqueado == false){
            this.msn = "Logado!"
            this.contSenha = 0
            this.msnStyle = "d-flex justify-content-center text-success"          
        
        } else if(this.senha !== "Trocar@123"){
            this.msn = "Acesso negado, senha incorreta"
            this.msnStyle = "d-flex justify-content-center text-danger"
            this.contSenha++

        } else if(this.email !== "XPTO-21"){
            this.msn = "Acesso negado, usuário incorreto"
            this.msnStyle = "d-flex justify-content-center text-danger"
            this.contSenha++

        }  else if (this.contSenha >= 3) {
            this.msn = "Usuário Bloqueado!"
            this.msnStyle = ""
            this.isBloqueado = true
        
        console.log(this.contSenha);
    }
}
}
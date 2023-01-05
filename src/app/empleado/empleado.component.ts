import { Component } from '@angular/core';

@Component({
  selector: 'cornelio-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent {
  protected nombre= 'Alberto';

  protected apellido= 'Juarez';

  //edad = 28;

  //empresa = 'Serenisima';

//  getEdad(){
 //   return this.edad;
 // }
  llamarEmpresa(value:string){

  }
  
  habilitacionCuadro=false;
  
  usuarioRegistrado = false;
//esta funcion de registro de usuario, se uso para un checkbox en html.que nos indicara si se ha registrado un usuario en la pagina
  getRegistroUsuario(){
    this.usuarioRegistrado=true;
  };
  setRegistroUsuario(event:Event){
    // alert("Usuario Registrado")
    // this.textoDeRegistro = "El usuario se ha registrado";
    if((<HTMLInputElement>event.target).value=="si"){
      this.textoDeRegistro="El usuario se acaba de registrar";
    }else{
      this.textoDeRegistro="No hay nadie registrado"
    }
  };
  setNoRegistrado(){
    this.textoDeRegistro = "No hay nadie registrado"
  }
  textoDeRegistro="No hay nadie registrado";


}

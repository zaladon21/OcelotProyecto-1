'use strict';

let conectado = sessionStorage.getItem('conectado');
let tipoUsuario = sessionStorage.getItem('tipo_usuario');

if(conectado){
    switch(tipoUsuario){
        case 'admin':

        break;
        case 'CentroEducativo':
         
        
        break;
        case 'PadreFam':

        break;
    }
} else {

   window.location.href = 'index.html';   
    $("#iniSesion").modal()

}


function accesoRestringido(){
    swal.fire({
            type : 'warning',
            buttonsStyling: false,
            customClass: {
            title: 'title-class',
            confirmButton: 'confirm-button-class'},
            title: 'Acceso Restringido',
            text: 'Por favor inicie sesión.',
          });
}

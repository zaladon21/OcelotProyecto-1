'use strict';

//VALIDAR FORMULARIOS CON BOOTSRAP 4 
//(se pone rojo cuando esta incompleto, verde cuando esta validado)

(function() {
'use strict';
window.addEventListener('load', function() {
// Fetch all the forms we want to apply custom Bootstrap validation styles to
var forms = document.getElementsByClassName('needs-validation');
// Loop over them and prevent submission
var validation = Array.prototype.filter.call(forms, function(form) {
document.getElementById("btn_registrar").addEventListener('click', function(event) {
if (form.checkValidity() === false) {
event.preventDefault();
event.stopPropagation();
}
form.classList.add('was-validated');
}, false);
});
}, false);
})();

//-----------------------------------------------------------------------------------//


const botonRegistrar = document.querySelector('#btn_registrar');

//Estos son los inputs del centro educativo.
const inputTipo = document.querySelector('#txtTipo');
const inputNombreComercial = document.querySelector('#txtNombreComercial');
const inputCedulaJuridica = document.querySelector('#txtCedulaJuridica');
const inputTipoDeCentro = document.querySelector('#txtTipoCentroEducat');
const inputTelefonoCtro = document.querySelector('#txtTelefonoCtro');
const inputFax = document.querySelector('#txtFax');
const inputSitioWeb = document.querySelector('#txtSitioWeb');
const inputFacebook = document.querySelector('#txtFacebookOficial');
const inputEmailInstit = document.querySelector('#txtEmailInstit');
const inputPassword = document.querySelector('#txtPassword');
const inputPasswordConf = document.querySelector('#txtPasswordConf');
const inputAnoFund = document.querySelector('#txtAnoFund');
const inputHisRef = document.querySelector('#txtHistRef');
const inputProvincia = document.querySelector('#txtProvincia');
const inputCanton = document.querySelector('#txtCanton');
const inputDistrito = document.querySelector('#txtDistrito');
const inputDireccionExacta = document.querySelector('#txtDireccionExacta');
//
const inputNombre = document.querySelector('#txtNombre');
const inputNombre2 = document.querySelector('#txtNombre2');
const inputApellido = document.querySelector('#txtApellido');
const inputApellido2 = document.querySelector('#txtApellido2');
const inputTipoID = document.querySelector('#sltIdentificación');
const inputIDnumber = document.querySelector('#txtNoIdentificacion');
const inputEmail = document.querySelector('#txtEmail');
const inputDepartamento = document.querySelector('#txtDepartamento');
const inputTelefono = document.querySelector('#txtTelefonoContact');
const inputExt = document.querySelector('#txtExt');
const imgEscudo = document.querySelector('#image_preview');
const imgFoto = document.querySelector('#image_preview2');
//
//CHECKBOXES
const inputBilingue = document.querySelector('#cbBilingue');
const inputTecnico = document.querySelector('#cbTecnico');
const inputReligioso = document.querySelector('#cbReligioso');
const inputNoReligioso = document.querySelector('#cbNoReligioso');
const inputVocacional = document.querySelector('#cbVocacional');
const inputIdiomas = document.querySelector('#cbIdiomas');
const inputBecas = document.querySelector('#cbBecas');
const inputBachilleratoInt = document.querySelector('#cbBachilleratoInt');
const inputMixto = document.querySelector('#cbMixto');
const inputVarones = document.querySelector('#cbVarones');
const inputMujeres = document.querySelector('#cbMujeres');
//
const inputPrimaria = document.querySelector('#cbPrimaria');
const inputSecundaria = document.querySelector('#cbSecundaria');


let lista_centros = obtener_lista_centros();
mostrar_lista_centros();  



function obtenerDatos(){

	let bError = false;

	let tipo = inputTipo.value;
	let nombreComercial = inputNombreComercial.value;
	let cedulaJuridica = Number(inputCedulaJuridica.value);
	let tipoDeCentro = inputTipoDeCentro.selectedOptions[0].textContent;
	let telefonoCtro = Number(inputTelefonoCtro.value);
	let fax = Number(inputFax.value);  
	let sitioWeb = inputSitioWeb.value;   
	let facebook = inputFacebook.value;     
	let emailInstit = inputEmailInstit.value;      
	let password = inputPassword.value;          
	let passwordConf = inputPasswordConf.value;          
	let anoFund = Number(inputAnoFund.value);      
	let refHist = inputHisRef.value;          
	let provincia = inputProvincia.selectedOptions[0].textContent;         
	let canton = inputCanton.selectedOptions[0].textContent;          
	let distrito = inputDistrito.selectedOptions[0].textContent;      
	let direccionExacta = inputDireccionExacta.value;
	let nombre = inputNombre.value;          
	let nombre2 = inputNombre2.value;     
	let apellido = inputApellido.value;       
	let apellido2 = inputApellido2.value;       
	let tipoID = inputTipoID.selectedOptions[0].textContent;      
	let IDnumber = Number(inputIDnumber.value);        
	let email = inputEmail.value;     
	let departamento = inputDepartamento.value;    
	let telefono =  Number(inputTelefono.value); 
	let ext = Number(inputExt.value); 
	let escudo = imgEscudo.src;
	let foto = imgFoto.src;
	//
	let bilingue = inputBilingue.checked;
	let tecnico = inputTecnico.checked;
	let religioso = inputReligioso.checked;
	let noReligioso = inputNoReligioso.checked;
	let vocacional = inputVocacional.checked;
	let idiomas = inputIdiomas.checked;
	let becas = inputBecas.checked;
	let bachilleratoInt = inputBachilleratoInt.checked;
	let mixto = inputMixto.checked;
	let varones = inputVarones.checked;
	let mujeres = inputMujeres.checked;
	//
	let primaria = inputPrimaria.checked;
	let secundaria = inputSecundaria.checked;


	//expresiones regulares
	let regExpNumeros = /^[0-9]*$/;  //verificar que los datos numericos solo contengan numeros del 0 al 9
	//let regExpTelefono = /^\d{4}-\d{4}$/; //verificar nums de telefono
	//let regExpUrl = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/; //verificar url
	let regExpEmail = /^\S+@\S+$/; //verificar email
	let regExpPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; //contrasena 8 digitos minimo, 1 mayuscula, 1 minuscula, 1 caracter especial, 1 numero.
	//let regExpYear = /(?:(?:18|20)[0-9]{2})/; //verificar anio entre 1800 y 2099


	if(inputNombreComercial.value == ''){
		bError = true;
	};
	
	if(inputCedulaJuridica.value == '' || regExpNumeros.test(inputCedulaJuridica.value) == false){
		bError = true;
	};

	if(inputTelefonoCtro.value == '' || regExpNumeros.test(inputTelefonoCtro.value) == false){
		bError = true;
	};
	
	if(inputEmailInstit.value == '' || regExpEmail.test(inputEmailInstit.value) == false){
		bError = true;
	};

	if( inputPassword.value == '' || regExpPassword.test(inputPassword.value) == false){
		bError = true;
	}
	//validar confirmacion de contrasenia
	if(inputPasswordConf.value != inputPassword.value){
		bError = true;
	};
	if(inputAnoFund.value == '' || regExpNumeros.test(inputAnoFund.value) == false){
		bError = true;
	};

	//aqui van los de provincia, canton, distrito que son de seleccion.

	if(inputDireccionExacta.value == ''){
		bError = true;
	};

	//datos encargado
	if(inputNombre.value == ''){
		bError = true;
	};

	if(inputApellido.value == ''){
		bError = true;
	};

	/*if(inputTipoID.value == ''){
		bError = true;
	};*/

	if(inputIDnumber.value == '' || regExpNumeros.test(inputIDnumber.value) == false){
		bError = true;
	};

	if(inputTelefono.value == '' || regExpNumeros.test(inputTelefono.value) == false){
		bError = true;
	};


	if(bError == true){
        swal.fire({
        	type : 'info',
            buttonsStyling: false,
			customClass: {
			title: 'title-class',
			confirmButton: 'confirm-button-class'},
            title: 'Registro incorrecto',
            text: 'No se pudo registrar el centro educativo, por favor complete los datos pendientes.',
            type: 'warning',
          });
	
	}else{
    registrar_centroEducativo(tipo, nombreComercial, cedulaJuridica, tipoDeCentro, telefonoCtro, fax, sitioWeb, facebook, emailInstit,
				    		  password, passwordConf, anoFund, refHist, provincia, canton, distrito, direccionExacta, nombre, nombre2, 
				    		  apellido, apellido2, tipoID, IDnumber, email, departamento, telefono, ext, escudo, foto,
				    		  bilingue, tecnico, religioso, noReligioso, vocacional, idiomas, becas, bachilleratoInt, mixto, varones,
				    		  mujeres, primaria, secundaria);

    lista_centros = obtener_lista_centros();

	}
    mostrar_lista_centros(); 
	 
 };


botonRegistrar.addEventListener('click', obtenerDatos);



function mostrar_lista_centros(){
	let tbody = document.querySelector('#tblCentrosEducativos tbody');
	tbody.innerHTML = ''; 

	for(let i = 0; i < lista_centros.length; i++){
		let fila = tbody.insertRow();

	 	let celdaTipo = fila.insertCell();
		let celdaNombreComercial = fila.insertCell();
		let celdaCedulaJuridica = fila.insertCell();
		let celdaTipodeCentro = fila.insertCell();
		let celdaTelefonoCtro = fila.insertCell();
		let celdaFax = fila.insertCell();
		let celdaSitioWeb = fila.insertCell();
		let celdaFacebook = fila.insertCell();
		let celdaEmailInstit = fila.insertCell();
		let celdaPassword = fila.insertCell();
		let celdaPasswordConf = fila.insertCell();
		let celdaAnoFund = fila.insertCell();
		let celdaRefHist = fila.insertCell();
		let celdaProvincia = fila.insertCell();
		let celdaCanton= fila.insertCell();
		let celdaDistrito= fila.insertCell();
		let celdaDireccionExacta= fila.insertCell();
		//
		let celdaNombre = fila.insertCell();
		let celdaNombre2 = fila.insertCell();
		let celdaApellido = fila.insertCell();
		let celdaApellido2 = fila.insertCell();
		let celdatipoID = fila.insertCell();
		let celdaIDnumber = fila.insertCell();
		let celdaEmail = fila.insertCell();
		let celdaDepartamento = fila.insertCell();
		let celdaTelefono = fila.insertCell();
		let celdaExt = fila.insertCell();
		let celdaEscudo = fila.insertCell();
		let celdaFoto = fila.insertCell();
		//
		let celdaBilingue = fila.insertCell();
		let celdaTecnico = fila.insertCell();
		let celdaReligioso = fila.insertCell();
		let celdaNoReligioso = fila.insertCell();
		let celdaVocacional = fila.insertCell();
		let celdaIdiomas = fila.insertCell();
		let celdaBecas = fila.insertCell();
		let celdaBachilleratoInt = fila.insertCell();
		let celdaMixto = fila.insertCell();
		let celdaVarones= fila.insertCell();
		let celdaMujeres = fila.insertCell();
		let celdaPrimaria = fila.insertCell();
		let celdaSecundaria = fila.insertCell();


		celdaTipo.innerHTML = lista_centros[i]['tipo'];
		celdaNombreComercial.innerHTML = lista_centros[i]['nombreComercial'];
		celdaCedulaJuridica.innerHTML = lista_centros[i]['cedulaJuridica'];
		celdaTipodeCentro.innerHTML = lista_centros[i]['tipoDeCentro'];
		celdaTelefonoCtro.innerHTML = lista_centros[i]['telefonoCtro'];
		celdaFax.innerHTML = lista_centros[i]['fax'];
		celdaSitioWeb.innerHTML = lista_centros[i]['sitioWeb'];
		celdaFacebook.innerHTML = lista_centros[i]['facebook'];
		celdaEmailInstit.innerHTML = lista_centros[i]['emailInstit'];
		celdaPassword.innerHTML = lista_centros[i]['password'];
		celdaPasswordConf.innerHTML = lista_centros[i]['passwordConf'];
		celdaAnoFund.innerHTML = lista_centros[i]['anoFund'];
		celdaRefHist.innerHTML = lista_centros[i]['refHist'];
		celdaProvincia.innerHTML = lista_centros[i]['provincia'];
		celdaCanton.innerHTML = lista_centros[i]['canton'];
		celdaDistrito.innerHTML = lista_centros[i]['distrito'];
		celdaDireccionExacta.innerHTML = lista_centros[i]['direccionExacta'];
		celdaNombre.innerHTML = lista_centros[i]['nombre'];
		celdaNombre2.innerHTML = lista_centros[i]['nombre2'];
		celdaApellido.innerHTML = lista_centros[i]['apellido'];
		celdaApellido2.innerHTML = lista_centros[i]['apellido2'];
		celdatipoID.innerHTML = lista_centros[i]['tipoID'];
		celdaIDnumber.innerHTML = lista_centros[i]['IDnumber'];
		celdaEmail.innerHTML = lista_centros[i]['email'];
		celdaDepartamento.innerHTML = lista_centros[i]['departamento'];
		celdaTelefono.innerHTML = lista_centros[i]['telefono'];
		celdaExt.innerHTML = lista_centros[i]['ext'];

		let imagen = document.createElement('img');
            imagen.classList.add('imagenTabla'); //para definir el tamano de la imagen

            if(lista_centros[i]['escudo']){
                imagen.src = lista_centros[i]['escudo'];
            }else{
                imagen.src = 'imgs/escudo.png';
            }

            celdaEscudo.appendChild(imagen);

        let foto = document.createElement('img');
            foto.classList.add('imagenTabla'); //para definir el tamano de la imagen

            if(lista_centros[i]['foto']){
                foto.src = lista_centros[i]['foto'];
            }else{
                foto.src = 'imgs/user.png';
            }

            celdaFoto.appendChild(foto);


        //checkboxes
		celdaBilingue.innerHTML = lista_centros[i]['bilingue'];
		celdaTecnico.innerHTML = lista_centros[i]['tecnico'];
		celdaReligioso.innerHTML = lista_centros[i]['religioso'];
		celdaNoReligioso.innerHTML = lista_centros[i]['noReligioso'];
		celdaVocacional.innerHTML = lista_centros[i]['vocacional'];
		celdaIdiomas.innerHTML = lista_centros[i]['idiomas'];
		celdaBecas.innerHTML = lista_centros[i]['becas'];
		celdaBachilleratoInt.innerHTML = lista_centros[i]['bachilleratoInt'];
		celdaMixto.innerHTML = lista_centros[i]['mixto'];
		celdaVarones.innerHTML = lista_centros[i]['varones'];
		celdaMujeres.innerHTML = lista_centros[i]['mujeres'];
		celdaPrimaria.innerHTML = lista_centros[i]['primaria'];
		celdaSecundaria.innerHTML = lista_centros[i]['secundaria'];
  }

	};

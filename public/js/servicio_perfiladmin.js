'use strict';


//ponerlas en minuscula, meterlos como parametros 


function registro_rankingMEP(pnombrecomercial, pescudo, prankingmep, pcalifnum, pcalifanno){
    let respuesta = '';
    let request = $.ajax({
        url : 'http://localhost:4000/api/registrar_rankingMep',
        method : "POST",
        data : {
            nombrecomercial : pnombrecomercial, 
            escudo : pescudo, 
            rankingmep : prankingmep,
            califnum : pcalifnum,
            califanno : pcalifanno
        },

        dataType : "json",
        contentType : 'application/x-www-form-urlencoded; charset=UTF-8' 
    });


    request.done(function(res){
       swal.fire({
            type : 'info',
            buttonsStyling: false,
			customClass: {
			title: 'title-class',
			confirmButton: 'confirm-button-class'},
            title : '¡Atención!',
            text : res.msg
        });

    });

    request.fail(function(res){
        swal.fire({
            type : 'error',
            buttonsStyling: false,
			customClass: {
			title: 'title-class',
			confirmButton: 'confirm-button-class'},
            title : 'Proceso no realizado',
            text : res.msg
        });

    });
};

function obtener_rankingMEP(){

    let lista_rankingMep = [];
    let request = $.ajax({
        url: 'http://localhost:4000/api/listar_rankingMep',
        type: 'GET',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async:false,
        data:{
        }
      });
    
      request.done(function(res){
        lista_rankingMep = res;
      });
    
      request.fail(function(){
       
      });

    return lista_rankingMep;
};


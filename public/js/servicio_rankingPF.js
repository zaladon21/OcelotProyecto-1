'use strict';



function registrar_rankingPF( pidpadres, pidcentro, pcalifnum, pstars, ptipodecentro, pprimaria, psecundaria){
    let request= $.ajax({
        url: 'http://localhost:4000/api/registrar_ranking',
        method: "POST",
        data: {
            idpadres: pidpadres,
            idcentro: pidcentro,
            califnum: pcalifnum,
            stars: pstars,
            tipodecentro: ptipodecentro,
            primaria: pprimaria,
            secundaria: psecundaria

        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
    });

    request.done(function(res){
        swal.fire({
            type: 'info',
            text: res.msg
        });
    });

    request.fail(function(res){
        swal.fire({
            type: 'error',
            title: 'Proceso inconcluso',
            text: res.msg
        });
    });
};


function obtener_rankingPF(){
    let listaRankingPF = [];
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/listar_ranking',
        type: 'get',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async:false,
        data:{
        }
      });
    
      peticion.done(function(ranking){
        listaRankingPF = ranking;
      });
    
      peticion.fail(function(){
       
      });
      
    return listaRankingPF;
};
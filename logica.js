//LÓGICA PARA EL FORMULARIO PRODUCTORA
function cargarDatosProductora(){
    var cuerpoTabla = " <thead> "+  "<tr> " + "<th> Id Productora </th> "+ "<th> Nombre Productora </th> "+"<th> Pa&iacute;s de Origen </th> "+" </thead> <tbody>";
    
    $.ajax({
        type: "GET",
        url: "https://desfrlopez.me/mvelazco/api/productora",
        success: function(data){
            for(var i = 0; i < data.length; i++){
                cuerpoTabla+= " <tr> " 
                + "<td> " + data[i].id_productora + "</td>" 
                + " <td> " + data[i].nombre_productora + "</td>" +
                 "<td> " + data[i].pais_origen_productora + "</td>"
                  + "</tr>"
            }
            cuerpoTabla += " </tbody>";
            $('#reporteProductora').html(cuerpoTabla);
        }, 

        datatype: "json"

    })
    
}

function enviarDatosProductora(){

    jQuery.ajaxSetup({async:false});

   
    var datosForm = {
        nombre_productora : $("#nombre_productora").val(),
        pais_origen_productora : $("#pais_origen_productora").val()
    };


    var mensaje = "Insercion Exitosa";
    $.ajax({
        type: "POST",
        url: "https://desfrlopez.me/mvelazco/api/productora",
        data: JSON.stringify(datosForm),
        success: function(data){
            console.log(data);
            for (var i = 0; i < data.length ; i++ ){
                mensaje += " Id Registro "+ data[i].insertId;                
            }
            alert(mensaje);
        },
        dataType: "json", 
        contentType: "application/json; charset=utf-8",
        async:false
      });
      cargarDatosProductora();
}

function actualizarDatosProductora(){

    jQuery.ajaxSetup({async:false});

    var datosForm = {
        nombre_productora : $("#nombre_productora").val(),
        pais_origen_productora : $("#pais_origen_productora").val()
    };

    let idProductora = $("#id_productora").val();

    var mensaje = "Actualizacon Exitosa";
    $.ajax({
        type: "PUT",
        url: "https://desfrlopez.me/mvelazco/api/productora/"+idProductora,
        data: JSON.stringify(datosForm),
        success: function(data){
            console.log(data);
            for (var i = 0; i < data.length ; i++ ){
                mensaje += " Id Registro "+ data[i].insertId;         
            }
            alert(mensaje);
            
        },
        dataType: "json", 
        contentType: "application/json; charset=utf-8"
      });

     cargarDatosProductora();

}

function eliminarDatosProductora(){

    jQuery.ajaxSetup({async:false});

    let idProductora = $("#id_productora").val();

    var mensaje = "Datos Eliminados Exitosamente";
    $.ajax({
        type: "DELETE",
        url: "https://desfrlopez.me/mvelazco/api/productora/"+idProductora,
        success: function(data){
            console.log(data);
            for (var i = 0; i < data.length ; i++ ){
                mensaje += " Id Registro "+ data[i].insertId;                
            }
            alert(mensaje);
        },
        dataType: "json", 
        contentType: "application/json; charset=utf-8"
      });
cargarDatosProductora();
 }

 //LÓGICA PARA EL FORMULARIO PELÍCULA

 function cargarDatosPelicula(){
    var cuerpoTabla = " <thead> "+  "<tr> " + "<th> Id Pelicula </th> "+ "<th> Nombre de la Pel&iacute;cula </th> "
    +"<th>G&eacute;nero</th> " +"<th> Duraci&oacute;n</th> " +"<th> Clasificaci&oacute;n</th> " +"<th> Presupuesto</th> " +"<th> Taquilla</th> "  +"<th>Productora</th> " +" </thead> <tbody>";
    
    $.ajax({
        type: "GET",
        url: "https://desfrlopez.me/mvelazco/api/pelicula",
        success: function(data){
            for(var i = 0; i < data.length; i++){
                cuerpoTabla+= " <tr> " 
                + "<td> " + data[i].id_pelicula+ "</td>" 
                + " <td> " + data[i].nombre_pelicula + "</td>"
                 + "<td> " + data[i].genero_pelicula + "</td>"
                 + "<td> " + data[i].duracion_pelicula + "</td>"
                 + "<td> " + data[i].clasificacion_pelicula + "</td>"
                 + "<td> " + data[i].presupuesto_pelicula + "</td>"
                 + "<td> " + data[i].ganancias_taquilla + "</td>"
                 + "<td> " + data[i].id_productora + "</td>"
                  + "</tr>"
            }
            cuerpoTabla += " </tbody>";
            $('#reportePelicula').html(cuerpoTabla);
    
        }, 

        datatype: "json"

    })
    
}

function enviarDatosPelicula(){

    jQuery.ajaxSetup({async:false});

   
    var datosForm = {
        nombre_pelicula: $("#nombre_pelicula").val(),
        genero_pelicula : $("#genero_pelicula").val(),
        duracion_pelicula: $("#duracion_pelicula").val(),
        clasificacion_pelicula: $("#clas_pelicula").val(),
        presupuesto_pelicula: $("#presupuesto_pelicula").val(),
        ganancias_taquilla: $("#taquilla_pelicula").val(),
        id_productora: $("#id_productora").val()
        
    };


    var mensaje = "Insercion Exitosa";
    $.ajax({
        type: "POST",
        url: "https://desfrlopez.me/mvelazco/api/pelicula",
        data: JSON.stringify(datosForm),
        success: function(data){
            console.log(data);
            for (var i = 0; i < data.length ; i++ ){
                mensaje += " Id Registro "+ data[i].insertId;                
            }
            alert(mensaje);
        },
        dataType: "json", 
        contentType: "application/json; charset=utf-8",
        async:false
      });
      cargarDatosPelicula();
}

function actualizarDatosPelicula(){

    jQuery.ajaxSetup({async:false});

    var datosForm = {
        nombre_pelicula: $("#nombre_pelicula").val(),
        genero_pelicula : $("#genero_pelicula").val(),
        duracion_pelicula: $("#duracion_pelicula").val(),
        clasificacion_pelicula: $("#clas_pelicula").val(),
        presupuesto_pelicula: $("#presupuesto_pelicula").val(),
        ganancias_taquilla: $("#taquilla_pelicula").val(),
        id_productora: $("#id_productora").val()
    };

    let idPelicula= $("#id_pelicula").val();

    var mensaje = "Actualizacon Exitosa";
    $.ajax({
        type: "PUT",
        url: "https://desfrlopez.me/mvelazco/api/pelicula/"+idPelicula,
        data: JSON.stringify(datosForm),
        success: function(data){
            console.log(data);
            for (var i = 0; i < data.length ; i++ ){
                mensaje += " Id Registro "+ data[i].insertId;         
            }
            alert(mensaje);
            
        },
        dataType: "json", 
        contentType: "application/json; charset=utf-8"
      });

     cargarDatosProductora();

}

function eliminarDatosPelicula(){

    jQuery.ajaxSetup({async:false});

    let idPelicula = $("#id_pelicula").val();

    var mensaje = "Datos Eliminados Exitosamente";
    $.ajax({
        type: "DELETE",
        url: "https://desfrlopez.me/mvelazco/api/pelicula/"+idPelicula,
        success: function(data){
            console.log(data);
            for (var i = 0; i < data.length ; i++ ){
                mensaje += " Id Registro "+ data[i].insertId;                
            }
            alert(mensaje);
        },
        dataType: "json", 
        contentType: "application/json; charset=utf-8"
      });
cargarDatosPelicula();
 }

 //LÓGICA PARA EL FORMULARIO ACTOR
 function cargarDatosActor(){
    var cuerpoTabla = " <thead> "+  "<tr> " + "<th> Id Actor </th> "+ "<th> Nombre Actor </th> "+"<th> Apellido Actor </th> "+"<th> Fecha de Nacimiento </th> "+" </thead> <tbody>";
    
    $.ajax({
        type: "GET",
        url: "https://desfrlopez.me/mvelazco/api/actor",
        success: function(data){
            for(var i = 0; i < data.length; i++){
                cuerpoTabla+= " <tr> " 
                + "<td> " + data[i].id_actor + "</td>" 
                + " <td> " + data[i].nombre_actor + "</td>" +
                 "<td> " + data[i].apellido_actor + "</td>"+
                 "<td> " + data[i].fecha_nacimiento_actor + "</td>"
                  + "</tr>"
            }
            cuerpoTabla += " </tbody>";
            $('#reporteActor').html(cuerpoTabla);
        }, 

        datatype: "json"

    })
    
}

function enviarDatosActor(){

    jQuery.ajaxSetup({async:false});

   
    var datosForm = {
        nombre_actor: $("#nombre_actor").val(),
        apellido_actor : $("#apellido_actor").val(),
        fecha_nacimiento_actor : $("#nacimiento_actor").val(),
        
    };


    var mensaje = "Insercion Exitosa";
    $.ajax({
        type: "POST",
        url: "https://desfrlopez.me/mvelazco/api/actor",
        data: JSON.stringify(datosForm),
        success: function(data){
            console.log(data);
            for (var i = 0; i < data.length ; i++ ){
                mensaje += " Id Registro "+ data[i].insertId;                
            }
            alert(mensaje);
        },
        dataType: "json", 
        contentType: "application/json; charset=utf-8",
        async:false
      });
      cargarDatosActor();
}

function actualizarDatosActor(){

    jQuery.ajaxSetup({async:false});

    var datosForm = {
        nombre_actor: $("#nombre_actor").val(),
        apellido_actor : $("#apellido_actor").val(),
        fecha_nacimiento_actor : $("#nacimiento_actor").val()
    };

    let idActor= $("#id_actor").val();

    var mensaje = "Actualizacon Exitosa";
    $.ajax({
        type: "PUT",
        url: "https://desfrlopez.me/mvelazco/api/actor/"+idActor,
        data: JSON.stringify(datosForm),
        success: function(data){
            console.log(data);
            for (var i = 0; i < data.length ; i++ ){
                mensaje += " Id Registro "+ data[i].insertId;         
            }
            alert(mensaje);
            
        },
        dataType: "json", 
        contentType: "application/json; charset=utf-8"
      });

     cargarDatosActor();

}

function eliminarDatosActor(){

    jQuery.ajaxSetup({async:false});

    let idActor = $("#id_actor").val();

    var mensaje = "Datos Eliminados Exitosamente";
    $.ajax({
        type: "DELETE",
        url: "https://desfrlopez.me/mvelazco/api/actor/"+idActor,
        success: function(data){
            console.log(data);
            for (var i = 0; i < data.length ; i++ ){
                mensaje += " Id Registro "+ data[i].insertId;                
            }
            alert(mensaje);
        },
        dataType: "json", 
        contentType: "application/json; charset=utf-8"
      });
cargarDatosActor();
 }

 //LÓGICA PARA EL FORMULARIO DIRECTOR
 function cargarDatosDirector(){
    var cuerpoTabla = " <thead> "+  "<tr> " + "<th> Id Director </th> "+ "<th> Nombre Director </th> "+"<th> Apellido Director </th> "+"<th> Fecha de Nacimiento </th> "+" </thead> <tbody>";
    
    $.ajax({
        type: "GET",
        url: "https://desfrlopez.me/mvelazco/api/director",
        success: function(data){
            for(var i = 0; i < data.length; i++){
                cuerpoTabla+= " <tr> " 
                + "<td> " + data[i].id_director + "</td>" 
                + " <td> " + data[i].nombre_director + "</td>" +
                 "<td> " + data[i].apellido_director + "</td>"+
                 "<td> " + data[i].fecha_nacimiento + "</td>"
                  + "</tr>"
            }
            cuerpoTabla += " </tbody>";
            $('#reporteDirector').html(cuerpoTabla);
        }, 

        datatype: "json"

    })
    
}

function enviarDatosDirector(){

    jQuery.ajaxSetup({async:false});

   
    var datosForm = {
        nombre_director: $("#nombre_director").val(),
        apellido_director : $("#apellido_director").val(),
        fecha_nacimiento : $("#nacimiento_director").val(),
        
    };


    var mensaje = "Insercion Exitosa";
    $.ajax({
        type: "POST",
        url: "https://desfrlopez.me/mvelazco/api/director",
        data: JSON.stringify(datosForm),
        success: function(data){
            console.log(data);
            for (var i = 0; i < data.length ; i++ ){
                mensaje += " Id Registro "+ data[i].insertId;                
            }
            alert(mensaje);
        },
        dataType: "json", 
        contentType: "application/json; charset=utf-8",
        async:false
      });
      cargarDatosDirector();
}

function actualizarDatosDirector(){

    jQuery.ajaxSetup({async:false});

    var datosForm = {
        nombre_director: $("#nombre_director").val(),
        apellido_director : $("#apellido_director").val(),
        fecha_nacimiento: $("#nacimiento_director").val()
    };

    let idDirector= $("#id_director").val();

    var mensaje = "Actualizacon Exitosa";
    $.ajax({
        type: "PUT",
        url: "https://desfrlopez.me/mvelazco/api/director/"+idDirector,
        data: JSON.stringify(datosForm),
        success: function(data){
            console.log(data);
            for (var i = 0; i < data.length ; i++ ){
                mensaje += " Id Registro "+ data[i].insertId;         
            }
            alert(mensaje);
            
        },
        dataType: "json", 
        contentType: "application/json; charset=utf-8"
      });

      cargarDatosDirector();

}

function eliminarDatosDirector(){

    jQuery.ajaxSetup({async:false});

    let idDirector = $("#id_director").val();

    var mensaje = "Datos Eliminados Exitosamente";
    $.ajax({
        type: "DELETE",
        url: "https://desfrlopez.me/mvelazco/api/director/"+idDirector,
        success: function(data){
            console.log(data);
            for (var i = 0; i < data.length ; i++ ){
                mensaje += " Id Registro "+ data[i].insertId;                
            }
            alert(mensaje);
        },
        dataType: "json", 
        contentType: "application/json; charset=utf-8"
      });
cargarDatosActor();
 }

 //LÓGICA PARA EL FORMULARIO RECONOCIMIENTO
function cargarDatosReconocimiento(){
    var cuerpoTabla = " <thead> "+  "<tr> " + "<th> Id Reconocimiento </th> "+ "<th> Nombre Reconocimiento </th> " + "<th> Instituci&oacute;n </th> "+"<th> Pa&iacute;s de Origen </th> "+" </thead> <tbody>";
    
    $.ajax({
        type: "GET",
        url: "https://desfrlopez.me/mvelazco/api/reconocimiento",
        success: function(data){
            for(var i = 0; i < data.length; i++){
                cuerpoTabla+= " <tr> " 
                + "<td> " + data[i].id_reconocimiento + "</td>" 
                + " <td> " + data[i].nombre_reconocimiento + "</td>" + 
                "<td> " + data[i].institucion + "</td>" +
                 "<td> " + data[i].pais_origen_reconocimiento + "</td>"
                  + "</tr>"

            }
            cuerpoTabla += " </tbody>";
            console.log(cuerpoTabla)
            $('#reporteReconocimiento').html(cuerpoTabla);
        }, 

        datatype: "json"

    })
    
}

function enviarDatosReconocimiento(){

    jQuery.ajaxSetup({async:false});

   
    var datosForm = {
        nombre_reconocimiento : $("#nombre_reconocmiento").val(),
        institucion: $("#institucion").val(),
        pais_origen_reconocimiento : $("#pais_origen_reconocimiento").val()
    };


    var mensaje = "Insercion Exitosa";
    $.ajax({
        type: "POST",
        url: "https://desfrlopez.me/mvelazco/api/reconocimiento",
        data: JSON.stringify(datosForm),
        success: function(data){
            console.log(data);
            for (var i = 0; i < data.length ; i++ ){
                mensaje += " Id Registro "+ data[i].insertId;                
            }
            alert(mensaje);
        },
        dataType: "json", 
        contentType: "application/json; charset=utf-8",
        async:false
      });
      cargarDatosReconocimiento();
}

function actualizarDatosReconocimiento(){

    jQuery.ajaxSetup({async:false});

    var datosForm = {
        nombre_reconocimiento : $("#nombre_reconocimiento").val(),
        institucion: $("#institucion").val(),
        pais_origen_reconocimiento : $("#pais_origen_reconocimiento").val()
    };

    let idReconocimiento= $("#id_reconocimiento").val();

    var mensaje = "Actualizacon Exitosa";
    $.ajax({
        type: "PUT",
        url: "https://desfrlopez.me/mvelazco/api/reconocimiento/"+idReconocimiento,
        data: JSON.stringify(datosForm),
        success: function(data){
            console.log(data);
            for (var i = 0; i < data.length ; i++ ){
                mensaje += " Id Registro "+ data[i].insertId;         
            }
            alert(mensaje);
            
        },
        dataType: "json", 
        contentType: "application/json; charset=utf-8"
      });

      cargarDatosReconocimiento();

}

function eliminarDatosReconocimiento(){

    jQuery.ajaxSetup({async:false});

    let idReconocimiento = $("#id_reconocimiento").val();

    var mensaje = "Datos Eliminados Exitosamente";
    $.ajax({
        type: "DELETE",
        url: "https://desfrlopez.me/mvelazco/api/reconocimiento/"+idReconocimiento,
        success: function(data){
            console.log(data);
            for (var i = 0; i < data.length ; i++ ){
                mensaje += " Id Registro "+ data[i].insertId;                
            }
            alert(mensaje);
        },
        dataType: "json", 
        contentType: "application/json; charset=utf-8"
      });
      cargarDatosReconocimiento();
 }

  //LÓGICA PARA EL FORMULARIO ACTOR PELICULA
function cargarDatosActorPeli(){
    var cuerpoTabla = " <thead> "+  "<tr> " + "<th> Id Actor Película </th> "+ "<th> Id Actor </th> " + "<th> Id Pelicula</th> ";
    
    $.ajax({
        type: "GET",
        url: "https://desfrlopez.me/mvelazco/api/actorpelicula",
        success: function(data){
            for(var i = 0; i < data.length; i++){
                cuerpoTabla+= " <tr> " 
                + "<td> " + data[i].id_pelicula + "</td>" 
                + " <td> " + data[i].id_actor + "</td>"
                  + "</tr>"

            }
            cuerpoTabla += " </tbody>";
            console.log(cuerpoTabla)
            $('#reportePeliActor').html(cuerpoTabla);
        }, 

        datatype: "json"

    })
    
}

function enviarDatosActorPelicula(){

    jQuery.ajaxSetup({async:false});

   
    var datosForm = {
        id_pelicula : $("#id_pelicula_actor").val(),
        id_actor: $("#fk_id_actor").val()
    };


    var mensaje = "Insercion Exitosa";
    $.ajax({
        type: "POST",
        url: "https://desfrlopez.me/mvelazco/api/actorpelicula",
        data: JSON.stringify(datosForm),
        success: function(data){
            console.log(data);
            for (var i = 0; i < data.length ; i++ ){
                mensaje += " Id Registro "+ data[i].insertId;                
            }
            alert(mensaje);
        },
        dataType: "json", 
        contentType: "application/json; charset=utf-8",
        async:false
      });
      cargarDatosActorPeli();
}

function actualizarActorPelicula(){

    jQuery.ajaxSetup({async:false});

    var datosForm = {
        id_pelicula : $("#id_pelicula_actor").val(),
        id_actor: $("#fk_id_actor").val()
    };

    let idPelActor= $("#id_peli_actor").val();

    var mensaje = "Actualizacon Exitosa";
    $.ajax({
        type: "PUT",
        url: "https://desfrlopez.me/mvelazco/api/actorpelicula/"+idPelActor,
        data: JSON.stringify(datosForm),
        success: function(data){
            console.log(data);
            for (var i = 0; i < data.length ; i++ ){
                mensaje += " Id Registro "+ data[i].insertId;         
            }
            alert(mensaje);
            
        },
        dataType: "json", 
        contentType: "application/json; charset=utf-8"
      });

      cargarDatosActorPeli();

}

function eliminarDatosActorPeli(){

    jQuery.ajaxSetup({async:false});

    let idPelActor= $("#id_peli_actor").val();

    var mensaje = "Datos Eliminados Exitosamente";
    $.ajax({
        type: "DELETE",
        url: "https://desfrlopez.me/mvelazco/api/actorpelicula/"+idPelActor,
        success: function(data){
            console.log(data);
            for (var i = 0; i < data.length ; i++ ){
                mensaje += " Id Registro "+ data[i].insertId;                
            }
            alert(mensaje);
        },
        dataType: "json", 
        contentType: "application/json; charset=utf-8"
      });
      cargarDatosActorPeli();
 }

   //LÓGICA PARA EL FORMULARIO DIRECTOR PELICULA
function cargarDatosDirectorPeli(){
    var cuerpoTabla = " <thead> "+  "<tr> " + "<th> Id Director Película </th> "+ "<th> Id Director </th> " + "<th> Id Pelicula</th> ";
    
    $.ajax({
        type: "GET",
        url: "https://desfrlopez.me/mvelazco/api/directorpelicula",
        success: function(data){
            for(var i = 0; i < data.length; i++){
                cuerpoTabla+= " <tr> " 
                + "<td> " + data[i].id_pelicula + "</td>" 
                + " <td> " + data[i].id_director + "</td>"
                  + "</tr>"

            }
            cuerpoTabla += " </tbody>";
            console.log(cuerpoTabla)
            $('#reportePeliDirector').html(cuerpoTabla);
        }, 

        datatype: "json"

    })
    
}

function enviarDatosDirectorPelicula(){

    jQuery.ajaxSetup({async:false});

   
    var datosForm = {
        id_pelicula : $("#fk_id_pelicula_director").val(),
        id_director: $("#fk_id_director").val()
    };


    var mensaje = "Insercion Exitosa";
    $.ajax({
        type: "POST",
        url: "https://desfrlopez.me/mvelazco/api/directorpelicula",
        data: JSON.stringify(datosForm),
        success: function(data){
            console.log(data);
            for (var i = 0; i < data.length ; i++ ){
                mensaje += " Id Registro "+ data[i].insertId;                
            }
            alert(mensaje);
        },
        dataType: "json", 
        contentType: "application/json; charset=utf-8",
        async:false
      });
      cargarDatosDirectorPeli();
}

function actualizarDirectorPelicula(){

    jQuery.ajaxSetup({async:false});

    var datosForm = {
        id_pelicula : $("#fk_id_pelicula_director").val(),
        id_actor: $("#fk_id_director").val()
    };

    let idPelDirector= $("#id_peli_director").val();

    var mensaje = "Actualizacon Exitosa";
    $.ajax({
        type: "PUT",
        url: "https://desfrlopez.me/mvelazco/api/directorpelicula/"+idPelDirector,
        data: JSON.stringify(datosForm),
        success: function(data){
            console.log(data);
            for (var i = 0; i < data.length ; i++ ){
                mensaje += " Id Registro "+ data[i].insertId;         
            }
            alert(mensaje);
            
        },
        dataType: "json", 
        contentType: "application/json; charset=utf-8"
      });

      cargarDatosDirectorPeli();

}

function eliminarDatosActorPeli(){

    jQuery.ajaxSetup({async:false});

    let idPelDirector= $("#id_peli_director").val();

    var mensaje = "Datos Eliminados Exitosamente";
    $.ajax({
        type: "DELETE",
        url: "https://desfrlopez.me/mvelazco/api/directorpelicula/"+idPelDirector,
        success: function(data){
            console.log(data);
            for (var i = 0; i < data.length ; i++ ){
                mensaje += " Id Registro "+ data[i].insertId;                
            }
            alert(mensaje);
        },
        dataType: "json", 
        contentType: "application/json; charset=utf-8"
      });
      cargarDatosDirectorPeli();
 }

    //LÓGICA PARA EL FORMULARIO RECONOCIMIENTO PELICULA
function cargarDatosReconocimientoPeli(){
    var cuerpoTabla = " <thead> "+  "<tr> " + "<th> Id Reconocimiento Película </th> "+ "<th> Id Reconocimiento </th> " + "<th> Id Pelicula</th> ";
    
    $.ajax({
        type: "GET",
        url: "https://desfrlopez.me/mvelazco/api/reconocimientopelicula",
        success: function(data){
            for(var i = 0; i < data.length; i++){
                cuerpoTabla+= " <tr> " 
                + "<td> " + data[i].id_pelicula + "</td>" 
                + " <td> " + data[i].id_reconocimiento + "</td>"
                  + "</tr>"

            }
            cuerpoTabla += " </tbody>";
            console.log(cuerpoTabla)
            $('#reporteReconoPeli').html(cuerpoTabla);
        }, 

        datatype: "json"

    })
    
}

function enviarDatosDirectorPelicula(){

    jQuery.ajaxSetup({async:false});

   
    var datosForm = {
        id_pelicula : $("#fk_id_pelicula_reconocimiento").val(),
        id_reconocimiento: $("#fk_id_reconocimiento").val()
    };


    var mensaje = "Insercion Exitosa";
    $.ajax({
        type: "POST",
        url: "https://desfrlopez.me/mvelazco/api/reconocimientopelicula",
        data: JSON.stringify(datosForm),
        success: function(data){
            console.log(data);
            for (var i = 0; i < data.length ; i++ ){
                mensaje += " Id Registro "+ data[i].insertId;                
            }
            alert(mensaje);
        },
        dataType: "json", 
        contentType: "application/json; charset=utf-8",
        async:false
      });
      cargarDatosReconocimientoPeli();
}

function actualizarDirectorPelicula(){

    jQuery.ajaxSetup({async:false});

    var datosForm = {
        id_pelicula : $("#fk_id_pelicula_reconocimiento").val(),
        id_actor: $("#fk_id_reconocimiento").val()
    };

    let idPelReconocimiento= $("#id_peli_reconocimiento").val();

    var mensaje = "Actualizacon Exitosa";
    $.ajax({
        type: "PUT",
        url: "https://desfrlopez.me/mvelazco/api/reconocimientopelicula/"+idPelReconocimiento,
        data: JSON.stringify(datosForm),
        success: function(data){
            console.log(data);
            for (var i = 0; i < data.length ; i++ ){
                mensaje += " Id Registro "+ data[i].insertId;         
            }
            alert(mensaje);
            
        },
        dataType: "json", 
        contentType: "application/json; charset=utf-8"
      });

      cargarDatosReconocimientoPeli();

}

function eliminarDatosActorPeli(){

    jQuery.ajaxSetup({async:false});

    let idPelReconocimiento= $("#id_peli_reconocimiento").val();

    var mensaje = "Datos Eliminados Exitosamente";
    $.ajax({
        type: "DELETE",
        url: "https://desfrlopez.me/mvelazco/api/reconocimientopelicula/"+idPelReconocimiento,
        success: function(data){
            console.log(data);
            for (var i = 0; i < data.length ; i++ ){
                mensaje += " Id Registro "+ data[i].insertId;                
            }
            alert(mensaje);
        },
        dataType: "json", 
        contentType: "application/json; charset=utf-8"
      });
      cargarDatosReconocimientoPeli();
 }
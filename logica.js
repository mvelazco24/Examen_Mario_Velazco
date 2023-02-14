function cargarDatosProductora(){
    var cuerpoTabla = " <thead> "+  "<tr> " + "<th> Id Productora </th> "+ "<th> Nombre Paroductora </th> "+"<th> Pa&iacute;s de Origen </th> "+" </thead> <tbody>";

    $.ajax({
        type: "GET",
        URL: "https://desfrlopez.me/mvelazco/api/productora",
        success: function (data){
            for (var i = 0; i < data.length; i++){
                cuerpoTabla =  "<tr>" + "<td>" + data[i].id_productora + "</td>" + "<tr>" + "<td>" + data[i].pais_origen_productora + "</td>" + "</tr>";
            }

            cuerpoTabla += " </tbody>";
            $("#reporteProductora").html(cuerpoTabla);
           
        }
        ,dataType: "json"
       
    });
}

cargarDatosProductora();
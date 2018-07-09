var nextinput = 0;
function AgregarCampos(){
    nextinput++;
    campo = ‘Campo’+nextinput+’:’;
    $(“#campos”).append(campo);
}

function EliminarCampos(){
    $(‘.fila’+nextinput).remove();
    nextinput–;
    if (nextinput==1) {
        $(this).remove();
    };
}
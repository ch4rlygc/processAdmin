$(document).ready(function () {

    $('#btnDel').attr('disabled', 'disabled');

    var nextInput = 1;

   $("#btnAdd").click(function () {

      nextInput++;

      var newMaterial;
      var newCantidad;
      var newUnidad;

       newCantidad = '<div class="col-6 col-md-4"><input type="number" style="margin-bottom: 25px;" id="cantidad_' + nextInput + '"&nbsp; name="cantidad_' + nextInput + '"&nbsp; placeholder="Cantidad" class="form-control newInput" /></div>';
       newMaterial = '<div class="col-6 col-md-4"><input type="text" style="margin-bottom: 25px;" id="material_' + nextInput + '"&nbsp; name="material_' + nextInput + '"&nbsp; placeholder="Material / Descripción" class="form-control newInput" /></div>';
       newUnidad = '<div class="col-6 col-md-4"><input type="text" style="margin-bottom: 25px;" id="unidad_' + nextInput + '"&nbsp; name="unidad_' + nextInput + '"&nbsp; placeholder="Unidad" class="form-control newInput" /></div>';
       $("#listaMateriales").append(newCantidad, newMaterial,  newUnidad);

       if (nextInput >= 2) {
           $('#btnDel').attr('disabled', false);
           return true;
       }
       if (nextInput == 1) {
           $('#btnDel').attr('disabled', 'disabled');
           return true ;
       }
       
   });
   
   $("#btnDel").click(function () {
       var num = $('.newInput').length;
       $('#material_' + nextInput).remove();
       $('#cantidad_' + nextInput).remove();
       $('#unidad_' + nextInput).remove();
       nextInput--;
   })


});
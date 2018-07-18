$(document).ready(function(){

	$("#registerButton").click(function(){

	    localStorage.clear();
		
		var validName = $("input#formName").val().length;
		var validUser = $("input#formUser").val();
		var validUserType = $("input#formUserType").val();
		var validPass = $("input#formPass").val();
		var validPass1 = $("input#formPass1").val();

		if (validName > 0) {
            if (validPass === validPass1) {

                var strName = $("input#formName").val();
                var strUser = $("input#formUser").val();
                var strUserType = $("input#formUserType").val();
                var strPass = $("input#formPass").val();

                function storeData () {
                    localStorage.setItem('NewNombre', strName);
                    localStorage.setItem('NewUserName', strUser);
                    localStorage.setItem('NewUserType', strUserType);
                    localStorage.setItem('NewPassword', strPass);

                    $("#successMessage").removeClass("d-none");
                    $("#successMessage").append("Nuevo usuario registrado con éxito!");

                    alert('Nuevo usuario registrado con éxito');

                    location.href('./index.html');
                }

                storeData();

            }
            else if (validPass != validPass1) {
                function showError () {
                    $("#errorMessage").removeClass("d-none");
                    $("#errorMessage").append("Lo siento, las contraseñas no coinciden");
                    alert('Las contraseñas no coinciden, inténtalo de nuevo');
                }
                showError();
            }
            else {
                alert('hola');
            }
            return true;
		}
		else {
			alert('Todos los campos son obligatorios')
			return false;
		}

	});

});
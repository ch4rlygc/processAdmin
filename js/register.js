$(document).ready(function(){

	$("#registerButton").click(function(){
		
		var validPass = $("#formPass").value;
		var validPass1 = $("#formPass1").value;

		if (validPass == validPass1) {

			var strName = $("#formName").value;
			var strUser = $("#formUser").value;
			var strUserType = $("#formUserType").value;
			var strPass = $("#formPass").value;

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
			}
			showError();
		}
		else {
			alert('hola');
		}

	});

});
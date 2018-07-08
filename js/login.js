$( document ).ready(function() {

	$("#loginButton").click(function(){

		function userValidation () {

			if ( $("loginUser").val().length > 0 ) {
				var strUserName = localStorage.getItem("NewUserName");
				var strPassword = localStorage.getItem("NewPassword");

				if ( $("loginUser").value == strUserName && $("loginPass".value == strPassword) ) {

					$("#successMessage").removeClass("d-none");
					$("#successMessage").append("Inicio de sesión exitoso!");
					alert("Inicio de sesión exitoso");

					location.href="dashboard.html";
				}
				else {
					function showError () {
						$("#errorMessage").removeClass("d-none");
						$("#errorMessage").append("Usuario o contraseña incorrecta");
						alert('Ingreso Fallido');
					}
					showError();
				}
			}

			else {
				alert("Debes completar todos los campos");
			}

		}

	userValidation();

	});

});
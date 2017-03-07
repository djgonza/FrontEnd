$(function () {

	function validate () {

		if($('input[name="nSocio"]').val() == "" || parseInt($('input[name="nSocio"]').val()) == NaN){
			alert("El numero de socio es ioncorrecto");
			return;
		}

		if($('select[name="dReserva"]')[0].selectedOptions.length < 1){
			alert("Selecciona almenos un dia de reserva");
			return;
		}

		expMail = /^[a-zA-Z]*@[a-zA-Z]*$/;
		if(!expMail.test($('input[name="Email"]').val())){
			alert("Email incorrecto");
			return;
		}

		var importe = 0;
		var dias = $('select[name="dReserva"]')[0].selectedOptions.length;
		var extras = $('input[name="extra[]"]:checked').length * 10;
		var horas = parseInt($('input[name="hora"]:checked').val());
		importe += dias * horas;
		importe += extras * dias

		if($('input[name="tengoCodigo"]:checked').length > 0){

			var codigo = $('input[name="codigo"]').val().split('-');
			if($('input[name="codigo"]').val().length != 7 || codigo.length != 2 || parseInt(codigo[1]) == NaN){
				alert("codigo incorrecto");
				return;
			}

			importe -= importe * 0.2;

		}

		var text = "Reserva realizada los dias \n";
		$($('select[name="dReserva"]')[0].selectedOptions).each(
			function (i, e) {
				text += e.innerText + "** ";
			}
		);

		text += "\n Con un importe de: \n";
		text += importe + "€";

	}

	$('input[name="reservar"]').click (
		function () {
			validate();
		});


});
$(function () {

	function validate () {

		var errors =  new Array();

		if($('select[name="marca"]')[0].selectedIndex < 0){
			errors.push("Selecciona una marca de coche");
		}

		if($('select[name="tipo"]')[0].selectedIndex < 0) {
			errors.push("Selecciona un tipo de coche");
		}

		if($('input[name="nombre"]').val() == "") {
			errors.push("Introduce un nombre de cliente");
		}

		if(parseInt($('input[name="edad"]').val()) < 18){
			errors.push("La edad tiene que ser mayor a 18");
		}

		if($('input[name="acc[]"]:checked').length == 0){
			errors.push("Selecciona un accesorio como minimo");
		}

		if($('input[name="terminos"]:checked').length == 0){
			errors.push("Acepta los terminos");
		}

		if(errors.length > 0){
			var text = "Debe corregir algunas cosas \n ====================== \n";
			for (var i = 0; i < errors.length; i++) {
				text += errors[i] + "\n";
			}
			console.log(errors);
			alert(text);
		}else{

			var precio = 0;
			var text = "Alquiler Realizado \n ====================== \n ";
			text += "Marca de coche: " + $('select[name="marca"]')[0].options[$('select[name="marca"]')[0].selectedIndex].innerText + " \n";
			text += "Tipo: " + $('select[name="tipo"]')[0].options[$('select[name="tipo"]')[0].selectedIndex].innerText + " \n"; 
			text += "Nombre: " + $('input[name="nombre"]').val() + "\n";
			text += "Edad" + $('input[name="edad"]').val() + "\n";
			text += "Accesorios: ";

			$('input[name="acc[]"]:checked').each (function (i, data) {
				
				precio += data.value;

				switch (i) {
					case 0: text += "Silla Niño ";
					break;
					case 1: text += "WI-FI ";
					break;
					case 2: text += "GPS ";
					break;
					case 3: text += "Conductor Ocasional ";
					break;
				}
			});

			alert(text);

			precio += $('select[name="tipo"]')[0].options[$('select[name="tipo"]')[0].selectedIndex].value;

			precio *= $('input[name="dAlquiler"]')[0].value;

			alert("Total a pagar -- " + precio);

		}

	}

	function setDiasAlquiler (action) {

		var dAlquiler = $('input[name="dAlquiler"]').val()

		if(action){
			dAlquiler++;
		}else{
			dAlquiler--;
		}
		
		if(dAlquiler < 1){
			alert("No se puede alquilar menos de 1 dia");
			dAlquiler = 1;
		}

		if(dAlquiler > 5) {
			alert("No se peuede alquilar mas de 5 dia");
			dAlquiler = 5;
		}

		$('input[name="dAlquiler"]').val(dAlquiler);
		$('input[name="fEntrega"]').val(dateNow(dAlquiler));

	}

	function dateNow (daysUp) {

		var date = new Date();
		var day = date.getDate() + daysUp;
		var monthDay = date.getMonth();
		var year = date.getFullYear();

		var months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

		var dateParsed = day + " " + months[monthDay - 1] + " " + year;

		return dateParsed;

		

	}

	//init
	$('input[name="fActual"]').val(dateNow(0));
	$('input[name="dMas"]').click(
		function () {
			setDiasAlquiler(true);
		});
	$('input[name="dMenis"]').click(
		function () {
			setDiasAlquiler(false);
		});
	$('input[name="alquilar"]').click(
		function () {
			validate();
		});

});
$(function () {

	$('button[name="ocultarAll"]').click(function () {
		$("li").hide();
		$("td").css('background-color', 'white');

	});

	$('button[name="mostrarAll"]').click(function () {
		$("li").show();
		$("td").css('background-color', 'blue');
	});

	$('button[name="capital"]').click(function () {
		$('input[name="capital"]').val($('input[name="Pais"]:checked').val());
	});

	$('td').dblclick (function () {

		$(this).css('background-color', 'blue');

		switch ($(this).text()) {
			case "Francia": $($("li")[0]).toggle();
			break;
			case "Suecia": $($("li")[1]).toggle();
			break;
			case "Alemania": $($("li")[2]).toggle();
			break;
		}
	});

});
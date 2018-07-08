$(document).ready(function() {
	$('btnDel').attr('disabled','disabled');
	$('btnAdd').click(function() {
		let num = $('.clonedInput').length;
		let newNum = new Number(num + 1);

		var newElem = $('#material' + num).clone().attr('id', 'Add' + newNum);

		newElem.children(':first').attr('id', 'hola' + newNum).attr('id', 'hola' + newNum);

		$('#material' + num).after(newElem);

		$('btnDel').attr('disabled', false);

		if (newNum == 200) {
			%('btnAdd').attr('disabled', 'disabled')
		}

	});

	$('btnDel').click(function() {
		var num = ('.clonedInput').length;
		$('#material' + num).remove();

		$('#btnAdd').attr('disabled', false);

		if (num == 1) {
			$('#btnDel').attr('disabled', 'disabled');
		}

	});

});
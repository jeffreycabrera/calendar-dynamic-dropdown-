$(document).ready(function(){
	var month = $('#month').val();
	var year = $('#year').val();
	
	$('#year').on('change', function() {
		year = $('#year').val();		
		$.ajax({
			url: 'days2.php',
			data: {year: year, month: month},
			dataType: 'JSON',
			method: 'GET',
			success: function(data) {
				var str = '';
				for (i = 1; i <= data.day; i++) {
					str += '<option value=' + i + '>' + i + '</option>';
				}
			$('#day').html(str);
			}
		});
	});
	
	$('#month').on('change', function() {
		month = $('#month').val();
		$.ajax({
			url: 'days2.php',
			data: {year: year, month: month},
			dataType: 'JSON',
			success: function(data) {
				var str = '';
				for (i = 1; i <= data.day; i++) {
					str += '<option value=' + i + '>' + i + '</option>';
				}
			$('#day').html(str);			
			}
		});
	});	
});

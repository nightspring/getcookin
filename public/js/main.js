$(document).ready(function() {
	//handles nav tabs and panels on recipe page
	$('.tab-panels .tabs li').on('click', function() {

		$('.tab-panels .tabs li.active').removeClass('active');
		$(this).addClass('active');

		var $panelRel = $(this).attr('rel');

		$('.tab-panels .panel.active').removeClass('active');
		$('#' + $panelRel).addClass('active');

	});
});


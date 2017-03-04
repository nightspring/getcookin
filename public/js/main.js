$(document).ready(function() {
	//handles nav tabs and panels on recipe page
	$('.tab-panels .tabs li').on('click', function() {

		$('.tab-panels .tabs li.active').removeClass('active');
		$(this).addClass('active');

		var $panelRel = $(this).attr('rel');

		$('.tab-panels .panel.active').removeClass('active');
		$('#' + $panelRel).addClass('active');
	});

	// Saves recipes from the browse recipe page to the user's Cookbook
	$('.save').on('click', function() {
		var $recVal = $(this).val();

		$.ajax({
			type: 'POST',
			url: 'saveRecipe/'+ $recVal,
			success: function(data) {
				if(data == 'true') {
					$('#recSavedLink').click();
				} else if(data == 'false') {
					$('#recExistsLink').click();
				}
			},
			// if user is not logged in, they are redirected to the login page
			error: function(data) {
				window.location.replace("/login");
			}
		});
	});

	// Saves notes on the user's Cookbook page
	$('.saveNote').on('click', function() {
		var $thisButton = $(this);
		var $noteArea = $(this).next('textarea');
		var $note = $(this).next('textarea').val();
		var $recID = $(this).val();

		var noteObj = {
			note: $note
		};

		$.ajax({
			type: 'PUT',
			url: 'saveNote/' + $recID,
			data: noteObj,
			success: function(data) {
				$($thisButton).removeClass('edit');
				$($noteArea).removeClass('noteEdit');
				$('#noteSavedLink').click();
			},
			error: function(data) {
				window.location.replace("/login");
			}
		});
	});

	// Adds edit class to Save button when textarea is clicked
	$('textarea').on('click', function() {
		var $textArea = $(this);
		var $button = $(this).siblings('button');
		$($button).addClass('edit');
		$($textArea).addClass('noteEdit');
	});
});






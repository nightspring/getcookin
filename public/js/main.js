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
		var $note = $noteArea.val();
		var $recID = $thisButton.val();

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

	// Updates user added recipes that have already been added
	$('.userSaveNote').on('click', function() {
		var $thisButton = $(this);
		var $noteArea = $(this).next('textarea');
		var $dirArea = $(this).parent().prev().prev();
		var $ingArea = $(this).parent().prev().prev().prev().prev();
		var $dir = $dirArea.val();
		var $ing = $ingArea.val();
		var $note = $noteArea.val();
		var $recID = $thisButton.val();
		console.log($dir, $ing, $note, $recID);

		var updatedRecipe = {
			recIng: $ing,
			recDir: $dir,
			recNotes: $note
		};

		$.ajax({
			type: 'PUT',
			url: 'updateRecipe/' + $recID,
			data: updatedRecipe,
			success: function(data) {
				$($thisButton).removeClass('edit');
				$($noteArea).removeClass('noteEdit');
				$($dirArea).removeClass('noteEdit');
				$($ingArea).removeClass('noteEdit');
				$('#noteSavedLink').click();
			},
			error: function(data) {
				window.location.replace("/login");
			}
		});
	});

	// Adds edit class to Save button when textarea is clicked.
	$('.notes').on('click', function() {
		var $textArea = $(this);
		var $button = $(this).siblings('button');
		$($button).addClass('edit');
		$($textArea).addClass('noteEdit');
	});

	// Adds edit class to Save button when user added textarea is clicked.
	$('.userAdded').on('click', function() {
		var $textArea = $(this);
		var $button = $(this).siblings('div').children('button');
		$($button).addClass('edit');
		$($textArea).addClass('noteEdit');
	});
});






let jquery = Object.assign(document.createElement('script'), {src: 'https://code.jquery.com/jquery-3.6.0.min.js', type: 'text/javascript'});
let form = Object.assign(document.createElement('script'), {src: 'js/form.js', type: 'text/javascript'});
let config = Object.assign(document.createElement('script'), {src: 'js/config.js', type: 'text/javascript'});
let vocabulary = Object.assign(document.createElement('script'), {src: 'js/vocabulary.js', type: 'text/javascript'});
document.getElementsByTagName('head')[0].append(jquery, form, config, vocabulary);

function buildWidget()
{
	if ($('#waitlist-widget').length) {

		let widget = $('#waitlist-widget');
		let form = $('<form>', {id: 'waitinglist-form', action: 'post'});
		var language = widget.attr('lang') ?? 'da';

		$.each(waitinglist.columns, function(c, column) {

			let columnElm = $('<div>', {class: 'column', id: 'column'+c});

			$.each(column, function(id, group) {

				if (group.label) {
					group.label.for = id;
					if (!group.label.text) {
						group.label.text = translate(language, id);
					}
					if (group.required) {
						group.label.class += ' mandatory';
					}
				}
				if (group.input) {
					group.input.name = id;
				}
				if (testData[id]) {
					group.input.value = testData[id];
				}

				columnElm.append(Form.group(id, group));

			})

			form.append(columnElm);

		});

		form.append(
			Form.input({type: 'submit', value: 'Submit form'}),
		);
		widget.append(form);

		$('#waitinglist-form').on('submit', function(e) {
			e.preventDefault();

			// Check form before post

			// Post form

				// Handle response

			console.log($(this).serialize());
		});

	}

	/*
	$('input[required]').on('invalid', function() {
	    this.setCustomValidity(Form.requiredMessage($(this).attr('type')));
	});
	$('input[required]').on('change', function() {
	    this.setCustomValidity('');
	});
	*/

}

document.body.onload = buildWidget;

class FormClass
{
	group(id, elm)
	{
		let group = $('<div>', {id: 'group-'+id, class: 'group'});

		if (elm.label) {
			group.append(this.label(elm.label));
		}
		if (elm.input) {
			group.append(this.input(elm.input));
		}
		if (elm.textarea) {
			group.append(this.textarea(elm.textarea));
		}
		return group;

	}

	label(attr)
	{
		let label = $('<label>', attr);
		if (attr.text) {
			label.text(attr.text);
		}
		return label;
	}

	input(attr)
	{
		if (!attr.id) {
			attr.id = attr.name;
		}

		return $('<input>', attr);
	}

	textarea(attr)
	{
		if (!attr.id) {
			attr.id = attr.name;
		}

		return $('<textarea>', attr);
	}
}

var Form = new FormClass();
let waitinglist = {
	columns: [{ // Column 1
		first_name: {
			label: {},
			input: {type: 'text', maxlength: 4},
			required: true
		},
		last_name: {
			label: {},
			input: {type: 'text'},
			required: true
		},
	},
	{ // Column 2
		email: {
			label: {},
			input: {type: 'email'}
		},
		address: {
			textarea: {type: 'email'}
		}
	}]
}

let testData = {
	first_name: 'John',
	last_name: 'Doe'
}
var vocab = {
	en: {
		first_name: 'First name',
		last_name: 'Last name',
		email: 'E-mail',
	},
	da: {
		first_name: 'Fornavn',
		last_name: 'Efternavn'
	}
}

function translate(language, key) {
	if (vocab[language][key]) {
		return vocab[language][key];
	} else if (vocab['en'][key]) {
		return vocab['en'][key];
	} else {
		return key.replace('_',' ');
	}
}
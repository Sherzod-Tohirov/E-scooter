document.addEventListener('DOMContentLoaded', () => {
	let form = document.getElementById('articleForm');
	let input = document.getElementById('userEmail');
	let btn = document.getElementById('articleBtn');
    let regExp = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm;
	btn.addEventListener('click', (event) => {
		
		if(input.value.length == 0 || !input.value.match(regExp)) {
			input.classList.add('invalid');
			event.preventDefault();
		}else {
			input.classList.remove('invalid');
		}

	});
});
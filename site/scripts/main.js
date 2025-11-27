let img = document.querySelector('img');
let p = document.querySelector('p');

img.onclick = () => {
	imgClick();
};

p.onclick = () => {
	p.textContent += '!';
};

function imgClick() {
	let value = img.getAttribute('src');
	if (value) {
		img.src = '';
	} else {
		img.src = 'images/ssh.jpg';
	}
}
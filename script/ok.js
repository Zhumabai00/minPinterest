const click = document.querySelector('#show-basket-discount')
const akcii = document.querySelector('.basket-discount__hidden')

click.addEventListener('click', () => {
	akcii.classList.toggle('hidd')
})
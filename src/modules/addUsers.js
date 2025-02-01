export const addUsers = () => {
	const form = document.querySelector('form')
	const nameInput = document.querySelector('#form-name')
	const emailInput = document.querySelector('#form-email')
	const childrenInput = document.querySelector('#form-children')

	form.addEventListener('submit', (e) => {
		e.preventDefault()

		const user = {
			name: nameInput.value,
			email: emailInput.value,
			children: childrenInput.checked,
			permissions: false
		}

		userService.addUser(user).then(res => {
			console.log(res)
		})
	});
}
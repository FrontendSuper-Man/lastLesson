import { render } from "./render"

export const addUsers = () => {
	const form = document.querySelector('form')
	const nameInput = document.querySelector('#form-name')
	const emailInput = document.querySelector('#form-email')
	const childrenInput = document.querySelector('#form-children')

	form.addEventListener('submit', (event) => {
		console.log("Форма отправлена");
		event.preventDefault()

		if (!form.dataset.method) {
			const user = {
				name: nameInput.value,
				email: emailInput.value,
				children: childrenInput.checked,
				permissions: false
			}

			userService.addUser(user).then(() => {
				userService.getUsers().then(users => {
					console.log("Форма отправлена");
					render(users)
					form.reset()
				})
			})
		}
	});
}
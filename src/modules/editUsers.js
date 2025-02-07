import { render } from "./render"

export const editUsers = () => {
	const tbody = document.getElementById('table-body')
	const form = document.querySelector('form')
	const nameInput = document.querySelector('#form-name')
	const emailInput = document.querySelector('#form-email')
	const childrenInput = document.querySelector('#form-children')

	tbody.addEventListener('click', (e) => {
		if (e.target.closest('.btn-edit')) {
			const tr = e.target.closest('tr')
			const id = tr.dataset.key

			userService.getUser(id).then(user => {
				console.log(user);
				nameInput.value = user.name
				emailInput.value = user.email
				childrenInput.checked = user.children
				form.dataset.method = id
			})
		}
	})

	form.addEventListener('submit', (event) => {
		console.log("Форма отправлена");
		event.preventDefault()

		if (form.dataset.method) {
			const id = form.dataset.method
			const user = {
				name: nameInput.value,
				email: emailInput.value,
				children: childrenInput.checked,
				permissions: false
			}

			userService.editUser(id, user).then(() => {
				userService.getUsers().then(users => {
					console.log("Форма отправлена");
					render(users)
					form.reset()
					form.removeAttribute('data-method')
				})
			})
		}
	});
}
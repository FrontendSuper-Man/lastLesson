import { render } from "./render"

export const filterUsers = () => {
	const btnIsChildren = document.getElementById('btn-isChildren')
	const btnIsPermssions = document.getElementById('btn-isPermissions')
	const btnIsAll = document.getElementById('btn-isAll')

	btnIsChildren.addEventListener('click', () => {
		userService.filterUser('children').then(users => {
			render(users)
		})
	})

	btnIsPermssions.addEventListener('click', () => {
		userService.filterUser('permissions').then(users => {
			render(users)
		})
	})

	btnIsAll.addEventListener('click', () => {
		userService.getUsers().then(users => {
			render(users)
		})
	})
}
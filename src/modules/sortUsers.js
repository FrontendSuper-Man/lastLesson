import { render } from "./render"

export const sortUsers = () => {
	const headerSortIsChildren = document.getElementById('sort-is-children')
	let isSort = true

	headerSortIsChildren.style.cursor = "pointer"

	headerSortIsChildren.addEventListener("click", () => {
		userService.getSortUser({
			name: isSort ? "children" : "-children"
		}).then(users => render(users))
		isSort = !isSort
	})
}
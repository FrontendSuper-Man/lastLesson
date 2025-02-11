export const sortUsers = () => {
	const headerSortIsChildren = document.getElementById('sort-is-children')
	let isSort

	headerSortIsChildren.style.cursor = "pointer"

	headerSortIsChildren.addEventListener("click", () => {
		userService.getSortUser(
			{
				id: "children",
				_sort: isSort ? "id" : "views"
			}
		).then(users => console.log(users))

		isSort = !isSort
		console.log(isSort);
	})
}
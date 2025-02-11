export const searchUsers = () => {
	const input = document.getElementById('search-input')
	input.addEventListener('input', () => {
		console.log(input.value);
	})
}
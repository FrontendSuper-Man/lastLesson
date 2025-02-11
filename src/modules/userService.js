export class UserService {
	getUsers() {
		return fetch('http://localhost:4545/users').then(res => res.json())
	}

	addUser(user) {
		return fetch('http://localhost:4545/users', {
			method: 'POST',
			headers: { "Content-type": "application/json" },
			body: JSON.stringify(user),
		})
	}

	removeUser(id) {
		return fetch(`http://localhost:4545/users/${id}`, {
			method: 'DELETE'
		}).then(res => res.json())
	}

	changeUser(id, data) {
		return fetch(`http://localhost:4545/users/${id}`, {
			method: 'PATCH',
			body: JSON.stringify(data),
			headers: { "Content-type": "application/json" },
		}).then(res => res.json())
	}

	getUser(id) {
		return fetch(`http://localhost:4545/users/${id}`).then(res => res.json())
	}

	editUser(id, user) {
		return fetch(`http://localhost:4545/users/${id}`, {
			method: 'PUT',
			body: JSON.stringify(user),
			headers: { "Content-type": "application/json" },
		}).then(res => res.json())
	}

	filterUser(filterOption) {
		return fetch(`http://localhost:4545/users?${filterOption}=true`).then(res => res.json())
	}

	getSortUsers() {
		// return fetch(`http://localhost:4545/users?_sort=${sortOption.name}&_order=${sortOption.value}`).then(res => res.json())
		console.log('sadjasjda,sd');
	}
}
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./modules/addUsers.js":
/*!*****************************!*\
  !*** ./modules/addUsers.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addUsers: () => (/* binding */ addUsers)
/* harmony export */ });
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ "./modules/render.js");


const addUsers = () => {
	const form = document.querySelector('form')
	const nameInput = document.querySelector('#form-name')
	const emailInput = document.querySelector('#form-email')
	const childrenInput = document.querySelector('#form-children')

	form.addEventListener('submit', (event) => {
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
					;(0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(users)
					form.reset()
				})
			})
		}
	});
}

/***/ }),

/***/ "./modules/changePerm.js":
/*!*******************************!*\
  !*** ./modules/changePerm.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changePerm: () => (/* binding */ changePerm)
/* harmony export */ });
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ "./modules/render.js");


const changePerm = () => {
	const tbody = document.getElementById('table-body')
	tbody.addEventListener('click', (e) => {
		if (e.target.closest('input[type="checkbox"]')) {
			const tr = e.target.closest('tr')
			const input = tr.querySelector('input[type="checkbox"]')
			const id = tr.dataset.key
			userService.changeUser(id, { permissions: input.checked }).then(res => {
				userService.getUsers().then(users => {
					;(0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(users)
				})
			})
		}
	})
} 

/***/ }),

/***/ "./modules/editUsers.js":
/*!******************************!*\
  !*** ./modules/editUsers.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   editUsers: () => (/* binding */ editUsers)
/* harmony export */ });
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ "./modules/render.js");


const editUsers = () => {
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
				nameInput.value = user.name
				emailInput.value = user.email
				childrenInput.checked = user.children
				form.dataset.method = id
			})
		}
	})

	form.addEventListener('submit', (event) => {
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
					;(0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(users)
					form.reset()
					form.removeAttribute('data-method')
				})
			})
		}
	});
}

/***/ }),

/***/ "./modules/filterUsers.js":
/*!********************************!*\
  !*** ./modules/filterUsers.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   filterUsers: () => (/* binding */ filterUsers)
/* harmony export */ });
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ "./modules/render.js");


const filterUsers = () => {
	const btnIsChildren = document.getElementById('btn-isChildren')
	const btnIsPermssions = document.getElementById('btn-isPermissions')
	const btnIsAll = document.getElementById('btn-isAll')

	btnIsChildren.addEventListener('click', () => {
		userService.filterUser('children').then(users => {
			;(0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(users)
		})
	})

	btnIsPermssions.addEventListener('click', () => {
		userService.filterUser('permissions').then(users => {
			;(0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(users)
		})
	})

	btnIsAll.addEventListener('click', () => {
		userService.getUsers().then(users => {
			;(0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(users)
		})
	})
}

/***/ }),

/***/ "./modules/removeUsers.js":
/*!********************************!*\
  !*** ./modules/removeUsers.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   removeUsers: () => (/* binding */ removeUsers)
/* harmony export */ });
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ "./modules/render.js");


const removeUsers = () => {
	const tbody = document.getElementById('table-body')
	tbody.addEventListener('click', (e) => {
		if (e.target.closest('.btn-remove')) {
			const tr = e.target.closest('tr')
			const id = tr.dataset.key
			userService.removeUser(id).then(res => {
				userService.getUsers().then(users => {
					;(0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(users)
				})
			})
		}
	})
} 

/***/ }),

/***/ "./modules/render.js":
/*!***************************!*\
  !*** ./modules/render.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
const render = (users) => {
	const tbody = document.getElementById('table-body')

	tbody.innerHTML = ''

	users.forEach(user => {
		tbody.insertAdjacentHTML('beforeend', `
	   <tr data-key="${user.id}" >
         <th scope="row">${user.id}</th>
         <td>${user.name}</td>
         <td>${user.email}</td>
         <td>${user.children ? 'Есть' : 'Нет'}</td>
         <td>
            <div class="form-check form-switch">
               <input class="form-check-input" type="checkbox" role="switch"
                     id="form-children" ${user.permissions ? 'checked' : ''}>
            </div>
         </td>
         <td>
            <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
               <button type="button" class="btn btn-warning btn-edit">
                     <i class="bi-pencil-square"></i>
               </button>
               <button type="button" class="btn btn-danger btn-remove">
                     <i class="bi-person-x"></i>
               </button>
            </div>
         </td>
      </tr>
			`)
	});
}

/***/ }),

/***/ "./modules/searchUsers.js":
/*!********************************!*\
  !*** ./modules/searchUsers.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   searchUsers: () => (/* binding */ searchUsers)
/* harmony export */ });
const searchUsers = () => {
	const input = document.getElementById('search-input')
	input.addEventListener('input', () => {
		console.log(input.value);
	})
}

/***/ }),

/***/ "./modules/sortUsers.js":
/*!******************************!*\
  !*** ./modules/sortUsers.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sortUsers: () => (/* binding */ sortUsers)
/* harmony export */ });
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ "./modules/render.js");


const sortUsers = () => {
	const headerSortIsChildren = document.getElementById('sort-is-children')
	let isSort = true

	headerSortIsChildren.style.cursor = "pointer"

	headerSortIsChildren.addEventListener("click", () => {
		userService.getSortUser({
			name: isSort ? "children" : "-children"
		}).then(users => (0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(users))
		isSort = !isSort
	})
}

/***/ }),

/***/ "./modules/userService.js":
/*!********************************!*\
  !*** ./modules/userService.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserService: () => (/* binding */ UserService)
/* harmony export */ });
class UserService {
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

	getSortUser(sortOption) {
		return fetch(`http://localhost:4545/users?_sort=${sortOption.name}&_order=${sortOption.id}`).then(res => res.json())
	}
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/render */ "./modules/render.js");
/* harmony import */ var _modules_userService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/userService */ "./modules/userService.js");
/* harmony import */ var _modules_addUsers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/addUsers */ "./modules/addUsers.js");
/* harmony import */ var _modules_removeUsers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/removeUsers */ "./modules/removeUsers.js");
/* harmony import */ var _modules_changePerm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/changePerm */ "./modules/changePerm.js");
/* harmony import */ var _modules_editUsers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/editUsers */ "./modules/editUsers.js");
/* harmony import */ var _modules_filterUsers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/filterUsers */ "./modules/filterUsers.js");
/* harmony import */ var _modules_sortUsers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/sortUsers */ "./modules/sortUsers.js");
/* harmony import */ var _modules_searchUsers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/searchUsers */ "./modules/searchUsers.js");










window.userService = new _modules_userService__WEBPACK_IMPORTED_MODULE_1__.UserService

userService.getUsers().then(data => {
	;(0,_modules_render__WEBPACK_IMPORTED_MODULE_0__.render)(data)
})

;(0,_modules_addUsers__WEBPACK_IMPORTED_MODULE_2__.addUsers)()
;(0,_modules_removeUsers__WEBPACK_IMPORTED_MODULE_3__.removeUsers)()
;(0,_modules_changePerm__WEBPACK_IMPORTED_MODULE_4__.changePerm)()
;(0,_modules_editUsers__WEBPACK_IMPORTED_MODULE_5__.editUsers)()
;(0,_modules_filterUsers__WEBPACK_IMPORTED_MODULE_6__.filterUsers)()
;(0,_modules_sortUsers__WEBPACK_IMPORTED_MODULE_7__.sortUsers)()
;(0,_modules_searchUsers__WEBPACK_IMPORTED_MODULE_8__.searchUsers)()
})();

/******/ })()
;
//# sourceMappingURL=main.js.map
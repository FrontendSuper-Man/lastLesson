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
					(0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(users)
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
			console.log(id);
			console.log(input);
			userService.changeUser(id, { permissions: input.checked }).then(res => {
				userService.getUsers().then(users => {
					(0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(users)
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
					(0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(users)
					form.reset()
					form.removeAttribute('data-method')
				})
			})
		}
	});
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
/* harmony import */ var _modules_addUsers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/addUsers */ "./modules/addUsers.js");
/* harmony import */ var _modules_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/render */ "./modules/render.js");
/* harmony import */ var _modules_userService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/userService */ "./modules/userService.js");
/* harmony import */ var _modules_removeUsers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/removeUsers */ "./modules/removeUsers.js");
/* harmony import */ var _modules_changePerm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/changePerm */ "./modules/changePerm.js");
/* harmony import */ var _modules_editUsers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/editUsers */ "./modules/editUsers.js");







window.userService = new _modules_userService__WEBPACK_IMPORTED_MODULE_2__.UserService

userService.getUsers().then(data => {
	console.log(data)
	;(0,_modules_render__WEBPACK_IMPORTED_MODULE_1__.render)(data)
})

;(0,_modules_addUsers__WEBPACK_IMPORTED_MODULE_0__.addUsers)()
;(0,_modules_removeUsers__WEBPACK_IMPORTED_MODULE_3__.removeUsers)()
;(0,_modules_changePerm__WEBPACK_IMPORTED_MODULE_4__.changePerm)()
;(0,_modules_editUsers__WEBPACK_IMPORTED_MODULE_5__.editUsers)()
})();

/******/ })()
;
//# sourceMappingURL=main.js.map
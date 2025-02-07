import { addUsers } from "./modules/addUsers";
import { render } from "./modules/render";
import { UserService } from "./modules/userService";
import { removeUsers } from "./modules/removeUsers";
import { changePerm } from "./modules/changePerm";
import { editUsers } from "./modules/editUsers";

window.userService = new UserService

userService.getUsers().then(data => {
	console.log(data)
	render(data)
})

addUsers()
removeUsers()
changePerm()
editUsers()
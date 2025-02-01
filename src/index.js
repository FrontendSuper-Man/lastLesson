import { addUsers } from "./modules/addUsers";
import { render } from "./modules/render";
import { UserService } from "./modules/userService";

window.userService = new UserService

userService.getUsers().then(data => {
	render(data)
})

addUsers()
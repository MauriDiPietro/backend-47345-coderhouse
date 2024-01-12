export default class UserDTO {
  constructor(user) {
    this.fullname = `${user.first_name} ${user.last_name}`
    this.email = user.email, 
    this.age = user.age, 
    this.pass = user.password, 
    this.role = user.role, 
    this.isGithub = user.isGithub, 
    this.isGoogle = user.isGoogle
  }
}


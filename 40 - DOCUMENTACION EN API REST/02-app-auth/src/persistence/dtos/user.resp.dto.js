export default class UserRespDTO {
  constructor(user) {
    this.user_fullname = `${user.first_name} ${user.last_name}`
    this.user_email = user.email
    this.user_age = user.age
    this.user_role = user.role
  }
}



class Actor {
  constructor(id, name, avatar, birthdate, gender, nationality) {
    this.id = id
    this.name = name
    this.avatar = avatar
    this.birthday = this.birthdate
    this.gender = gender
    this.nationality = nationality
  }

  getName() {
    return this.name
  }

  showAvatar() {
    return this.avatar
  }
}

export default Actor

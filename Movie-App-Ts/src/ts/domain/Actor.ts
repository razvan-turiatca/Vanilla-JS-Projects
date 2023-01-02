export default class Actor {
  id: number
  name: string
  avatar: boolean
  birthday: string
  gender: string
  nationality: string

  constructor(
    id: number,
    name: string,
    avatar: boolean,
    birthday: string,
    gender: string,
    nationality: string,
  ) {
    this.id = id
    this.name = name
    this.avatar = avatar
    this.birthday = birthday
    this.gender = gender
    this.nationality = nationality
  }

  getName() {
    return this.name
  }
}

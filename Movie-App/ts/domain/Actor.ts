class Actor {
  constructor(public id:string, public name:string, public avatar: string, public birthdate: number, public gender: string, public nationality: string) {

  }

  getName() {
    return this.name
  }

  showAvatar() {
    return this.avatar
  }
}

export default Actor
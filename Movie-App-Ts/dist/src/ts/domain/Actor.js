export default class Actor {
    constructor(id, name, avatar, birthday, gender, nationality) {
        this.id = id;
        this.name = name;
        this.avatar = avatar;
        this.birthday = birthday;
        this.gender = gender;
        this.nationality = nationality;
    }
    getName() {
        return this.name;
    }
}

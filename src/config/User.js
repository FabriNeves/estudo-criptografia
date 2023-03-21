import bcrypt from 'bcrypt';


class User {
    constructor(username, email, hashedPassword) {
        this.username = username;
        this.email = email;
        this.hashedPassword = hashedPassword;
    }

    async verifyPassword(password) {
        const match = await bcrypt.compare(password, this.hashedPassword);
        return match;
    }

    static async hashPassword(password) {
        const hash = await bcrypt.hash(password, 10);
        return hash;
    }

}


export default User;


// const hash = await User.hashPassword("123NovaSenha")
// const Usuario = new User("Fabrício", "email@mail.com",hash);
// console.table(Usuario);
// console.log(Usuario.hashedPassword);
// console.log(await Usuario.verifyPassword("123NovaSenha"));


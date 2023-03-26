import bcrypt from 'bcrypt';


class User {
    constructor(username, email, hashedPassword) {
        this.username = username;
        this.email = email;
        this.hash = hashedPassword;
    }

    static async verifyPassword(password,hash) {
        const match = await bcrypt.compare(password,hash);
        return match;
    }

    static async hashPassword(password) {
        const hash = await bcrypt.hash(String(password), 10);
        return hash;
    }

}


export default User; 

// const hash = await User.hashPassword("123NovaSenha")
// const Usuario = new User("Fabrício", "email@mail.com",hash);
// console.table(Usuario);
// console.log(Usuario.hash);
// console.log(await User.verifyPassword("123NovaSenha",hash));


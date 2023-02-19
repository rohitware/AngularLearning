export class User {
    constructor(
        public firstName: string,
        public lastName: string,
        public age: number,
        public email: string,
        public phone: number,
        public city: string,
        public gender: string,
        public password: string,
        public confermPassword: string,
    ) { }
}
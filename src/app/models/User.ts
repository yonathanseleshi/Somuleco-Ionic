export class User {

    userId: String;
    firstName: String;
    lastName: String;
    userName: String;
    displayName: String;
    email: String;
    password: String;
    bio: String;




    constructor(fname, lname, userName, displayName, email, password) {


        this.firstName = fname;
        this.lastName = lname;
        this.userName = userName;
        this.displayName = displayName;
        this.email = email;
        this.password = password;

    }




}

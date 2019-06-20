class Student {
    constructor(name, courses) {
        this.name = name;
        this.courses = courses;
    }
}

class Programmer extends Student {
    constructor(name, courses, operating_system, languages, vcs) {
        super(name, courses);
        this.operating_system = operating_system;
        this.languages = languages;
        this.vcs = vcs;
    }

    isProgramingIn(user_lang) {
        if (this.languages === user_lang) {
            return true;
        } else {
            return false;
        }

    }

}

let gilad = new Programmer("gilad", "itc", "mac", "python", "github");
let tomer = new Programmer("tomer", "itc", "windows", "javascript", "github");
let uri = new Programmer("uri", "itc", "windows", "java", "github");


let all_students = [gilad,tomer,uri];

function thefirst2knowjs() {
    for (let i = 0; i < all_students.length; i++) {
        if (all_students[i].languages === "javascript") 
            return all_students[i].name;     
    }
}

// thefirst2knowjs(all_students)


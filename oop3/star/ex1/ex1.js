class Student {
    constructor(name, courses) {
        this.name = name;
        this.courses = courses;
    }
}

class Programmer extends Student {
    constructor(name, courses, operatingSystem, languages, vcs) {
        super(name, courses);
        this.operatingSystem = operatingSystem;
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


let allStudents = [gilad,tomer,uri];

function thefirst2knowjs() {
    for (let i = 0; i < allStudents.length; i++) {
        if (allStudents[i].languages === "javascript") 
            return allStudents[i].name;     
    }
}

// thefirst2knowjs(allStudents)


// CODE here for your Lambda Classes

class Person { 
    constructor(baseclass) {
        this.name = baseclass.name,
        this.age = baseclass.age,
        this.location = baseclass.location;
    }
    speak () {
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}

class Instructor extends Person {
    constructor(teacher) {
        super(teacher);
        this.speciality = teacher.speciality,
        this.favLanguage = teacher.favLanguage,
        this.catchPhrase = teacher.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject) {
       return `${student.name} receives a perfect score on ${subject}`;
    }
}

class Student extends Person {
    constructor(scholar) { 
        super(scholar);
        this.previousBackground = scholar.previousBackground,
        this.className = scholar.className,
        this.favSubjects = scholar.favSubjects,
        this.grade = scholar.grade; //stretch challenge, trying to figure this out
    }
    listsSubjects () { //Im not sure if this is the correct way of doing this.
       return `${this.favSubjects}`;
    }
    PRAssignment (student, subject) {
      return `${student.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge (student, subject) {
      return `${student.name} has begun sprint challenge on ${subject}`;
    }
    grade () 
  //stretch, trying to figure this out
}

class TeamLeads extends Instructor {
    constructor(leaders) {
        super(leaders);
        this.gradClassName = leaders.gradClassName,
        this.favInstructor = leaders.favInstructor; 
    }
    standUp (channel) {
    return  `${this.name} announces to ${channel}, @channel standy times!​​​​​`;
       // Why doesn't this work with just return ${name}? I am only wondering since this is how it is written in the instructions? 
       // it will always be the name of the insctuctor.
    }
    debugsCode (student, subject) {
      return  `${this.name} debugs ${student.name}'s code on ${subject}`
    }
}

const adam = new Person ({
    name: "Adam",
    location: 'Chicago',
    age: 30,
    speciality: "CSS",
    favLanguage: "Javascript", 
    catchPhrase: "Throw some glitter, make it rain",
    previousBackground: "Bartender",
    className: "WEBPT8",
    favSubjects: ["HTML, CSS, JavaScript"],
    gradClassName: "CS1",
    favInstructor: "Dan",
    subject: "HTML"
})

const nate = new Instructor ({
    speciality: "CSS",
    favLanguage: "Javascript", 
    catchPhrase: "Throw some glitter, make it code",
})

const nora = new Student ({
    name: "Nora",
    catchPhrase: "Throw some glitter, make it rain",
    previousBackground: "Bartender",
    className: "WEBPT8",
    favSubjects: ["HTML, CSS, JavaScript"]
    grade: 80
})

const leslie = new TeamLeads ({
    name: "leslie",
    gradClassName: "Web8",
    favInstructor: "Dan",
    subject: "React"

})

console.log(adam);
console.log(adam.speak());
console.log(nate.demo("html"));
console.log(nate.grade(nora, "HTML"));
console.log(nora.listsSubjects());
console.log(nora.PRAssignment(nora, "Javascript"));
console.log(nora.sprintChallenge(nora, "a mental breakdown"));
console.log(leslie.standUp("web_pt8"));
console.log(leslie.debugsCode(nora, "REACT"));

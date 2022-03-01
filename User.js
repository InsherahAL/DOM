class User {
    constructor(fName, lastName, userName, password, age) {

        this.firstName = fName
        this.lastName = lastName
        this.userName = userName
        this.password = password
        this.age = age
        this.isLoggedIn = false
        this.lastLoggedIn = 0
        this.isActive = true
        this._id = Date.now()
    }
    signIn(password) {
        if (this.isActive) {
            if (password === this.password) {
                this.isLoggedIn = true
                this.lastLoggedIn = Date.now()
                return this
            } else {
                return { err: true, msg: 'wrong password' }
            }
        } else {
            alert('This account has been deleted')
        }

    }
    signOut() {
        this.isLoggedIn = false
    }
    getLastLoggedIn() {
        const date = new Date(this.lastLoggedIn)
        return date.toLocaleString()
    }
    deactivateUser() {
        this.isActive = false
    }

    reactivateUser() {
        this.isActive = true
        alert('Welcome Back' + this.firstName)
    }
}


class Teacher extends User {

    constructor(fName, lastName, userName, password, age, subject, salary) {
        super(fName, lastName, userName, password, age)
        this.subject = subject
        this.salary = salary
        this.workHours = 0
    }

    giveMark() {

    }

}
class Student extends User {

    constructor(fName, lastName, userName, password, age, grade) {
        super(fName, lastName, userName, password, age)
        this.grade = grade
    }

}

class School {
    constructor(name) {
        this.name = name
        this.grades = {}
        this.teachers = []
        this.students = []
    }

    registerStudent(fName, lastName, userName, password, age, grade) {
        const student = new Student(fName, lastName, userName, password, age, grade)
        this.students.push(student)

    }

    hireTeacher(fName, lastName, userName, password, age, subject, salary) {
        const teacher = new Teacher(fName, lastName, userName, password, age, subject, salary)
        this.teachers.push(teacher)
    }

    signIn(userName, password) {
        const teacher = this.teachers.find(t => t.userName == userName)
        const student = this.students.find(s => s.userName == userName)
        if (teacher) {
            return teacher.signIn(password)
        }
        if (student) {
            return student.signIn(password)
        }
        return{err:true,msg:'cannot find user'}

    }


}


const school = new School('America House')



school.hireTeacher('Adam', 'Muna', 'adammuna06', 'qweqwe', 35, 'P.E')
school.registerStudent('Hanin', 'farhat', 'HaninFarhat05', 'qweqwe', 16, '10th')
school.registerStudent('ashraf', 'Awar', 'awarash', 'qweqwe', 16, '10th')
school.registerStudent('yazeed', 'salameh', 'sal2007', 'qweqwe', 16, '10th')
school.registerStudent('Inshirah', 'Abu Libdeh', 'INsheeyyy203', 'qweqwe', 16, '10th')
school.registerStudent('Ibrahim', 'Sharif', 'Abra2323', 'qweqwe', 16, '10th')
school.registerStudent('Baha', 'Jawabreh', 'Baha123123', 'qweqwe', 16, '10th')
school.registerStudent('Ahmad', 'Kawasmi', 'hamoodeh43434', 'qweqwe', 16, '10th')
school.registerStudent('Khaled', 'Amro', 'khokho76', 'qweqwe', 16, '10th')
const school = {
    teachers: [
    {
    id: 1,
    name: "Pinchas",
    subjects: ["chemistry", "biology", "physics"],
    students: [],
    capacityLeft: 3,
    },
    {
    id: 2,
    name: "Williams",
    subjects: ["history", "ethics"],
    students: [],
    capacityLeft: 2,
    },
    ],
    students: [
    {
    id: 10,
    name: "Jennifer",
    age: 20,
    },
    {
    id: 11,
    name: "Howard",
    age: 23,
    },
    {
    id: 12,
    name: "Old-Timmy",
    age: 86,
    },
    {
    id:13,
    name: "Houston",
    age: 21,
    },
    ],
    findPerson : function(type,id){
        let found
        if(type==='teachers'){
            found = this.teachers.find(element => {
                return element.id === id
            });
        }
        else if(type==='students'){
            found = this.students.find(element => {
                return element.id === id 
            });
        }
        if(found)
            return found
        return 'there is no such an id or type'
    },
    assignStudent : function(id,subject){
        console.log(this.teachers[0].id)
        let student = this.findPerson('students',id),Teacher
        if(typeof(student)==='object'){
            Teacher = this.teachers.find(element => {
                if(element.subjects.includes(subject)&&element.capacityLeft>0)
                    return element
            });
        }
        if(Teacher){
            Teacher.students.push(student)
            Teacher.capacityLeft--
        }
        else{
            console.log('Sorry,no available teachers left');
        }
    },
    assignTeachersSubject : function(id,newSubject){
        
        const assignSubj = this.teachers.find(element => {
            if(!(element.subjects.includes(newSubject))&&element.id===id){
                element.subjects.push(newSubject)
            }
        }); 
        if(!assignSubj)
            console.log('the teacher already have this subject');
    },
    assignNewStudent : function(obj){
        const findstud = this.students.find(element => {
            if(element.id===obj.id){
                return element
            }
        }); 

        if(!findstud){
            this.students.push(obj)
        }
        else{
            console.log('there is already a student with this id');
        }

    }
    
}

console.log(school.findPerson('ters',1))
school.assignStudent(10,"chemistry")
console.log(school.teachers); 
school.assignTeachersSubject(1,'chemistry')
console.log(school.teachers);
let student = {
    id: 16,
    name: "Howard",
    age: 23,
}

school.assignNewStudent(student)
console.log(school.students);
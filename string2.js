

const school = {
    student: {
        classs_1 : {
            id_1 : {
                name: "aashish jha",
                class: 1,
                roll_no: 24,
                fees: "20k",
                gender: "male"
                
            },
            
            id_2 : {
                name: "sumit sahu",
                class: 1,
                roll_no: 20,
                fees: "20k",
                gender: "male"
            },
            
            id_3 : {
                name: "amit sah",
                class: 1,
                roll_no: 22,
                fees: "20k",
                gender: "male"
            }
        },

        class_2 : {
            id_1 : {
                name: "anushika sahh",
                class: 2,
                roll_no: 22,
                fees: "23k",
                gender: "female"
            }
        },
        class_3 : {
            id_1: {
                name: "om sah",
                class: 3,
                roll_no: 20,
                fees: "30k",
                gender: "male"
            }
        }
    },
    teacher: {
        id_1:{
            name: "bharat sah",
            sallary: "20k",
            gender: "male"
        }
    }
}

const id = school.student.classs_1.id_1.fees

let name = school.student.classs_1.id_1.name

console.log(`${name} pays almost ${id} to the school.`);



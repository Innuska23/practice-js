import { StudentType } from "../02/02";

export const sum = (a: number, b: number) => {
    return a + b;
}

const res = sum(2, 3)

// console.log(res);


export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export const makeStudentActive = (student: StudentType) => {
    student.isActive = true;
}

export const changeStudentLive = (student: StudentType, cityName: string) => {
    return student.address.city.title === cityName;
}
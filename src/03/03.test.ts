import { StudentType } from './../02/02';
import { addSkill, changeStudentLive, makeStudentActive } from './03';

let student: StudentType;
beforeEach(() => {
    student = {
        id: 1,
        name: "Dimych",
        age: 32,
        isActive: false,
        address: {
            streetTitle: "Surganova 2",
            city: {
                title: "Minsk",
                countryTitle: "Belarus"
            }
        },
        technologies: [
            {
                id: 1,
                title: "HTML"
            },
            {
                id: 2,
                title: "CSS"
            },
            {
                id: 3,
                title: "React"
            }
        ]
    }
})

test('new tech skill should be added to student', () => {
    expect(student.technologies.length).toBe(3)
    addSkill(student, 'JS')
    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe('JS')
    expect(student.technologies[3].id).toBeDefined()
})

test('student should be made active', () => {
    expect(student.isActive).toBe(false)
    makeStudentActive(student)
    expect(student.isActive).toBe(true)
})

test('does student live in city', () => {
    expect(student.address.city.title).toBe('Minsk')
    const result1 = changeStudentLive(student, 'Moscow')
    const result2 = changeStudentLive(student, 'Minsk')
    expect(result1).toBe(false)
    expect(result2).toBe(true)
})

// test('Budget should be changed for HOSPITAL', () => {
//     expect(city.governmentBuildings[0].budget).toBe(200000)
//     changeBudget(city, 100000)
//     expect(city.governmentBuildings[0].budget).toBe(300000)
// })

// test('Budget should be changed for FIRE-STATION', () => {
//     expect(city.governmentBuildings[1].budget).toBe(500000)
//     changeBudget(city, -100000)
//     expect(city.governmentBuildings[1].budget).toBe(400000)
// })

// test.skip('House should be repaired', () => {
//     repairHouse(city)
//     expect(city.houses[1].repaired).toBeTruthy()
// })

// test('staff should be increased', () => {
//     toFireStaff(city, 20)
//     expect(city.governmentBuildings[0].staffCount).toBe(180)
// })

// test('staff should be hire', () => {
//     toHireStaff(city, 20)
//     expect(city.governmentBuildings[0].staffCount).toBe(220)
// })
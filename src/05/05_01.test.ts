// / 01. создайте в том же файле ещё одну функцию, чтобы тесты прошли
// test('list of streets titles of government buildings', () => {
//     let streetsNames = getStreetsTitlesOfGovernmentBuildings(city.governmentBuildings);

import { createGreetingMessage, ManType } from "./05_01";

//     expect(streetsNames.length).toBe(2);
//     expect(streetsNames[0]).toBe("Central Str");
//     expect(streetsNames[1]).toBe("South Str");
// })

// //02. создайте в том же файле ещё одну функцию, чтобы тесты прошли
// test('list of streets titles', () => {
//     let streetsNames = getStreetsTitlesOfHouses(city.houses);

//     expect(streetsNames.length).toBe(3);
//     expect(streetsNames[0]).toBe("White street");
//     expect(streetsNames[1]).toBe("Happy street");
//     expect(streetsNames[2]).toBe("Happy street");
// })


let people: Array<ManType> = []

beforeEach(() => {
    people = [
        { name: "Andrew Ivanov", age: 33 },
        { name: "Alexander Petrov", age: 24 },
        { name: "Dmitry Sidorov", age: 18 },
    ]
})

test("should getarray of greeting messages", () => {
    const messages = createGreetingMessage(people);

    expect(messages.length).toBe(3);
    expect(messages[0]).toBe("Hello Andrew. Welcome to It-incubator");
    expect(messages[1]).toBe("Hello Alexander. Welcome to It-incubator");
    expect(messages[2]).toBe("Hello Dmitry. Welcome to It-incubator");
})
import { addedNewCompanies, addNewBookToUser, moveUser, moveUserToOtherHouse, removeBook, updateBook, updateCompanyTitle, updateSkills, upgradeUserLaptop, UserType, UserWithBooksType, UserWithCompanyType, UserWithLaptopType, UserWithSkills } from "./10";

function incrementAge(user: UserType): void {
    user.age++;
}

test("Reference type test", () => {
    let user: UserType = {
        name: "Inna",
        age: 26,
        address: {
            city: "Minsk",
            house: 13
        },
    };

    incrementAge(user);

    expect(user.age).toBe(27);
});

test("change adress", () => {
    let user: UserWithLaptopType = {
        name: "Inna",
        age: 26,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        }
    };


    const movedUser = moveUser(user, 'Kiev')

    expect(user).not.toBe(movedUser);
    expect(user.address).not.toBe(movedUser.adress);
    expect(user.laptop).toBe(movedUser.laptop);
    expect(movedUser.address.city).toBe('Kiev');

});

test("upgrade laptop to macbook", () => {
    let user: UserWithLaptopType = {
        name: "Inna",
        age: 26,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        }
    };


    const laptopUser = upgradeUserLaptop(user, 'Macbook')

    expect(user).not.toBe(laptopUser);
    expect(user.laptop).not.toBe(laptopUser.laptop);
    expect(laptopUser.laptop).toBe('Macbook');
    expect(user.laptop.title).toBe('Zenbook');

});

test("upgrade house", () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: "Inna",
        age: 26,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        },
        books: ['css', 'html', 'js', 'react']
    };


    const userCopy = moveUserToOtherHouse(user, 99)

    expect(user).not.toBe(userCopy);
    expect(user.books).toBe(userCopy.books);
    expect(user.laptop).toBe(userCopy.laptop);
    expect(user.address).not.toBe(userCopy.address);
    expect(userCopy.address.house).toBe(99);
});


test("add new books to user", () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: "Inna",
        age: 26,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        },
        books: ['css', 'html', 'js', 'react']
    };


    const userCopy = addNewBookToUser(user, ["ts", 'rest api'])

    expect(user).not.toBe(userCopy);
    expect(user.books).not.toBe(userCopy.books);
    expect(user.laptop).toBe(userCopy.laptop);
    expect(user.address).toBe(userCopy.address);
    expect(user.books[4]).toBe('ts');
    expect(user.books[5]).toBe('rest api');
});

test("update js to ts", () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: "Inna",
        age: 26,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        },
        books: ['css', 'html', 'js', 'react']
    };


    const userCopy = updateBook(user, user.books, 'js', "ts")

    expect(user).not.toBe(userCopy);
    expect(user.books).not.toBe(userCopy.books);
    expect(user.laptop).toBe(userCopy.laptop);
    expect(user.address).toBe(userCopy.address);
    expect(user.books[2]).toBe('ts');
    expect(user.books.length).toBe(4);
});

test("skills change", () => {
    let user: UserWithLaptopType & UserWithBooksType & UserWithSkills = {
        name: "Inna",
        age: 26,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        },
        books: ['css', 'html', 'js', 'react'],
        skills: [70, 80, 90]
    };


    const userCopy = updateSkills(user, 70, 75)

    expect(user).not.toBe(userCopy);
    expect(user.books).not.toBe(userCopy.books);
    expect(user.laptop).toBe(userCopy.laptop);
    expect(user.address).toBe(userCopy.address);
    expect(user.skills[0]).toBe(75);
});

test("remove book js", () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: "Inna",
        age: 26,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        },
        books: ['css', 'html', 'js', 'react']
    };


    const userCopy = removeBook(user, 'js',)

    expect(user).not.toBe(userCopy);
    expect(user.books).not.toBe(userCopy.books);
    expect(user.laptop).toBe(userCopy.laptop);
    expect(user.address).toBe(userCopy.address);
    expect(userCopy.books[2]).toBe('react');
    expect(user.books.length).toBe(4);
});


test("added new companies", () => {
    let user: UserWithLaptopType & UserWithCompanyType = {
        name: "Inna",
        age: 26,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        },
        companies: [
            { id: 1, title: 'Epam' },
            { id: 2, title: 'IT-INCUBATOR' }
        ]
    };


    const userCopy = addedNewCompanies(user, 'Google',)

    expect(user).not.toBe(userCopy);
    expect(user.laptop).toBe(userCopy.laptop);
    expect(user.address).toBe(userCopy.address);
    expect(userCopy.companies).not.toBe(user.companies);
    expect(userCopy.companies.length).toBe(3);
});

test("update companies", () => {
    let user: UserWithLaptopType = {
        name: "Inna",
        age: 26,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        },
    };

    let companies = {
        'Dimych': [{ id: 1, title: 'Epam' }, { id: 2, title: 'IT-INCUBATOR' }],
        'Inna': [{ id: 1, title: 'Epam' }]
    }

    const newCompanies = updateCompanyTitle(companies, 'Inna', 1, 'Google');

    expect(user).not.toBe(newCompanies);
    expect(newCompanies['Inna'][0].title).toBe('Google');
    expect(companies['Inna'][0].title).toBe('Epam');
    expect(newCompanies['Dimych']).toEqual(companies['Dimych']);
});
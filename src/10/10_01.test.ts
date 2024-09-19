import { moveUser, upgradeUserLaptop, UserType, UserWithLaptopType } from "./10";

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


    const movedUser = upgradeUserLaptop(user, 'Macbook')

    expect(user).not.toBe(movedUser);
    expect(user.laptop).not.toBe(movedUser.laptop);
    expect(movedUser.laptop).toBe('Macbook');

});
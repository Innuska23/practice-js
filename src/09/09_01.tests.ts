import { addSkill } from './../03/03';
function increaseAge(u: UserType) {
    u.age++;
}

type UserType = {
    name: string
    age: number
    address: { title: string }
}


test('should be corresponding use', () => {
    const user: UserType = {
        name: 'Dimych',
        age: 32,
        address: {
            title: "Minsk"
        }
    }

    increaseAge(user);

    expect(user.age).toBe(33)

    const superman = user;
    superman.age = 1000;

    expect(superman.age).toBe(1000)
})

test('array test', () => {
    const users = [
        {
            name: 'Dimych',
            age: 32
        },
        {
            name: 'Dimych',
            age: 32
        }
    ]

    const admins = users;
    admins.push({
        name: 'Bandyugan',
        age: 10
    })
    // increaseAge(user);

    expect(users[2]).toEqual({
        name: 'Bandyugan',
        age: 10
    })

})

test('value type test', () => {

    const usersCount = 100;

    const adminsCount = usersCount;

    expect(user[2]).toEqual({
        name: 'Bandyugan',
        age: 10
    })

})

test('should be corresponding use', () => {
    const user: UserType = {
        name: 'Dimych',
        age: 32,
        address: {
            title: "Minsk"
        }
    }

    // let addr = user.address

    let user2: UserType = {
        name: 'Natasha',
        age: 30,
        address: user.address
    }

    user2.address.title = 'Kanary'
    // expect(user.address.title).toBe(user2.address.title)
    // expect(user.address.title).toBe('Kanary')
})
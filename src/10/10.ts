export type UserType = {
    name: string;
    age: number;
    address: { city: string, house: number };
};


export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export const moveUser = (u: UserWithLaptopType, city: string) => {
    return {
        ...u,
        adress: {
            ...u.address,
            city
        }
    }
}

export const upgradeUserLaptop = (u: UserWithLaptopType, laptop: string) => {
    return {
        ...u,
        laptop: {
            ...u.laptop,
            laptop
        }
    }
}
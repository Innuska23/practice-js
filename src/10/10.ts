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

export type UserWithBooksType = UserType & {
    books: Array<string>
}

export type UserWithSkills = UserWithBooksType & UserType & {
    skills: Array<number>
}

export type UserWithCompanyType = {
    companies: Array<{ id: number, title: string }>
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

export const moveUserToOtherHouse = (u: UserWithLaptopType & UserWithBooksType, house: number) => {
    return {
        ...u,
        adress: {
            ...u.address,
            house
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

export const addNewBookToUser = (u: UserWithLaptopType & UserWithBooksType, book: Array<string>) => {
    return {
        ...u,
        books: [...u.books, ...book]
    }

}

export const updateBook = (u: UserWithLaptopType & UserWithBooksType, book: Array<string>, newBook: string, oldBook: string) => {
    return {
        ...u,
        books: u.books.map(book => book === oldBook ? newBook : book)
    }

}

export const updateSkills = (u: UserWithLaptopType & UserWithBooksType & UserWithSkills, newSkill: number, oldSkill: number) => {
    return {
        ...u,
        skills: u.skills.map(skill => skill === oldSkill ? newSkill : skill)
    }

}

export const removeBook = (u: UserWithLaptopType & UserWithBooksType, deleteBook: string) => {
    return {
        ...u,
        books: u.books.filter(book => book !== deleteBook)
    }
}

export const addedNewCompanies = (u: UserWithLaptopType & UserWithCompanyType, newCompany: string) => {
    return {
        ...u,
        companies: [u.companies.map((c) => {
            return { ...c }
        }), newCompany]
    }
}

type CompanyType = {
    id: number,
    title: string
}

export const updateCompanyTitle = (companies: { [key: string]: Array<CompanyType> }, userName: string, companyId: number, newTitle: string) => {
    let companiesCopy = {
        ...companies,
        [userName]: companies[userName].map((c) => c.id === companyId ? { ...c, title: newTitle } : c)
    }

    return companiesCopy;
}
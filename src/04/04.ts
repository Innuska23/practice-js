const ages = [18, 20, 22, 1, 100, 90, 14];


const predicate = (age: number) => {
    return age > 90;
}

const oldAges = ages.filter((a: number) => a > 90)//>90 [100]; 

console.log(oldAges);

const courses = [
    { title: 'css', price: 110 },
    { title: 'js', price: 200 },
    { title: 'react', price: 150 },
]

//<160

type CoursesType = {
    title: string
    price: number
}

const cheapPredicat = (courses: CoursesType) => {
    return courses.price < 160;
}

// const cheapCourses = [
//     { title: 'css', price: 110 },
//     { title: 'react', price: 150 },
// ]
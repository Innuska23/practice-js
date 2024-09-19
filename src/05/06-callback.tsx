// export function createMessage(houses:any){
//     return houses.map(h => `Hello guys from ${h.address.street.title}`)
// }

// const callback = (): number => {
//     alert('hey');
//     return 12;
// }

// window.setTimeout(callback, 1000)

const deleteUserHandler = () => {
    alert('user have been deleted')
}
const saveUser = () => {
    alert('user have been save')
}


export const User = () => {
    return (
        <div>
            Inna
            <button onClick={deleteUserHandler }>delete</button>
            <button onClick={saveUser}>save</button>
        </div>
    )
}
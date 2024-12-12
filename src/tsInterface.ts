interface UserType {
    name: string,
    age: number,
    address?: { // TO make a specific key optional just add a ? after it!
        city?: string,
        state?: string,
        country: string // Yha ? add kerne ka matlab, If the user is giving the address so city and state are here optional but country is mandatory!
    }
}

// let user: UserType = {
//     name: "Shubh",
//     age: 22,
//     address: {
//         city: "Delhi",
//         state: "Delhi",
//         country: "India"
//     }
// }

function isLegal(userData: UserType):boolean {
    if (userData.age >= 18) {
        return true
    } else {
        return false
    }
}

// console.log(isLegal(user))

console.log(isLegal({
    name: "Shubhashsi Chakraborty",
    age: 12
}))


// interface userType {
//     username: string,
//     email: string,
//     age: number
// } // NOW USE THIS INTERFACE EVERYWHERE WHERE ITS NEEDED!

// // for example User Case:

// const greet = (USER:userType):string => {
//     return `Hello there ${USER.username}`
// }

// console.log(greet({
//     username: "shubhdaddy!",
//     email: "shubh123@gmail.com",
//     age: 18
// }))
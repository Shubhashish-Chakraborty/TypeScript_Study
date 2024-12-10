interface userType {
    username: string,
    email: string,
    age: number
} // NOW USE THIS INTERFACE EVERYWHERE WHERE ITS NEEDED!

// for example User Case:

const greet = (USER:userType):string => {
    return `Hello there ${USER.username}`
}

console.log(greet({
    username: "shubhdaddy!",
    email: "shubh123@gmail.com",
    age: 18
}))
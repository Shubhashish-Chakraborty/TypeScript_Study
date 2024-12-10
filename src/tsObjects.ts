// Write a function that takes an whole object lets say from the database it came and then show the details of the user

const userInfo = (userData:{
    username: string,
    email: string
}): string => {
    return `${userData.username} has successfully logged IN With email: ${userData.email}`
}

let serverMessage = userInfo({
    username: "riya",
    email: "riyaanshuuuu18@gmail.com"
})

console.log(serverMessage)
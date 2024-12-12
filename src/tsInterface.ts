interface AddressType {
    city: string,
    state: string,
    country: string
}

interface UserType {
    username: string,
    age: number,
    address: AddressType // Interface using other interface!
}

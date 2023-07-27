
const userOperations = (createUser = [ ], action) => {
    // debugger
    console.log(action);
    console.log(createUser)
    switch (action.type) {
        case 'CREATE_USER':
            return ({...createUser, data: action.payload })
        default:
            return createUser
    }
}

export default userOperations;
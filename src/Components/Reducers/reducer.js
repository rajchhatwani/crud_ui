
const userOperations = (createUser = {}, action) => {
    switch (action.type) {
        case 'CREATE_USER':
            return (createUser)
        default:
            return " okay "
    }

}

export default userOperations;
// import axios from 'axios';
// import { useState } from 'react';

// // const [data, setData] = useState([])
// // async function callApi() {
// //     let response = await axios.get('http://localhost:8080/get');
// //     return setData(response.data.data)
// // }
// // callApi()
// // console.log(data)
const table = (createUser = [ ], action) => {
    // console.log(props.form_data)
    return {
        type: "CREATE_USER", 
        payload : [ ]

    }
}

export { table }
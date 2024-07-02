import axios from 'axios'

const baseUrl="https://localhost:7023/api/Users"
const fetchData = async () => {
    try {
        const response = await axios.get(baseUrl);
        return response.data;
    } catch (ex) {
        console.log(ex)
    }

}

const fetchDelete = async (Id) => {
    try {
        const response = await axios.delete(baseUrl+'/'+Id);
        return response.data;
    } catch (ex) {
        console.log(ex)
    }

}

const saveUsers = async (User) => {
    try{
       await axios.post(baseUrl,User)
        .then(response => {
            console.log('Data successfully submitted');
        })
    }catch (ex) {
        console.log(ex)
    }
    
        
}

export {
    fetchData,
    saveUsers,
    fetchDelete
}
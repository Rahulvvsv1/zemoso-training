import axios from 'axios';


const url = "http://127.0.0.1:3003/user";

export const getallUsers = async (id:number|undefined|string  ='') => {
    id = id || '';
    return await axios.get(`${url}/${id}`);
}

export const addUser = async (user:any) => {
    return await axios.post(url,user);
}

export const editUser = async (id:string|undefined, user:any) => {
    return await axios.put(`${url}/${id}`,user);
}


export const deleteUser = async (id:number) => {
    return await axios.delete(`${url}/${id}`);
}
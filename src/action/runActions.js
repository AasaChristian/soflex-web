import axios from 'axios'
import {Create_Log} from './index'

const axiosAddress = "http://localhost:5000"


export const createLog  = (log) => dispatch => {
    axios.post(`${axiosAddress}/api/logs/add`, log)
    .then(res => {
        dispatch({type: Create_Log, payload: res.data})
    }).catch(error => console.log(error, "createLog action error"))
}
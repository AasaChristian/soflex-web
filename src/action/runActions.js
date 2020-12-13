import axios from 'axios'
import {Create_Log, Fetch_Logs} from './index'

const axiosAddress = "http://localhost:5000"

export const fetchLogs = (id) => dispatch => {
    axios.get(`${axiosAddress}/api/logs/find/${id}`)
    .then(res => {
        
         dispatch({type: Fetch_Logs, payload: res.data })
         
    })
    .catch(error => console.log(error, "fetchLogs action error"))
};


export const createLog  = (log) => dispatch => {
    axios.post(`${axiosAddress}/api/logs/add`, log)
    .then(res => {
        dispatch({type: Create_Log, payload: res.data})
    }).catch(error => console.log(error, "createLog action error"))
}
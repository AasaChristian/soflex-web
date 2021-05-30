import axios from 'axios'
import {Fetch_Exercise_Success, Fetch_Exercise_Failed, Fetch_Exercise_Loading, Create_Exercise, Delete_Exercise} from './index'
import {axiosAddress} from '../AxiosAdress'


export const fetchExercise = () => dispatch => {
    dispatch({type: Fetch_Exercise_Loading})
    axios.get(`${axiosAddress}/api/exercises/all`)
    .then(res => dispatch({type: Fetch_Exercise_Success, payload: res.data}))
    .catch(error =>{
        dispatch({type: Fetch_Exercise_Failed, payload: 'error'})
        console.log(error, "fetchExercie action error")
    })
            
    };

export const createExercise = (exercise) => dispatch => {
        axios.post(`${axiosAddress}/api/exercises/add`, exercise)
        .then(res => {
            dispatch({type: Create_Exercise, payload: res.data})
        }).catch(error => console.log(error, "createExercise action error"))
    }

export const deleteExercise = (id) => dispatch => {
    axios.delete(`${axiosAddress}/api/exercises/remove/${id}`)
    .then(res => {
        dispatch({type: Delete_Exercise, payload: id})
    }).catch(error => console.log(error, "deleteExercise action error"))
}
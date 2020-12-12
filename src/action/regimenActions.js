import axios from 'axios'
import {Fetch_Regimen, Create_Regimen, Update_Regimen, Create_TempRegName, Clear_TempRegName, Set_UserId} from './index'

// const axiosAddress = "https://citysoflex.herokuapp.com"
const axiosAddress = "http://localhost:5000"

export const fetchRegimen = (id) => dispatch => {
    axios.get(`${axiosAddress}/api/regimen/find/${id}`)
    .then(res => {
        console.log(res, "LOOKING FOR REGIMEN NAME")
        const reggy = res.data
        const  names = []
        for (let i = 0; i < reggy.length; i++){
          if (names.includes(reggy[i].regimenName)){

        } else {
            names.push(reggy[i].regimenName)
        }  
        }
        
         dispatch({type: Fetch_Regimen, payload: [res.data, names] })
         
    })
    .catch(error => console.log(error, "fetchRegimen action error"))
};

export const createRegimen = (regimen) => dispatch => {
    axios.post(`${axiosAddress}/api/regimen/add`, regimen)
    .then(res => {
        dispatch({type: Create_Regimen, payload: res.data})
    }).catch(error => console.log(error, "createRegimen action error"))
}

export const updateRegimen = (update, regimenId) => dispatch => {
    axios.put(`${axiosAddress}/api/regimen/update/${regimenId}`, update)
    .then(res => {
        dispatch({type: Update_Regimen, payload: res.data})
    }).catch(error => console.log(error, "createRegimen action error"))
}

export const createTempRegName = (tempName) => {
    return {type: Create_TempRegName, payload: tempName}
}

export const clearTempRegName = () => {
    return {type: Clear_TempRegName}
}

export const setUserId = (id) => {
    return {type: Set_UserId, payload: id}
}
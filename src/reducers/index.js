import {Fetch_Exercise, Create_Exercise, Fetch_Regimen, Create_Regimen, Create_TempRegName, Clear_TempRegName} from '../action/index'

const initialState = {
exercises: [],
regimen: [],
regTempName: []
  };
  
  export const reducer = (state = initialState, action) => {
    console.log(action.payload, "action.payload")
    console.log(state.regTempName, "action.regTempName")
    switch (action.type){

      case Fetch_Exercise:
        return {
          ...state,
          exercises: action.payload
        };
        case Create_Exercise:
          return {
            ...state,
            exercises: [...state.exercises, action.payload[0]]
          };
        case Fetch_Regimen:
            return{
              ...state,
              regimen: action.payload
            };
        case Create_Regimen:
              return {
                ...state,
                regimen: [...state.regimen, action.payload[0]]
              };
        case Create_TempRegName:
              return {
                  ...state,
              regTempName: action.payload
                };
        case Clear_TempRegName:
              return {
                      ...state,
              regTempName: []
                    };

        default:
            return state;
    }
  }
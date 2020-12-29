import {Fetch_Exercise, Create_Exercise, Delete_Exercise, Fetch_Regimen, Create_Regimen, Update_Regimen, Delete_RegimenEx, Create_TempRegName, Clear_TempRegName, Set_UserId, Create_Log, Fetch_Logs} from '../action/index'

const initialState = {
exercises: [],
regimen: [],
regimenName:[],
regTempName: [],
userIdState: null,
logs: []
  };
  
  export const reducer = (state = initialState, action) => {
    console.log(action.payload, "action.payload")
    console.log(state.regTempName, "action.regTempName")
    switch (action.type){
      case Fetch_Regimen:
        return{
          ...state,
          regimen: action.payload[0],
          regimenName: action.payload[1]
        };
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
        case Delete_Exercise:
            return {
              ...state,
              exercises: [...state.exercises.filter(ex => ex.id !== action.payload)]
            };
        case Create_Regimen:
              return {
                ...state,
                regimen: [...state.regimen, action.payload[0]]
              };
        case Update_Regimen:
              return {
                  ...state,
                regimen: [action.payload]
                };
        case Delete_RegimenEx:
                  return {
                    ...state,
                    exercises: [...state.regimen.filter(ex => ex.regimenID !== action.payload)]
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
        case Set_UserId:
              return {
                      ...state,
              userIdState: action.payload
                    };
        case Create_Log:
              return {
                      ...state,
              logs: [state.logs, action.payload[0]]
              };
        case Fetch_Logs:
              return{
                     ...state,
                     logs: action.payload
              }

        default:
            return state;
    }
  }
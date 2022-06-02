import actionTypes from './actionTypes';
import {getAllCodeService, createNewUserService, getAllUsers, deletUserService, editUserService, getTopDoctorHomeService, getAllDoctors,saveDetailDoctorService} from "../../services/userService";
import {toast} from "react-toastify"

export const fetchGenderStart = () => {
    return async (dispatch, getState) => {
        try{
            dispatch({
              type: actionTypes.FETCH_GENDER_START
            })
            let res = await getAllCodeService("GENDER")
            if(res&& res.errCode === 0) {
                
                dispatch (fetchGenderSuccess(res.data))
            }else{
                dispatch (fetchGenderFailed())
            }
         }catch(e){
             dispatch (fetchGenderFailed())
             console.log('fetchGenderStart error', e);
         }
     }
    }
   

export const fetchGenderSuccess = (genderData) => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    data: genderData
})

export const fetchGenderFailed= () => ({
    type: actionTypes.FETCH_GENDER_FAILED,
})

export const fetchPositionSuccess = (positionData) => ({
    type: actionTypes.FETCH_POSITION_SUCCESS,
    data: positionData
})

export const fetchPositionFailed= () => ({
    type: actionTypes.FETCH_POSITION_FAILED,
})

export const fetchRoleSuccess = (roleData) => ({
    type: actionTypes.FETCH_ROLE_SUCCESS,
    data: roleData
})

export const fetchRoleFailed= () => ({
    type: actionTypes.FETCH_ROLE_FAILED,
})

export const fetchPositionStart = () => {
    return async (dispatch, getState) => {
        try{
            let res = await getAllCodeService("POSITION")
            if(res&& res.errCode === 0) {
                
                dispatch (fetchPositionSuccess(res.data))
            }else{
                dispatch (fetchPositionFailed())
            }
         }catch(e){
             dispatch (fetchPositionFailed())
             console.log('fetchPositionStart error', e);
         }
     }
    }

    export const fetchRoleStart = () => {
        return async (dispatch, getState) => {
            try{
                let res = await getAllCodeService("ROLE")
                if(res&& res.errCode === 0) {
                    
                    dispatch (fetchRoleSuccess(res.data))
                }else{
                    dispatch (fetchRoleFailed())
                }
             }catch(e){
                 dispatch (fetchRoleFailed())
                 console.log('fetchRoleFailed error', e);
             }
         }
        }
    
    export const createNewUser = (data) => {
        return async (dispatch, getState) => {
            try{
                let res = await createNewUserService(data);
                
                if(res&& res.errCode === 0) {
                    toast.success("Create a new user success")
                    dispatch (saveUserSuccess())
                    dispatch (fetchAllUsersStart())
               
                }else{
                    
                    dispatch (saveUserFailed())
                }
             }catch(e){
              
                 dispatch (saveUserFailed())
                 console.log('saveUserFailed error', e);
             }
         }
        }
    
    export const saveUserSuccess = () => ({
        type: actionTypes.CREATE_USER_SUCCESS
    })

    export const saveUserFailed = () => ({
        type: actionTypes.CREATE_USER_FAILED
    })

    export const fetchAllUsersStart = () => {
        return async (dispatch, getState) => {
            try{
                let res = await getAllUsers("ALL")
               
                if(res&& res.errCode === 0) {
                    dispatch (fetchAllUsersSuccess(res.users.reverse()))
                }else{
                    toast.error("Fetch all user error!")
                    dispatch (fetchAllUsersFailed())
                }
             }catch(e){
                 toast.error("Fetch all user error!")
                 dispatch (fetchAllUsersFailed())
                 console.log('fetchAllUsersFailed error', e);
             }
         }
        }

        export const fetchAllUsersSuccess = (data) => ({
            type: actionTypes.FETCH_ALL_USERS_SUCCESS,
            users: data
        })

        export const fetchAllUsersFailed = () => ({
            type: actionTypes.FETCH_ALL_USERS_FAILED,
           
        })

        export const deleteAUser = (userId) => {
            return async (dispatch, getState) => {
                try{
                    let res = await deletUserService(userId);
                    
                    if(res&& res.errCode === 0) {
                        toast.success("Delete the user success")
                        dispatch (deleteUserSuccess())
                        dispatch (fetchAllUsersStart())
                   
                    }else{
                        toast.error("Delete the user error")
                        dispatch (deleteUserFailed())
                    }
                 }catch(e){
                    toast.error("Delete the user error")
                     dispatch (deleteUserFailed())
                     console.log('deleteUserFailed error', e);
                 }
             }
            }
export const deleteUserSuccess = () => ({
    type: actionTypes.DELETE_USER_SUCCESS
})

export const deleteUserFailed= () => ({
    type: actionTypes.DELETE_USER_FAILED
})

export const editAUser = (userId) => {
    return async (dispatch, getState) => {
        try{
            let res = await editUserService(userId);
            
            if(res&& res.errCode === 0) {
                toast.success("Update the user success")
                dispatch (editUserSuccess())
                dispatch (fetchAllUsersStart())
           
            }else{
                toast.error("Update the user error")
                dispatch (editUserFailed())
            }
         }catch(e){
            toast.error("Update the user error")
             dispatch (editUserFailed())
             console.log('saveUserFailed error', e);
         }
     }
    }

export const editUserSuccess = () => ({
      type: actionTypes.EDIT_USER_SUCCESS,
})
export const editUserFailed = () => ({
    type: actionTypes.EDIT_USER_FAILED
})
// let res1 = await getTopDoctorHomeService(3)

export const fetchTopDoctor = () => {
    return async (dispatch, getState) => {
        try{
         let res = await getTopDoctorHomeService('')
         if(res && res.errCode === 0){
             dispatch({
                 type: actionTypes.FETCH_TOP_DOCTORS_SUCCESS,
                 dataDoctors: res.data
             })
         }else{
             dispatch({
                type: actionTypes.FETCH_TOP_DOCTORS_FAILED,
             })   

         }
            
         }catch(e){
             console.log('FETCH_TOP_DOCTORS_FAILED',e)
            dispatch({
                type: actionTypes.FETCH_TOP_DOCTORS_FAILED,
             })   
         }
     }
    }


    export const fetchAllDoctors = () => {
        return async (dispatch, getState) => {
            try{
             let data = await getAllDoctors();
             let res = data.doctors; 
             if(res && res.errCode === 0){
                 dispatch({
                     type: actionTypes.FETCH_ALL_DOCTORS_SUCCESS,
                     dataDoctors: res.data,
                     
                 })
               
                 
             }else{
                 dispatch({
                    type: actionTypes.FETCH_ALL_DOCTORS_FAILED,
                 })   
    
             }
                
             }catch(e){
                 console.log('FETCH_ALL_DOCTORS_FAILED',e)
                dispatch({
                    type: actionTypes.FETCH_ALL_DOCTORS_FAILED,
                 })   
             }
         }
        }

        export const saveDetailDoctor= (data) => {
            return async (dispatch, getState) => {
                try{
                 let res = await saveDetailDoctorService (data);
               
                 if(res && res.errCode === 0){
                     toast.success("Save Infor Detail Doctor succeed!")
                     dispatch({
                         type: actionTypes.SAVE_DETAIL_DOCTOR_SUCCESS,
                         
                     })
                   
                     
                 }else{
                    toast.error("Save Infor Detail Doctor error!")
                     dispatch({
                        type: actionTypes.SAVE_DETAIL_DOCTOR_FAILED,
                     })   
        
                 }
                    
                 }catch(e){
                    toast.error("Save Infor Detail Doctor error!")
                     console.log('SAVE_DETAIL_DOCTOR_FAILED',e)
                    dispatch({
                        type: actionTypes.SAVE_DETAIL_DOCTOR_FAILED,
                     })   
                 }
             }
            }

            export const fetchAllScheduleTime = () => {
                return async (dispatch, getState) => {
                    try{
                     let res = await getAllCodeService("TIME");
                     if(res && res.errCode === 0){
                         dispatch({
                             type: actionTypes.FETCH_ALLCODE_SCHEDULE_TIME_SUCCESS,
                             dataTime: res.data,
                            
                             
                         })
                         
                         
                     }else{
                         dispatch({
                            type: actionTypes.FETCH_ALLCODE_SCHEDULE_TIME_FAILED,
                         })   
            
                     }
                        
                     }catch(e){
                         console.log('FETCH_ALLCODE_SCHEDULE_TIME_FAILED',e)
                        dispatch({
                            type: actionTypes.FETCH_ALLCODE_SCHEDULE_TIME_FAILED,
                         })   
                     }
                 }
                }
        
                export const getRequiredDoctorInfor= () => {
                  
                    return async (dispatch, getState) => {
                        try{
                            dispatch({
                              type: actionTypes.FETCH_REQUIRED_DOCTOR_INFOR_START
                            })
                            let resPrice = await getAllCodeService("PRICE")
                            let resPayment = await getAllCodeService("PAYMENT")
                            let resProvince = await getAllCodeService("PROVINCE")
                            if(resPrice && resPrice.errCode === 0
                                && resPayment && resPayment.errCode === 0
                                && resProvince && resProvince.errCode === 0 ) {
                                    let data = {
                                        resPrice: resPrice.data,
                                        resPayment: resPayment.data,
                                        resProvince: resProvince.data
                                    }
                               dispatch (fetchRequiredDoctorInforSuccess(data))
                               
                            }else{
                                dispatch (fetchRequiredDoctorInforFailed())
                            }
                         }catch(e){
                             dispatch (fetchRequiredDoctorInforFailed())
                             console.log('fetchRequiredDoctorInfor error', e);
                         }
                     }
                    }
                   
                
                export const fetchRequiredDoctorInforSuccess = (allRequiredData) => ({
                    type: actionTypes.FETCH_REQUIRED_DOCTOR_INFOR_SUCCESS,
                    data: allRequiredData
                })
                
                export const fetchRequiredDoctorInforFailed = () => ({
                    type: actionTypes.FETCH_REQUIRED_DOCTOR_INFOR_FAILED,
                })
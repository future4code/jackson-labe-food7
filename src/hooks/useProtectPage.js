import { useLayoutEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { goToLogin } from '../Router/GoToPages'

export const useProtectPage =()=>{
    const history = useHistory()
    useLayoutEffect(()=>{
        const token = localStorage.getItem('token')
        if(!token){goToLogin(history)}
    },[history])
}
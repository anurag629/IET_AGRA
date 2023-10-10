import { Button, Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { unSetUserToken } from '../../../features/authSlice';
import { getToken, removeToken } from '../../../services/LocalStorageService';
import { useGetLoggedUserQuery } from '../../../services/userAuthApi';
import { useEffect, useState } from 'react';
import { setUserInfo, unsetUserInfo } from '../../../features/userSlice';

const Profile = () => {
    const handleLogout = () => {
        dispatch(unsetUserInfo({ name: "", email: "", phone: "", user_type: "", id: null }))
        dispatch(unSetUserToken({ access_token: null }))
        removeToken()
        navigate('/login')
    }
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { access_token } = getToken()
    const { data, isSuccess } = useGetLoggedUserQuery(access_token)

    const [userData, setUserData] = useState({
        email: "",
        name: "",
        phone: "",
        user_type: "",
        id: null
    })

    // Store User Data in Local State
    useEffect(() => {
        if (data && isSuccess) {
            setUserData({
                email: data.email,
                name: data.name,
                phone: data.phone,
                user_type: data.user_type,
                id: data.id
            })
        }
    }, [data, isSuccess])

    // Store User Data in Redux Store
    useEffect(() => {
        if (data && isSuccess) {
            dispatch(setUserInfo({
                email: data.email,
                name: data.name,
                phone: data.phone,
                user_type: data.user_type,
                id: data.id
            }))
        }
    }, [data, isSuccess, dispatch])


    console.log(userData)
    const userTypes = {
        1: "Admin",
        2: "Student",
        3: "Teacher",
        4: "Staff"
    }

    return (
        <>
            <Box
                container
                justifyContent='center'
                component='form'
                noValidate
                sx={{ mt: 1, width: '100%' }} // Set width to 100%
                id='registration-form'
                className="p-8"
            >
                <h2 className="text-3xl font-bold mb-4 w-full">ID: {userData.id}</h2>
                <h2 className="text-lg font-medium mb-2">User Type: {userTypes[userData.user_type]}</h2>
                <h2 className="text-lg font-medium mb-2">Name: {userData.name}</h2>
                <h2 className="text-lg font-medium mb-2">Email: {userData.email}</h2>
                <h2 className="text-lg font-medium mb-2">Phone: {userData.phone}</h2>

                <Button variant='contained' color='warning' size='large' onClick={handleLogout} sx={{ mt: 8 }}>Logout</Button>

            </Box>
        </>
    );
};

export default Profile;
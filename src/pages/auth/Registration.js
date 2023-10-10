import React from 'react';
import { TextField, FormControlLabel, Checkbox, Button, Box, Alert, Typography, CircularProgress, MenuItem } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRegisterUserMutation } from '../../services/userAuthApi'
import { storeToken } from '../../services/LocalStorageService';

const Registration = () => {
  const [server_error, setServerError] = useState({})

  const navigate = useNavigate();

  const [userType, setUserType] = React.useState('');

  const handleChange = (event) => {
    setUserType(event.target.value);
  };

  const userTypes = [
    { value: 1, label: 'Admin' },
    { value: 2, label: 'Student' },
    { value: 3, label: 'Teacher' },
    { value: 4, label: 'Staff' },
  ];

  const [registerUser, { isLoading }] = useRegisterUserMutation()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      // user_type accepts a integer value
      user_type: parseInt(data.get('user_type')),
      name: data.get('name'),
      email: data.get('email'),
      phone: data.get('phone'),
      password: data.get('password'),
      password2: data.get('password2'),
    }

    const res = await registerUser(actualData)
    if (res.error) {
      setServerError(res.error.data.errors)
    }
    if (res.data) {
      console.log(typeof (res.data))
      console.log(res.data)
      storeToken(res.data.token)
      navigate('/dashboard')
    }
  }
  return <>
    <Box container justifyContent='center' component='form' noValidate sx={{ mt: 1 }} id='registration-form' onSubmit={handleSubmit} className="p-8">
      {/* DropDown for user_type */}
      <TextField
        id="user_type"
        name="user_type"
        select
        label="User Type"
        helperText="Please select your user type"
        variant="outlined"
        margin='normal'
        fullWidth
        value={userType}
        onChange={handleChange}
      >
        {userTypes.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      {server_error.user_type ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.user_type[0]}</Typography> : ""}

      <TextField margin='normal' required fullWidth id='name' name='name' label='Name' />
      {server_error.name ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.name[0]}</Typography> : ""}
      <TextField margin='normal' required fullWidth id='email' name='email' label='Email Address' />
      {server_error.email ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.email[0]}</Typography> : ""}
      <TextField margin='normal' required fullWidth id='phone' name='phone' label='Phone Number' />
      {server_error.phone ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.phone[0]}</Typography> : ""}
      <TextField margin='normal' required fullWidth id='password' name='password' label='Password' type='password' />
      {server_error.password ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.password[0]}</Typography> : ""}
      <TextField margin='normal' required fullWidth id='password2' name='password2' label='Confirm Password' type='password' />
      {server_error.password2 ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.password2[0]}</Typography> : ""}
      <FormControlLabel control={<Checkbox value={true} color="primary" name="tc" id="tc" />} label="I agree to term and condition." />
      {server_error.tc ? <span style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.tc[0]}</span> : ""}
      <Box textAlign='center'>
        {isLoading ? <CircularProgress /> : <Button type='submit' variant='contained' sx={{ mt: 2, mb: 2, px: 5 }}>Join</Button>}
      </Box>
      {server_error.non_field_errors ? <Alert severity='error'>{server_error.non_field_errors[0]}</Alert> : ''}
    </Box>
  </>;
};

export default Registration;

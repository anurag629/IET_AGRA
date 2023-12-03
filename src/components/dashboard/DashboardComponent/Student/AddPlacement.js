import React, { useState } from 'react';
import { Box, TextField, MenuItem, Typography, Checkbox, Button, CircularProgress } from '@mui/material';

function AddCourse() {
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        company_name: "",
        company_email: "",
        company_salary: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const token = localStorage.getItem('access_token');
        var reqHeaders = new Headers();

        reqHeaders = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        };
        
        const response = fetch("https://placement-site.onrender.com/api/tnp/placement-create/", {
            method: 'POST',
            headers: reqHeaders,
            body: JSON.stringify(formData),
            redirect: 'follow'
        })
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    };

    return (
        <Box
            container
            justifyContent='center'
            component='form'
            noValidate
            sx={{ mt: 1 }}
            id='registration-form'
            onSubmit={handleSubmit}
            className="p-8"
            inputMode='text'
        >
            <TextField
                margin='normal'
                required
                fullWidth
                id='name'
                name='name'
                label='Student Name'
                value={formData.user}
                onChange={handleChange}
                inputMode='text'
            />

            <TextField
                margin='normal'
                required
                fullWidth
                id='company_name'
                name='company_name'
                label='Company Name'
                value={formData.company_name}
                onChange={handleChange}
            />

            <TextField
                margin='normal'
                required
                fullWidth
                id='company_email'
                name='company_email'
                label='Company Email'
                value={formData.company_email}
                onChange={handleChange}
            />

            <TextField
                margin='normal'
                required
                fullWidth
                id='company_salary'
                name='company_salary'
                label='Salary'
                value={formData.company_salary}
                onChange={handleChange}
            />

            <Box textAlign='center'>
                {isLoading ? <CircularProgress /> : <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }}>Add Course</Button>}
            </Box>
        </Box>
    );
}

export default AddCourse;

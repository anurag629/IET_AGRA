import React, { useState } from 'react';
import { Box, TextField, MenuItem, Typography, Checkbox, Button, CircularProgress } from '@mui/material';

function AddCourse() {
    const [formData, setFormData] = useState({
        name: "",
        course_name: "",
        course_description: "",
        course_duration: "",
        course_fee: "",
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
        
            const response = fetch("https://placement-site.onrender.com/api/tnp/courses/create/", {
                method: 'POST',
                headers: reqHeaders,
                body: JSON.stringify(formData),
                redirect: 'follow'  
            })
              .then(response => response.text())
              .then(result => console.log(result))
              .catch(error => console.log('error', error));
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
        >
            <TextField
                margin='normal'
                required
                fullWidth
                id='name'
                name='name'
                label='Student Name'
                value={formData.name}
                onChange={handleChange}
                inputMode='text'
            />

            <TextField
                margin='normal'
                required
                fullWidth
                id='course_name'
                name='course_name'
                label='Course Name'
                value={formData.course_name}
                onChange={handleChange}
            />

            <TextField
                margin='normal'
                required
                fullWidth
                id='course_description'
                name='course_description'
                label='Course Description'
                value={formData.course_description}
                onChange={handleChange}
            />

            <TextField
                margin='normal'
                required
                fullWidth
                id='course_duration'
                name='course_duration'
                label='Course Duration'
                value={formData.course_duration}
                onChange={handleChange}
            />

            <TextField
                margin='normal'
                required
                fullWidth
                id='course_fee'
                name='course_fee'
                label='Course Fee'
                value={formData.course_fee}
                onChange={handleChange}
            />

            <Button type='submit' variant='contained' sx={{ mt: 2, mb: 2, px: 5 }}>
                Add Course
            </Button>
        </Box>
    );
}

export default AddCourse;

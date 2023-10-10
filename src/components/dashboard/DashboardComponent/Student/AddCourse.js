import React, { useState } from 'react';
import { Box, TextField, MenuItem, Typography, Checkbox, Button, CircularProgress } from '@mui/material';

function AddCourse() {
    const [studentName, setStudentName] = useState('');
    const [courseName, setCourseName] = useState('');
    const [courseDescription, setCourseDescription] = useState('');
    const [courseDuration, setCourseDuration] = useState('');
    const [courseFee, setCourseFee] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you can handle the submission of the form data, for example by sending it to a server or updating the state of a parent component
        console.log(`Submitted data:
            Student Name: ${studentName}
            Course Name: ${courseName}
            Course Description: ${courseDescription}
            Course Duration: ${courseDuration}
            Course Fee: ${courseFee}
        `);
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
                value={studentName}
                onChange={(event) => setStudentName(event.target.value)}
            />

            <TextField
                margin='normal'
                required
                fullWidth
                id='course-name'
                name='course-name'
                label='Course Name'
                value={courseName}
                onChange={(event) => setCourseName(event.target.value)}
            />

            <TextField
                margin='normal'
                required
                fullWidth
                id='course-description'
                name='course-description'
                label='Course Description'
                value={courseDescription}
                onChange={(event) => setCourseDescription(event.target.value)}
            />

            <TextField
                margin='normal'
                required
                fullWidth
                id='course-duration'
                name='course-duration'
                label='Course Duration'
                value={courseDuration}
                onChange={(event) => setCourseDuration(event.target.value)}
            />

            <TextField
                margin='normal'
                required
                fullWidth
                id='course-fee'
                name='course-fee'
                label='Course Fee'
                value={courseFee}
                onChange={(event) => setCourseFee(event.target.value)}
            />

            <Button type='submit' variant='contained' sx={{ mt: 2, mb: 2, px: 5 }}>
                Add Course
            </Button>
        </Box>
    );
}

export default AddCourse;

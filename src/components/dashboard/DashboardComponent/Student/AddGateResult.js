import React, { useState } from 'react';
import { Box, TextField, MenuItem, Typography, Checkbox, Button, CircularProgress } from '@mui/material';

function AddCourse() {
    const [formData, setFormData] = useState({
        student_name: "",
        student_batch: "",
        roll_number: "",
        student_photo: "",
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
        
            const response = fetch("https://project-iet-tnp-bk.vercel.app/api/gate/gate-create/", {
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
        <div>
            <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js"></script>
            <iframe 
                className="airtable-embed airtable-dynamic-height" 
                src="https://airtable.com/embed/appZduFY0weOWiejW/shrF8ucBHliPSJRwJ?backgroundColor=cyan" 
                frameborder="0" 
                onmousewheel="" 
                width="1000px"
                height="1717" 
                style={{background: 'transparent', border: '1px solid #ccc'}}
                >

            </iframe>
        </div>
    );
}

export default AddCourse;

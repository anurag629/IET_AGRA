import React, { useState } from 'react';
import { Box, TextField, MenuItem, Typography, Checkbox, Button, CircularProgress } from '@mui/material';

function AddCourse() {
    // const [isLoading, setIsLoading] = useState(false);
    // const [formData, setFormData] = useState({
    //     name: "",
    //     company_name: "",
    //     company_email: "",
    //     company_salary: "",
    // });

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({ ...formData, [name]: value });
    // };

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     const token = localStorage.getItem('access_token');
    //     var reqHeaders = new Headers();

    //     reqHeaders = {
    //         "Content-Type": "application/json",
    //         "Authorization": `Bearer ${token}`,
    //     };

    //     const response = fetch("https://placement-site.onrender.com/api/tnp/placement-create/", {
    //         method: 'POST',
    //         headers: reqHeaders,
    //         body: JSON.stringify(formData),
    //         redirect: 'follow'
    //     })
    //         .then(response => response.text())
    //         .then(result => console.log(result))
    //         .catch(error => console.log('error', error));

    //     setIsLoading(true);
    //     setTimeout(() => {
    //         setIsLoading(false);
    //     }, 2000);
    // };

    return (

        <div>
                <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js"></script>
                <iframe 
                    class="airtable-embed airtable-dynamic-height" 
                    src="https://airtable.com/embed/appZduFY0weOWiejW/shr1vyd4U6kgV6hm5?backgroundColor=cyan" 
                    frameborder="0" 
                    onmousewheel="" 
                    width="1000px"
                    height="1533" 
                    style={{background: 'transparent', border: '1px solid #ccc'}}
                    >

                </iframe>
        </div>
        
    
    );
}

export default AddCourse;

import './App.css';
import React, { useState } from 'react';

import Form from './Components/Form';
import Todo from './Components/Todo';
import Card from './Components/Card';
import FetchData from './Components/FetchData';
import Fullyear from './Components/Fullyear';

function App() {
    const [formData, setFormData] = useState(null);

    const handleFormSubmit = (data) => {
        setFormData(data);
    };

    return (
        <>
            <FetchData />
       
            <Todo formData={formData} />
            <Form onSubmit={handleFormSubmit} />
            <Card/>
     
        </>
    );
}

export default App;

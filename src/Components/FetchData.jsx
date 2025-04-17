import React, { useEffect, useState } from 'react';

const FetchData = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => {
                // Ensure the data is always an array
                setData(Array.isArray(json) ? json : [json]);
                console.log('Fetched data:', json);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setError('Failed to load data.');
            });
    }, []);

    if (error) {

        return <p>{error}</p>;
    }
    if (data.length === 0) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>Fetched Data</h1>
            <div>
                {data.map(todo => (
                    <div key={todo.id}>
                        <p><strong>ID:</strong> {todo.id}</p>
                        <p><strong>Title:</strong> {todo.title}</p>
                        <p><strong>Completed:</strong> {todo.completed ? 'Yes' : 'No'}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FetchData;

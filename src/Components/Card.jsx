import React from 'react';

const Card = () => {
    return (
        <div style={styles.card}>
            <img 
                src="https://www.esikkimtourism.in/wp-content/uploads/2019/03/gangtok-tour-boxx.jpg" 
                alt="Scenic View" 
                style={styles.image} 
            />
            <h2 style={styles.title}>Explore Gangtok</h2>
            <p style={styles.text}>
                Discover the beauty of Gangtok with its serene landscapes and vibrant culture.
            </p>
            <button style={styles.button}>Learn More</button>
        </div>
    );
};

const styles = {
    card: {
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
        maxWidth: '300px',
        textAlign: 'center',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        margin: '16px auto',
    },
    image: {
        width: '100%',
        borderRadius: '8px',
    },
    title: {
        fontSize: '1.5rem',
        margin: '16px 0 8px',
    },
    text: {
        fontSize: '1rem',
        color: '#555',
        marginBottom: '16px',
    },
    button: {
        padding: '10px 16px',
        fontSize: '1rem',
        color: '#fff',
        backgroundColor: '#007BFF',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
};

export default Card;
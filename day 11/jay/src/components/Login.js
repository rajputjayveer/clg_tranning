import { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

export default function Login() {
    const [form, setForm] = useState({ email: '', password: '' });
    const navigate = useNavigate(); // Use the hook correctly

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault(); // Fixed typo
        try {
            const res = await axios.post('http://localhost:5000/api/auth/login', form);
            localStorage.setItem('token', res.data.token);
            alert("login");

            navigate('/'); // Use navigate function
        } catch (error) {
            alert(error.response.data.message); // Use the correct property for error
        }
    }

    return (
        <form onSubmit={handleSubmit} style={{
            background: '#fff',
            borderRadius: '12px',
            boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
            padding: '2rem',
            maxWidth: 400,
            margin: '4rem auto',
            fontFamily: 'Poppins, sans-serif'
        }}>
            <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', color: '#1e1e1e', fontWeight: 600 }}>Login</h2>
            <input type="email" name="email" placeholder="Email" onChange={handleChange} style={{
                width: '100%',
                padding: '0.75rem',
                marginBottom: '1rem',
                border: '1px solid #eee',
                borderRadius: '6px',
                fontSize: '1rem',
                background: '#f9f9f9'
            }} required />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} style={{
                width: '100%',
                padding: '0.75rem',
                marginBottom: '1.5rem',
                border: '1px solid #eee',
                borderRadius: '6px',
                fontSize: '1rem',
                background: '#f9f9f9'
            }} required />
            <button type="submit" style={{
                width: '100%',
                padding: '0.75rem',
                background: '#000',
                color: '#fff',
                border: 'none',
                borderRadius: '6px',
                fontWeight: 600,
                fontSize: '1.1rem',
                letterSpacing: '1px',
                transition: 'background 0.2s',
                cursor: 'pointer'
            }}>Login</button>
        </form>
    )
}
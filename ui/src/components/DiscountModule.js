import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DiscountModule.css';

const DiscountModule = () => {
    const [discountedAddresses, setDiscountedAddresses] = useState([]);
    const [address, setAddress] = useState('');
    const [discountRate, setDiscountRate] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetchDiscountedAddresses();
    }, []);

    const fetchDiscountedAddresses = async () => {
        try {
            const response = await axios.get('/api/discounts');
            setDiscountedAddresses(response.data);
        } catch (error) {
            console.error('Error fetching discounted addresses:', error);
        }
    };

    const handleAddDiscount = async () => {
        try {
            const response = await axios.post('/api/discounts', { address, discountRate });
            setMessage(`Discount added for ${address} at rate ${discountRate}%`);
            fetchDiscountedAddresses();
        } catch (error) {
            console.error('Error adding discount:', error);
            setMessage('Failed to add discount.');
        }
    };

    const handleRevokeDiscount = async (address) => {
        try {
            const response = await axios.delete(`/api/discounts/${address}`);
            setMessage(`Discount revoked for ${address}`);
            fetchDiscountedAddresses();
        } catch (error) {
            console.error('Error revoking discount:', error);
            setMessage('Failed to revoke discount.');
        }
    };

    return (
        <div className="discount-module">
            <h1>Discount Module</h1>
            <div className="form">
                <input 
                    type="text" 
                    placeholder="Enter Address" 
                    value={address} 
                    onChange={(e) => setAddress(e.target.value)} 
                />
                <input 
                    type="number" 
                    placeholder="Enter Discount Rate (%)" 
                    value={discountRate} 
                    onChange={(e) => setDiscountRate(e.target.value)} 
                />
                <button onClick={handleAddDiscount}>Add Discount</button>
            </div>
            <div className="message">
                {message && <p>{message}</p>}
            </div>
            <h2>Discounted Addresses</h2>
            <ul>
                {discountedAddresses.map((item, index) => (
                    <li key={index}>
                        <p>Address: {item.address}</p>
                        <p>Discount Rate: {item.discountRate}%</p>
                        <button onClick={() => handleRevokeDiscount(item.address)}>Revoke Discount</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DiscountModule;

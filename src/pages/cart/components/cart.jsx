import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export const Cart = () => {
    const goTo = useNavigate();
    const { id } = useParams()
    let cart = data.find(item => item.id == id);
    return (
        <div>
            
        </div>
    );
};


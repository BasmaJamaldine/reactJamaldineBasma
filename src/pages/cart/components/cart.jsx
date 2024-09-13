import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import data from "../../../json/data.json";
export const Cart = () => {
  
    const { id } = useParams()
    let cart = data.find(item => item.id == id);
    return (
        <div>
            
        </div>
    );
};


import React from 'react';
import ddrBanner from '../assets/ddrbanner.png';

export default function Header() {
    return (
            <img src={ddrBanner} style={{width: "100%", "max-width": "600px", border: "1px solid red"}} />
    )
}
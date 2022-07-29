import React from 'react'
import './MailButton.css'
import { SiGmail } from "react-icons/si";
//{() => navigator.clipboard.writeText('Copy this text to clipboard')}

const MailButton = () => {
    return (
        <div className='mailbutton-container'>
            <SiGmail />
            <div className='font-m-plus-rounded'>
                daalmega@gmail.com
            </div>
        </div>
    )
}

export default MailButton
import React, { useState, useEffect } from 'react'
import './MailButton.css'
import { SiGmail } from "react-icons/si";
//{() => navigator.clipboard.writeText('Copy this text to clipboard')}

const MailButton = () => {

    function copyMail() {
        navigator.clipboard.writeText("daalmega@gmail.com")
        setTimeLeft(2);
    }

    const [copied, setCopied] = useState(false);

    const [timeLeft, setTimeLeft] = useState(null);

    useEffect(() => {
        if (timeLeft === 0) {
            setCopied(false)
            setTimeLeft(null)
        }

        setCopied(true)
        console.log("Clicked!")
        console.log(timeLeft)

        // exit early when we reach 0
        if (!timeLeft) {
            setCopied(false)
            return
        }

        // save intervalId to clear the interval when the
        // component re-renders
        const intervalId = setInterval(() => {

            setTimeLeft(timeLeft - 1);
        }, 1000);

        // clear interval on re-render to avoid memory leaks
        return () => clearInterval(intervalId);
        // add timeLeft as a dependency to re-rerun the effect
        // when we update it
    }, [timeLeft]);



    return (
        <div onClick={copyMail}>
            <div className='mailbutton-container'>

                {copied ? <div>Text Copied!</div> : <>
                    <SiGmail />
                    <div className='font-m-plus-rounded'>
                        daalmega@gmail.com
                    </div>
                </>}

            </div>
        </div>
    )
}

export default MailButton
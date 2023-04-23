import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
//name, email address, message

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'name') {
            setName(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'message') {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!email || !name || !message) {
            setErrorMessage('Please fill out the form!');
            return;
        }
        if (!validateEmail(email)) {
            setErrorMessage('Invalid Email Address!');
            return;
        }
        if (!name) {
            setErrorMessage('Please input name!');
            return;
        }
        if (!message) {
            setErrorMessage('Please input message!');
            return;
        }

        setName('');
        setEmail('');
        setMessage('');
    };

    const handleBlur = (event) => {
        // Add logic to set error message when a form field loses focus (blur event)
        const { target } = event;
        const inputType = target.name;

        if (inputType === 'name' && !name) {
            setErrorMessage('Please input name!');
        } else if (inputType === 'email' && !validateEmail(email)) {
            setErrorMessage('Invalid Email Address!');
        } else if (inputType === 'message' && !message) {
            setErrorMessage('Please input message!');
        } else {
            setErrorMessage('');
        }
    };

    return (
        <div>
            <h3 id="Contact">Contact Me</h3>
            <div className="wrap">
                <form className="form">
                    <input
                        className="form-control"
                        id="nameInput"
                        value={name}
                        name="name"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        type="text"
                        placeholder="name"
                    />
                    <input
                        className="form-control"
                        id="emailInput"
                        value={email}
                        name="email"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        type="email"
                        placeholder="email"
                    />
                    <textarea
                        className="form-control"
                        id="messageInput"
                        value={message}
                        name="message"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        type="text"
                        placeholder="message"
                    />
                    <div id="submit">
                        <button id="submitForm" type="submit" className="btn btn-primary" onClick={handleFormSubmit}>
                            Submit
                        </button>
                    </div>
                </form>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

/*                    <input
                        className="form-control"
                        id="messageInput"
                        value={message}
                        name="message"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="message"
                    />*/
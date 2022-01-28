import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Modal, Button } from 'react-bootstrap';
import axios from 'axios';
import './AddAdmin.css'

const AddAdmin = () => {
    const location = useLocation();
    document.title=`travel agency -${location.pathname}`;




    const [email, setEmail] = useState('');
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleOnChange = e => {
        const value = e.target.value;
        setEmail(value)

    }

    const handleAddAdmin = e => {
        e.preventDefault();
        axios.put(`https://thawing-waters-18467.herokuapp.com/makeAdmin/${email}`).then(res => res.data ? handleShow() : '')

    }
    return (
        <div>
            <Container  className="pt-5">
            <h2 className='text-center text-light'>Add An Admin</h2>
            <form className='mt-3 pt-2 d-flex justify-content-center py-3' onSubmit={handleAddAdmin}>
                <input required className='adminAdd   my-4 w-25' type="email" onChange={handleOnChange} placeholder='email' name="email" id="email" />
                <button className='adminAdd btncolr px-5 mt-4 fs-3 '>Add </button>
            </form>
            {/* modal for showing confirmation */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Admin Added</Modal.Title>
                </Modal.Header>
                <Modal.Body>We have a new admin in the house!!</Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={handleClose}>
                        Cheers!!
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
        </div>
    );
};

export default AddAdmin;
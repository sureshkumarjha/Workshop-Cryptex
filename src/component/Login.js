import React from 'react';
import {Form , Button } from "react-bootstrap";


function Login(props) {
    return (
        <Form className="ba br3 pa4 shadow-1 custom mt3">
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onChange={props.a} type="email" placeholder="Enter email" />

            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={props.b} type="password" placeholder="Password" />
            </Form.Group>
            <Form.Text className="">
                    We'll never share your email with anyone else.
    </Form.Text>
    {props.error}
            <Button variant="primary" onClick={props.c}>
                Login
  </Button>
        </Form>
    );
}

export default Login;
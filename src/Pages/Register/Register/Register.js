import React, { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Register = () => {
  const {createUser} = useContext(AuthContext);
    const handleSubmit = event => {
        event.preventDefault();
        console.log(event.target);
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,photoURL,email, password);

        createUser(email, password)
        .then(result => {
          const user = result.user;
          console.log(user);
          form.reset()
        })
        .catch( err => {
          console.error(err);
        })
    }
  return (
    <Form onSubmit={handleSubmit} className="shadow p-4 rounded">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your Name</Form.Label>
        <Form.Control type="text" name="name" placeholder="Your name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Photo Url</Form.Label>
        <Form.Control type="text" name="photoURL" placeholder="Photo URL" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Register;

import { useState } from "react";
import { Form, Button, Row, Col, InputGroup } from "react-bootstrap";

export default function Contact() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <div className="p-4">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationFirstName">
            <Form.Label>First name</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="text"
                placeholder="First name"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a first name.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationLastName">
            <Form.Label>Last name</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="text"
                placeholder="Last name"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a last name.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationUsername">
            <Form.Label>Username</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Username"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCity">
            <Form.Label>City</Form.Label>
            <Form.Control required type="text" placeholder="City" />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="3" controlId="validationState">
            <Form.Label>State</Form.Label>
            <Form.Control required type="text" placeholder="State" />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="3" controlId="validationZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control required type="text" placeholder="Zip" />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>

        <Button type="submit">Submit form</Button>
      </Form>
    </div>
  );
}
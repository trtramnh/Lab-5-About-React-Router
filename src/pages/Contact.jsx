import { useState } from "react";
import { Form, Button, Row, Col, InputGroup } from "react-bootstrap";

export default function Contact() {
  // 1 State validated: lưu trạng thái form đã submit chưa
  const [validated, setValidated] = useState(false);

  // 2️ Hàm xử lý submit form
  const handleSubmit = (event) => {
    const form = event.currentTarget;

    // Nếu form không hợp lệ → chặn submit
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }

    // Bật chế độ hiển thị validation UI
    setValidated(true);
  };

  return (
    <div className="p-4">
      {/* 3️ Form chính */}
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        
        {/* 4️ Row 1: First name - Last name - Username */}
        <Row className="mb-3">
          
          {/* First Name */}
          <Form.Group as={Col} md="4" controlId="validationFirstName">
            <Form.Label>First name</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="text"
                placeholder="First name"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a first name.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          {/* Last Name */}
          <Form.Group as={Col} md="4" controlId="validationLastName">
            <Form.Label>Last name</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="text"
                placeholder="Last name"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a last name.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          {/* Username */}
          <Form.Group as={Col} md="4" controlId="validationUsername">
            <Form.Label>Username</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text>@</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Username"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>

        {/* 5️ Row 2: City - State - Zip */}
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

        {/* 6️ Checkbox điều khoản */}
        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>

        {/* 7️ Nút Submit */}
        <Button type="submit">Submit form</Button>
      </Form>
    </div>
  );
}
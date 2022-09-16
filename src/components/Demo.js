import React from 'react'
import Card from 'react-bootstrap/Card';


const Demo = () => {
    return (
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Error 404</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Such Page Not Found</Card.Subtitle>
            <Card.Text>
              Please click Login Page if you already registered or Click Signup
              for registration
            </Card.Text>
            <Card.Link href="/">SignUp</Card.Link>
            <Card.Link href="/login">LogIn</Card.Link>
          </Card.Body>
        </Card>
      );
}

export default Demo
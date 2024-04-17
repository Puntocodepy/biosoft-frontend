import './../assets/scss/auth.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AuthLayout() {
  return (
    <div className='auth-layout'>
        <Container fluid>
          <Row>
            <Col className='border'>sm=8</Col>
            <Col className='border'>sm=4</Col>
          </Row>
        </Container>
    </div>
  );
}

export default AuthLayout;
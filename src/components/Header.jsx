import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Header = () => {
    return (
        <section className='mb-3'>
        <Navbar expand="lg" className="bg-primary py-2">
        <Container fluid>
          <Navbar.Brand className='text-white fw-bold' href='#'>DragonNews24.com</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link className='text-white' href="#action1">Home</Nav.Link>
              <Nav.Link className='text-white' href="#action2">Link</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="secondary">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        </section>
    );
};

export default Header;
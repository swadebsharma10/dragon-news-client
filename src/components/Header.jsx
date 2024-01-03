import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';


const Header = () => {

  const {user, logOut} = useContext(AuthContext);

  const handleLogOut =()=>{
    logOut()
    .then(()=>{
      alert("User LogOut Successfully")
    })
    .catch(error =>{
      console.log(error.message)
    })
  }


    return (
        <section className='mb-3'>
        <Navbar expand="lg" className="bg-primary py-2">
        <Container >
          <Navbar.Brand className='text-white fw-bold' href='#'>DragonNews24.com</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link>
              <Link className='text-white' to='/'>Home</Link>
              </Nav.Link>
              <Nav.Link>
              <Link className='text-white' to='/about'>About</Link>
              </Nav.Link>
            </Nav>
            <div className="d-flex align-items-center gap-2">
             
            {user && user.uid ? <img src={user.photoURL} width={30} height={30} className='rounded-circle' /> :
            <FaUser />
            }

            {user ? <Button onClick={handleLogOut} variant="danger" size="sm">LogOut</Button>
          :
          <Button className='' size='sm' variant='info'><Link className='text-white' to='/login'>Login</Link></Button>
        }
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        </section>
    );
};

export default Header;
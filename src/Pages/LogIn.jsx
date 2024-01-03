import { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const LogIn = () => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

    const {loginUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

   

    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log( email, password);
        setError('');
        setSuccess('');

        loginUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log('login', user);
            alert('User Login Successfully');
            setSuccess('User Login Successfully')
            navigate(from, {replace:true})
        })
        .catch(error =>{
            console.log(error.message);
            setError(error.message)
        })
    }



    return (
        <section>
          <h2>Login</h2>  
          <div>
          <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" required />
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <p className="text-center">already Have account ? <Link to='/register'>Register</Link></p>

         <div className="text-center">
         {success && <p className="text-success">{success}</p> }
         {error && <p className="text-danger">{error}</p> }
         </div>
          </div>
        </section>
    );
};

export default LogIn;
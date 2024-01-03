import { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Register = () => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [accept, setAccept] = useState(false);
    const {createUser, updateUser, verifyEmail} = useContext(AuthContext);

    const handleAccepted = event =>{

      setAccept(event.target.checked)

    }

    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, photo, email, password)
        setError('');
        setSuccess('');

        createUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log('create user', user) ;
            alert('User Created Successfully');
            setSuccess('User Created Successfully');
            handleUpdateUserProfile(name, photo);
            handleEmailVerification();
        })
        .catch(error =>{
            console.log(error.message);
            setError(error.message)
        })
    }

    const handleUpdateUserProfile = (name, photoURL)=>{
      const profile = {
        displayName : name,
        photoURL: photoURL
      }
      updateUser(profile)
      .then(()=>{
      })
      .catch(error =>{
        setError(error.message)
      })
    }

    const handleEmailVerification =()=>{
      verifyEmail()
      .then(()=>{
        alert('Please Verify Your Email')
      })
      .catch(error =>{
        setError(error.message)
      })
    }


    return (
        <section>
        <h2>Register</h2>  
        <div>
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Enter Name" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo Url</Form.Label>
          <Form.Control type="text" name="photo" placeholder="Enter Photo Url" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
         type="checkbox" 
         onClick={handleAccepted}
         label={<>Accept <Link to='/terms'>terms and Condition?</Link></>} 
         />
      </Form.Group>
        <Button variant="primary" type="submit" disabled={!accept}>
          Submit
        </Button>
      </Form>
      <p className="text-center">Already Have account ? <Link to='/login'>Login</Link></p>
      <div className="text-center">
         {success && <p className="text-success">{success}</p> }
         {error && <p className="text-danger">{error}</p> }
         </div>
        </div>
      </section>
    );
};

export default Register;
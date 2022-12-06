import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../store/authSlice';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.auth.user);
  const [email, setEmail] = useState('admin@flatlogic.com');
  const [password, setPassword] = useState('password');

  useEffect(() => {
    if (user.email) {
      navigate('/');
    }
  }, [user.email, navigate]);

  const login = () => {
    const data = {
      email,
      password,
    };
    dispatch(getUser(data));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    login();
  };

  return (
    <Form className="m-auto" style={{ width: '30%' }} onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Login;

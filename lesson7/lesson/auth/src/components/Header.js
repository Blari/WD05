import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../store/authSlice';
import { useEffect } from 'react';

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.auth.user);

  useEffect(() => {
    if (!user.email) {
      navigate('/login');
    }
  }, [user.email, navigate]);

  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Link className={'navbar-brand'}>Navbar</Link>
        <Nav className="me-auto">
          <Link to={'/'} className={'nav-link'}>
            Home
          </Link>
          <Link to={'/users'} className={'nav-link'}>
            Users
          </Link>
          {user.email ? (
            <Link onClick={() => dispatch(logout())} className={'nav-link'}>
              Log Out
            </Link>
          ) : (
            <Link to={'/login'} className={'nav-link'}>
              Log In
            </Link>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;

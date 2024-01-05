import {Navbar, Nav, Container} from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const Navbar1 = ({user}) => {
  const navigate = useNavigate();
  
  const URI = 'http://localhost:8080/users/logout'  
  
  const logout = async () => {
    // try {
        await axios.delete(URI)
        navigate('/')
    // } catch (error) {
        // alert(error.message)
        
    // }
}

    return(

<>
  <Navbar bg="dark" variant="dark">
    <Container>
      <Link to={`/home/${user.userId}`}>
    <Navbar.Brand >App Tasks</Navbar.Brand>
    </Link>
    <Nav className="me-auto">
      
      <Nav.Link ><button onClick={logout} className="btn btn-danger">Logout</button></Nav.Link>
    </Nav>
    </Container>
  </Navbar>
 
</>
    )
}

export default Navbar1;
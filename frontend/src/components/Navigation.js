import { Link } from 'react-router-dom';
import { Navbar, Container, Form, FormControl, Button } from 'react-bootstrap';

const Navigation = () => {
  return (
    <Navbar variant='dark' expand='lg' sticky='top'>
      <Container>
        <Navbar.Brand as={Link} to='/'>
          founderDb
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Form inline className='ml-auto'>
            <FormControl
              type='text'
              placeholder='Search founders or businesses'
              className='mr-sm-2'
              style={{ width: '240px' }}
            />
            <Button variant='outline-danger'>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;

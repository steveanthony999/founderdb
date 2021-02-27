import { Col, Row } from 'react-bootstrap';

import Founder from '../components/Founder';
import founders from '../founders';

const Home = () => {
  return (
    <>
      <Row className='mt-5'>
        {founders.map((founder) => (
          <Col xs={12} sm={6} md={4} lg={3} xl={3} key={founder._id}>
            <Founder founder={founder} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Home;

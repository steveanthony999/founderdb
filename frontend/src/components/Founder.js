import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const Founder = ({ founder }) => {
  return (
    <>
      {/* <Card
        style={{
          border: 'none',
          height: '332px',
          boxShadow: '0 5px 10px rgba(0,0,0,0.15)',
        }}
        text='dark'
        bg='primary'
        className='my-3 p-3'
      >
        <Link
          to={`/founder/${founder._id}`}
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {founder.image === '' ? (
            <div
              style={{
                width: '8rem',
                height: '8rem',
                background: '#2c3e4f',
                borderRadius: '50%',
                border: '4px solid #1abc9b',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <i
                className='fas fa-user-secret'
                style={{ fontSize: '4rem' }}
              ></i>
            </div>
          ) : (
            <Image
              src={founder.image}
              roundedCircle
              style={{
                width: '8rem',
                height: '8rem',
                objectFit: 'cover',
                border: '4px solid #1abc9b',
              }}
            />
          )}
        </Link>
        <Card.Body className='d-flex flex-column justify-content-between'>
          <Card.Title>{founder.name}</Card.Title>
          <Card.Text>{founder.business}</Card.Text>
          <Button variant='outline-success' block>
            More &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <i className='fas fa-arrow-alt-circle-right'></i>
          </Button>
        </Card.Body>
      </Card> */}
      <Link to={`/founder/${founder._id}`}>
        <Card
          style={{
            border: 'none',
            height: '300px',
            boxShadow: '0 5px 10px rgba(0,0,0,0.15)',
            background:
              founder.image === ''
                ? `url(https://static.thenounproject.com/png/1644750-200.png) no-repeat center center/cover`
                : `url(${founder.image}) no-repeat center center/cover`,
          }}
          text='dark'
          bg='primary'
          className='my-3 p-3 image-card d-flex justify-content-end'
        >
          <Card.Title className='text-light align-self-end title-text'>
            {founder.name}
          </Card.Title>
          <Card.Text className='text-light align-self-end title-text'>
            {founder.business}
          </Card.Text>
        </Card>
      </Link>
    </>
  );
};

export default Founder;

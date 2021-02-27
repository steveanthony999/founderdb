import { Row, Col, Card, Button } from 'react-bootstrap';
import founders from '../founders';
import { useEffect, useState } from 'react';

const FounderProfileScreen = ({ match }) => {
  const founder = founders.find((f) => f._id === match.params.id);

  const [isYahooLoaded, setIsYahooLoaded] = useState(false);
  const [isWorldLoaded, setIsWorldLoaded] = useState(false);
  const [isMainLoaded, setIsMainLoaded] = useState(false);
  const [yahoo, setYahoo] = useState();
  const [world, setWorld] = useState();
  const [main, setMain] = useState();

  //   YAHOO NEWS
  //   YAHOO NEWS
  useEffect(() => {
    const founderName = founder.name.replace(' ', '+').toLowerCase();

    fetch(
      `https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete?q="${founderName}"&region=US`,
      {
        method: 'GET',
        headers: {
          'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY_YAHOO,
          'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setYahoo(data.news);
        setIsYahooLoaded(true);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  //   WORLD NEWS
  //   WORLD NEWS
  useEffect(() => {
    const founderName = founder.name.replace(' ', '+').toLowerCase();
    fetch(
      `https://newscatcher.p.rapidapi.com/v1/search?q="${founderName}"&lang=en&sort_by=relevancy&page=1&media=True`,
      {
        method: 'GET',
        headers: {
          'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY_NEWSCATCHER,
          'x-rapidapi-host': 'newscatcher.p.rapidapi.com',
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setWorld(data.articles);
        setIsWorldLoaded(true);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  // MAIN NEWS
  // MAIN NEWS
  useEffect(() => {
    const founderName = founder.name.replace(' ', '+').toLowerCase();
    fetch(
      `https://newsapi.org/v2/everything?q="${founderName}"&apiKey=${process.env.REACT_APP_NEWS_API_KEY}&pageSize=12`
    )
      .then((res) => res.json())
      .then((data) => {
        setMain(data.articles);
        setIsMainLoaded(true);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  //   useEffect(() => {
  //     console.log(main);
  //   }, [main]);

  const profileImage = {
    width: '100%',
    height: '480px',
    background: `url(${founder.image}) no-repeat center center/cover`,
    borderRadius: '20px',
  };

  return (
    <div className='mt-5'>
      <Row>
        <Col sm={12} lg={8}>
          <h1>{founder.name}</h1>
          <div className='d-flex justify-content-between mt-5'>
            <p>{founder.business}</p>
            <div>
              <a
                href={founder.twitter}
                target='_blank'
                rel='noreferrer'
                className='ml-5 social-links'
              >
                <i className='fab fa-twitter'></i>
              </a>
              <a
                href={founder.linkedin}
                target='_blank'
                rel='noreferrer'
                className='ml-5 social-links'
              >
                <i className='fab fa-linkedin-in'></i>
              </a>
            </div>
          </div>
        </Col>
        <Col sm={12} lg={4} className='mt-5'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          quidem in odit fugiat odio accusantium ipsa saepe tempora voluptates
          velit?
        </Col>
      </Row>
      {/* ======================= MAIN ======================= */}
      {/* ======================= MAIN ======================= */}
      {/* ======================= MAIN ======================= */}
      <Row className='mt-5'>
        <Col sm={12} lg={8}>
          <div style={profileImage}></div>
          <p className='mt-5'>{founder.bio}</p>
          <Button variant='danger' size='sm' className='mt-2 mr-2'>
            Follow {founder.name}
          </Button>
          <Button variant='info' size='sm' className='mt-2'>
            Discussion
          </Button>
        </Col>
        {/* ======================= YAHOO NEWS ======================= */}
        {/* ======================= YAHOO NEWS ======================= */}
        {/* ======================= YAHOO NEWS ======================= */}
        <Col sm={12} lg={4}>
          <h3>Yahoo News</h3>
          <br />
          {!isYahooLoaded ? (
            <p>loading...</p>
          ) : (
            <ul>
              {yahoo.map((news) => (
                <li key={news.uuid}>
                  <a href={news.link} target='_blank' rel='noreferrer'>
                    {news.title}
                  </a>
                  <br />
                  <br />
                </li>
              ))}
            </ul>
          )}
        </Col>
        {/* ======================= MAIN NEWS ======================= */}
        {/* ======================= MAIN NEWS ======================= */}
        {/* ======================= MAIN NEWS ======================= */}
        <Col sm={12} lg={8}>
          <h2 className='mt-5'>Top News</h2>
          <br />
          {!isMainLoaded ? (
            <p>loading...</p>
          ) : (
            <div>
              {main.map((news) => (
                <Card
                  className='newscard'
                  style={{ background: 'none' }}
                  className='mt-5'
                  key={news.url}
                >
                  <div className='text-white'>
                    <Card.Img
                      src={news.urlToImage}
                      alt="...Oh no's!  looks like this image failed :("
                      style={{
                        height: '200px',
                        width: '200px',
                        float: 'left',
                        objectFit: 'cover',
                      }}
                      className='mr-4 mb-3'
                    />
                    <h3>{news.title}</h3>
                    <p className='mt-3'>by {news.author}</p>
                    <br />
                    <p>{news.description}</p>
                    <Button
                      href={news.url}
                      target='_blank'
                      rel='noreferrer'
                      block
                      className='mt-3'
                    >
                      Read more at {news.source.name}
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </Col>
        {/* ======================= WORLD NEWS ======================= */}
        {/* ======================= WORLD NEWS ======================= */}
        {/* ======================= WORLD NEWS ======================= */}
        <Col sm={12} lg={4}>
          <h3>News Around the World</h3>
          <br />
          {!isWorldLoaded ? (
            <p>loading...</p>
          ) : (
            world.map((news) => (
              <div key={news._id}>
                <Card bg='primary' className='newscard mb-5'>
                  <Card.Img
                    variant='top'
                    src={
                      news.media === null
                        ? 'https://images.pexels.com/photos/4057663/pexels-photo-4057663.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                        : news.media
                    }
                    alt="...Oh no's!  looks like this image failed :("
                  />
                  <Card.Body>
                    <Card.Title>{news.title}</Card.Title>
                    <Card.Text>{news.summary.substr(0, 200) + '...'}</Card.Text>
                    <Button
                      variant='outline-danger'
                      href={news.link}
                      target='_blank'
                    >
                      Read more...
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            ))
          )}
        </Col>
      </Row>
    </div>
  );
};

export default FounderProfileScreen;

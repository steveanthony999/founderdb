import { Row, Col } from 'react-bootstrap';
import founders from '../founders';
import { useEffect, useState } from 'react';

const FounderProfileScreen = ({ match }) => {
  const founder = founders.find((f) => f._id === match.params.id);

  const [isLoaded, setIsLoaded] = useState(false);
  const [yahoo, setYahoo] = useState();

  useEffect(() => {
    const founderName = founder.name.replace(' ', '+').toLowerCase();
    // fetch(
    //   `https://newsapi.org/v2/everything?q="jack+dorsey"&apiKey=${REACT_APP_NEWS_API_KEY}`
    // )
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));

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
        setIsLoaded(true);
      });
  }, []);

  useEffect(() => {
    // yahoo.map((x) => console.log(x));
    console.log(yahoo);
  }, [yahoo]);

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
      <Row className='mt-5'>
        <Col sm={12} lg={8}>
          <div style={profileImage}></div>
          <p className='mt-5'>{founder.bio}</p>
        </Col>
        <Col sm={12} lg={4}>
          {!isLoaded ? (
            <p>loading...</p>
          ) : (
            yahoo.map((news) => (
              <ul>
                <li key={news.uuid}>
                  <a href={news.link} target='_blank' rel='noreferrer'>
                    {news.title}
                  </a>
                </li>
              </ul>
            ))
          )}
        </Col>
      </Row>
    </div>
  );
};

export default FounderProfileScreen;

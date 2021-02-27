import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

const FounderSignup = () => {
  const [backgroundImage, setBackgroundImage] = useState();

  useEffect(() => {
    fetch(
      `https://api.unsplash.com/search/photos?page=1&query=world&client_id=${process.env.REACT_APP_UNSPLASH_KEY}`
    )
      .then((res) => res.json())
      .then((data) =>
        setBackgroundImage(
          data.results[Math.floor(Math.random() * 10)].urls.regular
        )
      )
      .catch((err) => console.log(err));
  }, []);

  const styles = {
    background: `url(${backgroundImage}) no-repeat center center/cover`,
  };

  const buttonStyle = {
    boxShadow: '0 5px 10px rgba(0,0,0,0.5)',
    borderTop: '2px solid rgba(255,100,100,0.75)',
  };

  return (
    <section id='founder-signup-cta' style={styles}>
      <Button variant='danger' size='lg' style={buttonStyle}>
        Add your founder profile!
      </Button>
    </section>
  );
};

export default FounderSignup;

import React, { useState } from 'react';
import { Redirect, useParams, useHistory, useLocation } from 'react-router-dom';

const About = () => {
  const [anotherEnabled, setAnotherEnabledState] = useState(false);
  const { name } = useParams();
  const query = new URLSearchParams(useLocation().search);
  const history = useHistory();

  const onBtnClick = () => {
    history.goBack();
  };

  const gotoAnotherPage = () => {
    setAnotherEnabledState(true);
  };

  return (
    <div>
        About Page
        Param Value: {name}
        Query Value: {query.get('value')}
        <button onClick={onBtnClick}>Go Back</button>            
        <button onClick={gotoAnotherPage}>Go to Another Page</button>
        {anotherEnabled ? <Redirect to="/another" /> : null }
    </div>
  )
}

export default About;

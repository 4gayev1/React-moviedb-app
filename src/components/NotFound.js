import React from 'react';
import { Link } from 'react-router-dom';
// Styles
import { Image } from './NotFound.styles';

import notFoundImage from '../images/404_page.png';

const Thumb = ({ image }) => (
  <div>
    
      <Link to={`/`}>
        <Image src={notFoundImage} alt='notFoundImage' />
      </Link>
    
  </div>
);

export default Thumb;
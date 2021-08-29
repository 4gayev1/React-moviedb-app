import React from 'react';
import {Link} from 'react-router-dom';

 import FourLogo from '../../images/logo1-white.png';
 import TMDBLogo from '../../images/tmdb_logo.svg';

 import { Wrapper,Content,LogoImg,TMDBLogoImg } from './Header.styles';


 const Header = () =>(
     <Wrapper>
         <Content>
             <Link to='/'>
             <LogoImg src={FourLogo}/>
             </Link>
             <TMDBLogoImg src={TMDBLogo} />
         </Content>
     </Wrapper>
 );

 export default Header;
import styled from 'styled-components';

export const Wrapper = styled.div` `;


export const Image = styled.img`
  width: 100%;
  max-width: 720px;
  transition: all 0.3s;
  object-fit: cover;
  border-radius: 20px;
  margin-top:20px;
  animation: animateThumb 0.5s;

  :hover {
    //transform:scale(1.15);
    transform:translateY(-25px);
  }

  @keyframes animateThumb {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;


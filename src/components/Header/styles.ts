import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;
  flex-wrap: wrap;
  align-content: flex-start;
  a {
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.7;
    }
  }
  @media (max-width: 320px) {
    #items-header {
      align-content: flex-start;
      justify-content: center;
      a {
        margin-bottom: 10px;
      }
    }
  }

`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #fff;
    }

    span {
      font-size: 12px;
      color: #999;
    }
  }
`;

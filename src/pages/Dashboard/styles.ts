import styled from 'styled-components';
import { shade } from 'polished';

const backgroundColor = '#04d361';

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  max-width: 450px;
  line-height: 56px;
  margin-top: 80px;
`;

export const Form = styled.form`
  margin-top: 40px;
  max-width: 700px;
  display: flex;

  input[type='text'] {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 2px solid #fff;
    border-radius: 5px 0px 0px 5px;
    color: #3a3a3a;
    border-right: 0;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  input[type='submit'] {
    width: 160px;
    font-size: 1rem;
    background-color: ${backgroundColor};
    border-radius: 0px 5px 5px 0px;
    border: 0px;
    color: #fff;
    height: 70px;
    font-weight: bold;
    transition: background-color 0.5s;
    cursor: pointer;

    &:hover {
      background-color: ${shade(0.2, backgroundColor)};
    }
  }
`;

export const Repos = styled.section`
  margin-top: 80px;
  max-width: 700px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    transition: transform 0.6s;

    &:hover {
      transform: translateX(12px);
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    aside {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    img,
    svg {
      margin-left: auto;
      color: #cdcdc6;
    }
  }
`;

export const Error = styled.section`
  width: 360px;
  margin: 0 auto;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  background: #ff0000;
  color: #fff;
  border-radius: 5px;
  padding: 24px 10px 24px 10px;
  position: absolute;
  left: 40%;
  text-align: center;
  font-weight: bold;
  transition: transform 0.6s;
  animation: show-up 1.5s forwards;
  /* animation: show-down 1.5s forwards; */

  @keyframes show-up {
    from {
      opacity: 0;
      transform: translate3d(0, -30px, 0);
    }

    to {
      opacity: 1;
      -webkit-transform: translateY(-48px);
      -moz-transform: translateY(-48px);
      -ms-transform: translateY(-48px);
      -o-transform: translateY(-48px);
      transform: translateY(-48px);
    }
  }

  @keyframes show-down {
    from {
      opacity: 1;
      transform: translate3d(0, -30px, 0);
    }

    to {
      opacity: 0;
      -webkit-transform: translateY(38px);
      -moz-transform: translateY(38px);
      -ms-transform: translateY(38px);
      -o-transform: translateY(38px);
      transform: translateY(38px);
    }
  }
`;

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

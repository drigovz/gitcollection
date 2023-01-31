import React from 'react';
import { Title, Form } from './styles';
import { Img } from '../../components/Img';
import { Input } from '../../components/Input';

export const Dashboard: React.FC = () => {
  return (
    <>
      <Img src="../../assets/background.svg" alt="Logo" title="Logo" />
      <Title>Catálogo de repositórios do Github</Title>
      <Form>
        <Input type="text" placeholder="username/repository_name" />
        <Input type="submit" value="Search" />
      </Form>
    </>
  );
};

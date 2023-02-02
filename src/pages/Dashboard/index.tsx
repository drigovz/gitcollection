import React from 'react';
import { Title, Form, Repos } from './styles';
import { Img } from '../../components/Img';
import { Input } from '../../components/Input';
import logo from '../../assets/logo.svg';
import { FiChevronRight } from 'react-icons/fi';
import { api } from '../../services/api';
import IGithubRepository from '../../interfaces/IGithubRepository';

export const Dashboard: React.FC = () => {
  const [repos, setRepos] = React.useState<IGithubRepository[]>([]);
  const [userRepo, setUserRepo] = React.useState('');

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setUserRepo(event.target.value);
  }

  async function handleSubmitForm(event: React.FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    const response = await api.get<IGithubRepository>(`repos/${userRepo}`);

    console.log(response);
  }

  return (
    <>
      <Img src={logo} alt="Logo" title="Logo" />

      <Title>Catálogo de repositórios do Github</Title>
      <Form onSubmit={handleSubmitForm}>
        <Input type="text" placeholder="username/repository_name" onChange={handleInputChange} />
        <Input type="submit" value="Search" />
      </Form>

      <Repos>
        <a href="/repositories">
          <Img src="https://avatars.githubusercontent.com/u/6412038?s=200&v=4" alt="Logo" title="Logo" />
          <aside>
            <strong>drigovz/gitcollecion</strong>
            <p>Repository of mini-course of React.Js</p>
          </aside>

          <FiChevronRight size={20} />
        </a>
      </Repos>
    </>
  );
};

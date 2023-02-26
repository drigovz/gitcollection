import React from 'react';
import { Title, Form, Repos, Error } from './styles';
import { Img } from '../../components/Img';
import { Input } from '../../components/Input';
import logo from '../../assets/logo.svg';
import { FiChevronRight } from 'react-icons/fi';
import { api } from '../../services/api';
import IGithubRepository from '../../interfaces/IGithubRepository';

export const Dashboard: React.FC = () => {
  const [repos, setRepos] = React.useState<IGithubRepository[]>([]);
  const [userRepo, setUserRepo] = React.useState('');
  const [inputError, setInputError] = React.useState('');

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setUserRepo(event.target.value);
  }

  async function handleSubmitForm(event: React.FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    if (!userRepo) {
      setInputError('Informe o username/repository_name');

      // setTimeout(() => {
      //   const elementError = document.getElementById('error');
      //   elementError?.setAttribute('style', 'animation: show-down 1.5s forwards;');
      // }, 6000);
    }

    const response = await api.get<IGithubRepository>(`repos/${userRepo}`);
    const repository = response.data;

    setRepos([repository, ...repos]);

    // clean state of repos
    setUserRepo('');
    return;
  }

  return (
    <>
      <Img src={logo} alt="Logo" title="Logo" />

      <Title>Catálogo de repositórios do Github</Title>

      {inputError && <Error id="error">{inputError}</Error>}

      <Form onSubmit={handleSubmitForm}>
        <Input type="text" placeholder="username/repository_name" onChange={handleInputChange} />
        <Input type="submit" value="Search" />
      </Form>

      <Repos>
        {repos.map(repo => (
          <a href="/repositories" key={repo.full_name}>
            <Img src={repo.owner.avatar_url} alt={repo.owner.login} title={repo.owner.login} />

            <aside>
              <strong>{repo.full_name}</strong>
              <p>{repo.description}</p>
            </aside>

            <FiChevronRight size={20} />
          </a>
        ))}
      </Repos>
    </>
  );
};

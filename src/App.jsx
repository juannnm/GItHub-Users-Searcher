import React, { useEffect, useState } from "react";
import { Container } from '@mui/material';
import Searcher from "./components/Searcher";
import { getGitHubUser } from './services/users'
import UserCard from "./containers/userCard";

const App = () => {

  const [inputUser, setInputUser] = useState('octocat');
  const [userState, setUserState] = useState('inputUser');
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    gettingUser(inputUser)
  },
    [inputUser]);

  const gettingUser = async (user) => {
    const userResponse = await getGitHubUser(user);

    if (userState === 'octocat') {
      localStorage.setItem('octocat', userResponse)
    }
    if (userResponse.message === 'Not Found') {
      const { octocat } = localStorage;
      setInputUser(octocat);
      setNotFound(true);
    } else {
      setUserState(userResponse);
    }
  }

  console.log(userState);



  return (
    <Container sx={{
      width: '80vw',
      height: '500px',

      marginTop: '60px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      background: ' rgba(41, 205, 127, 0.46)',
      borderRadius: '16px',
      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
      backdropFilter: 'blur(7px)',
      webkitBackdropFilter: 'blur(7px)',
      border: '1px solid rgba(41, 205, 127, 1)',
    }} >
      <Searcher inputUser={inputUser} setInputUser={setInputUser} />
      <UserCard userState={userState} />
    </Container>
  )
};

export { App };
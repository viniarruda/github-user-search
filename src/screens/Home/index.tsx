import React from 'react';
import {useQuery} from '@apollo/client';
import styled from 'styled-components';

import {Grid, Avatar} from '../../components';

import {graphqlService} from '../../services';

import {normalizeUserData} from '../../utils/normalizer';

const Title = styled.h1`
  font-size: 20px;
`;

const Home = () => {
  const {loading, data, error} = useQuery(
    graphqlService.queries.GET_USER_INFO,
    {
      variables: {
        login: 'viniarruda',
      },
    }
  );

  const {
    name,
    followers,
    following,
    bio,
    login,
    avatarUrl,
    location,
    starredRepositories,
  } = normalizeUserData(data.user ?? {});

  if (error) return <p>Error: {error} </p>;

  return (
    <Grid>
      {loading ? (
        <p>...Loading</p>
      ) : (
        <Grid>
          <Avatar src={avatarUrl} alt="name" />
          <Title>{name}</Title>
          <p>{login}</p>
          <p>{bio}</p>
          <p>Followers: {followers}</p>
          <p>Following: {following}</p>
          <p>Stars: {starredRepositories}</p>
          <p>{location}</p>
        </Grid>
      )}
    </Grid>
  );
};

export default Home;

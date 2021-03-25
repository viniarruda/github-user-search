import React, { useState, useRef, useEffect } from 'react';
import { useQuery } from '@apollo/client';

import { Grid, Avatar, Spinner, Typography, Button } from '../../components';

import { graphqlService } from '../../services';

import { normalizeUserData } from '../../utils/normalizer';

import routes from '../../routes/constants';

// import { IQueryState } from './interface';

const Home = () => {
  const [inputText, setInputText] = useState<string>('');
  // const [fetchQuery, setFetchQuery] = useState<boolean>(false);
  // const [queryResult, setQueryResult] = useState<IQueryState | null>(null);

  // const keywordHandler = useRef<any>(null);

  const onChange = (keyword: string) => {
    // if (keywordHandler.current) {
    //   clearTimeout(keywordHandler.current);
    // }
    // keywordHandler.current = setTimeout(() => {
    //   setInputText(keyword);
    // }, 500);

    setInputText(keyword);
  };

  const { loading, data, error } = useQuery(
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
  } = normalizeUserData(data?.user ?? {});

  if (error) return <p>Error: {error} </p>;

  return (
    <Grid flexDirection="column" justifyContent="center">
      <Spinner loading={loading} />
      <Grid flexDirection="column" flex={1} p="0 40px" justifyContent="center">
        <Grid>
          <div>Search:</div>
          <input
            value={inputText}
            onChange={(e) => onChange(e.target.value)}
            placeholder="github username"
          />
        </Grid>
      </Grid>
      {data?.user && (
        <Grid flexDirection="column" justifyContent="center">
          <Grid flexDirection="row" flex={1} width="100%" p="40px 20px">
            <Grid
              flexDirection="column"
              flex={1}
              border="2px solid #eee"
              p="40px 20px"
              justifyContent="center">
              <Grid flex={1} flexDirection="column" justifyContent="center">
                <Avatar src={avatarUrl} alt="name" />
                <Typography variant="title">{name}</Typography>
                <Typography
                  variant="subtitle"
                  color="secondary"
                  fontWeight="normal">
                  {login}
                </Typography>
                <Typography variant="paragraph">{bio}</Typography>
              </Grid>
              <Grid
                m="0 0 20px 0"
                flex={1}
                width="80%"
                justifyContent="space-between">
                <Grid>Followers: {followers}</Grid>
                <Grid>Following: {following}</Grid>
                <Grid>Stars: {starredRepositories}</Grid>
              </Grid>
              <Grid>
                <Grid>{location}</Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid m="20px 0" width="100%">
            <Button
              color="primary"
              labelColor="reverse"
              to={routes.REPO_DETAILS}>
              See repositories
            </Button>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

export default Home;

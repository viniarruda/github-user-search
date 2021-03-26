import React, { useState, useRef, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';

import {
  Grid,
  Avatar,
  Spinner,
  Typography,
  Button,
  Input,
} from '../../components';
import { graphqlService } from '../../services';
import { normalizeUserData } from '../../utils/normalizer';
import routes from '../../routes/constants';

const Home = () => {
  const [inputText, setInputText] = useState<string>('');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const keywordHandler = useRef<any>(null);
  const [getUser, { loading, data, error }] = useLazyQuery(
    graphqlService.queries.GET_USER_INFO
  );

  useEffect(() => {
    if (inputText) {
      getUser({
        variables: {
          login: inputText,
        },
      });
    }
  }, [inputText, getUser]);

  const onChange = (keyword: string) => {
    if (keywordHandler.current) {
      clearTimeout(keywordHandler.current);
    }
    keywordHandler.current = setTimeout(() => {
      setInputText(keyword);
    }, 500);
  };

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

  if (loading) return <Spinner testID="loading" loading={loading} />;

  return (
    <Grid flexDirection="column" justifyContent="center">
      <Grid flexDirection="column" flex={1} p="0 40px" justifyContent="center">
        <Grid>
          <div>Search:</div>
          <Input
            testID="inputUsername"
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
              textColor="reverse"
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

import React, { useState, useRef, useEffect } from 'react';
import { useQuery } from '@apollo/client';

import { Grid, Avatar, Spinner } from '../../components';

import { graphqlService } from '../../services';

import { normalizeUserData } from '../../utils/normalizer';

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
  } = normalizeUserData(data.user ?? {});

  if (error) return <p>Error: {error} </p>;

  return (
    <Grid>
      <Spinner loading={loading} />
      {data.user && (
        <Grid>
          <input value={inputText} onChange={(e) => onChange(e.target.value)} />
          <Avatar src={avatarUrl} alt="name" />
          <p>{name}</p>
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

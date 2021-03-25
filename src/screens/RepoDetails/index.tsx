import { useState } from 'react';

import { useQuery } from '@apollo/client';

import { Grid, Spinner, Card } from '../../components';

import { graphqlService } from '../../services';

import {
  IRepositoryDetails,
  DIRECTION_TYPES,
  FIELD_TYPES,
} from '../../interfaces';

const RepoDetails = () => {
  const [fieldsValue, setFieldsValue] = useState<string>('stars');
  const [directionValue, setDirectionValue] = useState<string>('desc');

  const { loading, data, error } = useQuery(
    graphqlService.queries.GET_REPO_DETAILS,
    {
      variables: {
        field: FIELD_TYPES.STARGAZERS,
        direction: DIRECTION_TYPES.DESC,
      },
    }
  );

  if (error) return <p>Error: {error} </p>;

  if (loading) return <Spinner loading={loading} />;

  const onSelectedFields = (value: string) => {
    setFieldsValue(value);
  };

  const onSelectedDirection = (value: string) => {
    setDirectionValue(value);
  };

  const viewer = data?.viewer;

  const repos = data?.viewer?.repositories?.nodes || [];

  return (
    <Grid p="20px 20px" flex={1} flexDirection="column" justifyContent="center">
      {viewer && (
        <>
          <Grid>
            <Grid flexDirection="column">
              <p>Filters</p>
              <Grid flex={1}>
                <div>By:</div>
                <select
                  value={fieldsValue}
                  onChange={(e) => onSelectedFields(e.target.value)}>
                  <option selected value="stars">
                    Stars
                  </option>
                  <option value="stars">Name</option>
                  <option value="stars">Updated_At</option>
                </select>
                <select
                  value={directionValue}
                  onChange={(e) => onSelectedDirection(e.target.value)}>
                  <option selected value="desc">
                    Desc
                  </option>
                  <option value="asc">Asc</option>
                </select>
              </Grid>
            </Grid>
          </Grid>
          <Grid m="20px 0" flexDirection="column">
            {repos.map((repo: IRepositoryDetails) => (
              <>
                <Card p="10px 0">
                  <Grid>
                    <a href={repo.url}>{repo.name}</a>
                  </Grid>
                  <Grid>
                    <p>{repo.description}</p>
                  </Grid>
                  <Grid>
                    <p>Stars: {repo.stargazerCount}</p>
                  </Grid>
                </Card>
              </>
            ))}
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default RepoDetails;

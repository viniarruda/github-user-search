/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

import { format } from 'date-fns';

import { useLazyQuery } from '@apollo/client';

import { Link } from 'react-router-dom';

import { Grid, Spinner, Card } from '../../components';

import { graphqlService } from '../../services';

import {
  IRepositoryDetails,
  DIRECTION_TYPES,
  FIELD_TYPES,
} from '../../interfaces';
import routes from '../../routes/constants';

const RepoDetails = () => {
  const [fieldsValue, setFieldsValue] = useState<FIELD_TYPES>(FIELD_TYPES.NAME);
  const [directionValue, setDirectionValue] = useState<DIRECTION_TYPES>(
    DIRECTION_TYPES.DESC
  );

  useEffect(() => {
    getRepoDetails({
      variables: {
        field: fieldsValue,
        direction: directionValue,
      },
    });
  }, []);

  useEffect(() => {
    getRepoDetails({
      variables: {
        field: fieldsValue,
        direction: directionValue,
      },
    });
  }, [fieldsValue, directionValue]);

  const [getRepoDetails, { loading, data, error }] = useLazyQuery(
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

  const onSelectedFields = (value: FIELD_TYPES) => {
    setFieldsValue(value);
  };

  const onSelectedDirection = (value: DIRECTION_TYPES) => {
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
              <Link to={routes.HOME}>Back to home</Link>
              <p>Filters</p>
              <Grid flex={1}>
                <div>By:</div>
                <select
                  value={fieldsValue}
                  onChange={(e) =>
                    onSelectedFields(e.target.value as FIELD_TYPES)
                  }>
                  <option selected value={FIELD_TYPES.STARGAZERS}>
                    Stars
                  </option>
                  <option value={FIELD_TYPES.NAME}>Name</option>
                  <option value={FIELD_TYPES.UPDATED_AT}>Updated_At</option>
                </select>
                <select
                  value={directionValue}
                  onChange={(e) =>
                    onSelectedDirection(e.target.value as DIRECTION_TYPES)
                  }>
                  <option selected value={DIRECTION_TYPES.DESC}>
                    Desc
                  </option>
                  <option value={DIRECTION_TYPES.ASC}>Asc</option>
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
                  <Grid>
                    <p>{format(new Date(repo.updatedAt), 'dd/M/yyyy')}</p>
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

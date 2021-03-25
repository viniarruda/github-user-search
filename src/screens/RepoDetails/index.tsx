import { useQuery } from '@apollo/client';

import { Grid, Spinner, Card } from '../../components';

import { graphqlService } from '../../services';

import { IRepositoryDetails } from '../../interfaces';

const RepoDetails = () => {
  const { loading, data, error } = useQuery(
    graphqlService.queries.GET_REPO_DETAILS
  );

  const { viewer } = data;

  if (error) return <p>Error: {error} </p>;

  return (
    <Grid p="20px 20px" flex={1} flexDirection="column">
      <Spinner loading={loading} />
      <Grid>
        <Grid flexDirection="column">
          <p>Filters:</p>
          <Grid flex={1}>
            <div>By:</div>
            <select>
              <option selected value="stars">
                Stars
              </option>
              <option value="desc">Desc</option>
              <option value="asc">Asc</option>
            </select>
          </Grid>
        </Grid>
      </Grid>
      <Grid m="20px 0" flexDirection="column">
        {viewer?.repositories &&
          viewer?.repositories?.nodes.map((repo: IRepositoryDetails) => (
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
    </Grid>
  );
};

export default RepoDetails;

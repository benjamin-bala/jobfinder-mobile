import { useQuery, gql } from '@apollo/client';

const GET_JOBS = gql`
  query {
    jobs(order_by: { date_added: desc }) {
      title
      company
      category
      location
      position
      url
      image_url
      date_added
    }
  }
`;

export default function JobsApi() {
  const { loading, error, data, refetch } = useQuery(GET_JOBS);

  return { loading, error, data, refetch };
}

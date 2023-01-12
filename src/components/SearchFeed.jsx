import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import useAxios from 'axios-hooks';
import { Videos, Loader } from './';

const SearchFeed = () => {
  const { searchTerm } = useParams('searchTerm');

  const [{ data, loading, error }] = useAxios(
    `search?part=snippet&q=cat ${searchTerm}`
  );

  if (loading) return <Loader />;

  if (error) return <div>Error</div>;

  const videos = data.items;

  return (
    <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
      <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: 'white' }}>
        Search Results for:{' '}
        <span style={{ color: '#e91e63' }}> {searchTerm}</span>
      </Typography>

      <Videos videos={videos} />
    </Box>
  );
};
export default SearchFeed;

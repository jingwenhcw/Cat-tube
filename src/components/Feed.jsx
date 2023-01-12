import { useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import useAxios from 'axios-hooks';

import { Videos, Sidebar, Loader } from './';

import { categories } from '../utils/constants';

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].name);

  const order = categories.find(
    (category) => category.name === selectedCategory
  ).order;

  const [{ data, loading, error }] = useAxios(
    `search?part=snippet&q=${selectedCategory}${order ? `&order=${order}` : ''}`
  );

  if (loading) return <Loader />;
  if (error) return <p>Error!</p>;

  const videos = data.items;

  return (
    <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
      <Box
        sx={{
          height: { sx: 'auto', md: '92vh' },
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <Typography
          className='copyright'
          variant='body2'
          sx={{ mt: 1.5, color: '#fff' }}
        >
          Copyright © 2022 Cat-tube
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography
          variant='h4'
          fontWeight='bold'
          mb={2}
          sx={{ color: 'white' }}
        >
          {selectedCategory} <span style={{ color: '#e91e63' }}>Videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};
export default Feed;

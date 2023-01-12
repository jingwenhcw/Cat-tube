import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import {
  Navbar,
  Feed,
  ChannelDetail,
  VideoDetail,
  SearchFeed,
} from './components';

import { configure } from 'axios-hooks';
import Axios from 'axios';
import { axios_options } from './utils/fetchFromAPI';

const axios = Axios.create({
  ...axios_options,
});

configure({ axios });

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ background: '#000' }}>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Feed />} />
          <Route path='/video/:id' element={<VideoDetail />} />
          <Route path='/channel/:id' element={<ChannelDetail />} />
          <Route path='/search/:searchTerm' element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;

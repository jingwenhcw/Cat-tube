import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { Videos, ChannelCard, Loader } from './';
import useAxios from 'axios-hooks';

const ChannelDetail = () => {
  const { id } = useParams();

  const [{ data: channelData, loading: channelLoading }] = useAxios(
    `channels?part=snippet&id=${id}`
  );

  const [{ data: videosData, loading: videosLoading }] = useAxios(
    `search?channelId=${id}&part=snippet%2Cid&order=date`
  );

  if (channelLoading || videosLoading) {
    return <Loader />;
  }

  const channelDetail = channelData?.items[0];
  const videos = videosData?.items;

  return (
    <Box minHeight='95vh'>
      <Box>
        <div
          style={{
            height: '300px',
            background:
              'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
            zIndex: 10,
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop='-93px' />
      </Box>
      <Box p={2} display='flex'>
        <Box sx={{ mr: { sm: '100px' } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;

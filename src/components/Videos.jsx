import React from 'react';

import { Stack } from '@mui/material';

import { ChannelCard, VideoCard } from './';

const Videos = ({ videos, direction }) => {
  return (
    <Stack
      direction={direction || 'row'}
      flexWrap='wrap'
      justifyContent='start'
      alignItems='start'
      gap={2}
    >
      {videos.map((item, idx) => (
        <React.Fragment key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </React.Fragment>
      ))}
    </Stack>
  );
};
export default Videos;

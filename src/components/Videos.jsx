import { Stack } from '@mui/material';

import { ChannelCard, Loader, VideoCard } from './';

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
        <>
          {item.id.videoId && <VideoCard key={idx} video={item} />}
          {item.id.channelId && <ChannelCard key={idx} channelDetail={item} />}
        </>
      ))}
    </Stack>
  );
};
export default Videos;

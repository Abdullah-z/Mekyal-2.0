import React from 'react';
import {View} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

import {useTheme} from '../hooks/';
const VideoPlayer = (props) => {
  const {sizes} = useTheme();
  return (
    <View>
      <YoutubePlayer
        height={190}
        videoId={props.link}
        webViewStyle={{opacity: 0.99}}
      />
    </View>
  );
};

export default VideoPlayer;

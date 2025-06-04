import * as React from 'react';

import {ImageOrVideo} from 'react-native-image-crop-picker';

import {images} from '../../helper';
import {CommonAvatar} from '../../components/common/CommonAvatar';

export const CommonProfile = () => {
  const onAvatarChange = (image: ImageOrVideo) => {
    console.log(image);
    // upload image to server here
  };
  return <CommonAvatar onChange={onAvatarChange} source={images.userIcon} />;
};

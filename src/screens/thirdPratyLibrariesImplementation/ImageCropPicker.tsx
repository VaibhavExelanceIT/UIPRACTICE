import React, {useRef, useState} from 'react';
import {Button, Image, ImageProps, StyleSheet, View} from 'react-native';
import {ImageOrVideo} from 'react-native-image-crop-picker';
// import {CommonAvatar} from '../../components/common/CommonAvatar';
// import {CommonProfile} from '../../components/common/CommonProfile';
import ImagePicker from 'react-native-image-crop-picker';
import {images} from '../../helper';
import {VideoRef, Video} from 'react-native-video';
// import {Image} from 'react-native-reanimated/lib/typescript/Animated';

interface AvatarProps extends ImageProps {
  onChange?: (image: ImageOrVideo) => void;
}
const ImageCropPicker = (props: AvatarProps) => {
  const videoRef = useRef<VideoRef>(null);
  // const [uri, setUri] = useState(props.source?.uri || undefined);
  const [uri, setUri] = useState(props.source?.uri || undefined);
  const [VideoUri, setVideoUri] = useState(
    videoRef.source?.VideoUri || undefined,
  );

  // console.log(uri);
  // console.log(videoRef.current);
  // console.log(VideoUri.current);

  // // eslint-disable-next-line @typescript-eslint/no-shadow
  // const onAvatarChange = (image: ImageOrVideo) => {
  //   console.log(image);
  // };

  const ImageGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      // console.log(image);
      // console.log(image.path);
      // onAvatarChange(image);
      setUri(image.path);
      props.onChange?.(image);
    });
  };

  const VideoGallery = () => {
    ImagePicker.openPicker({
      mediaType: 'video',
    }).then(video => {
      setVideoUri(video.path);
      videoRef.save?.(video);
    });
  };

  const ImageCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setUri(image.path);
      props.onChange?.(image);
    });
  };

  const VideoCamera = () => {
    ImagePicker.openCamera({
      mediaType: 'video',
    }).then(video => {
      setVideoUri(video.path);
      videoRef.save?.(video);
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.scroll}>
        <Video
          style={styles.backgroundVideo}
          ref={videoRef}
          onBuffer={e => {
            e.isBuffering;
          }}
          onError={e => {
            e.error;
          }}
          controls={true}
          source={
            VideoUri
              ? {uri: VideoUri}
              : require('../../assets/images/video.mp4')
          }
        />
      </View>
      <View style={styles.scroll}>
        {/* <Text>{image}</Text> */}

        <Image
          style={styles.avatar}
          // {...props}
          source={uri ? {uri} : images.userIcon}
        />
      </View>
      <View style={styles.btn}>
        <Button onPress={ImageGallery} title="Image from Gallery" />
      </View>
      <View style={styles.btn}>
        <Button onPress={VideoGallery} title="Video from Gallery" />
      </View>
      <View style={styles.btn}>
        <Button onPress={ImageCamera} title="Image from Camera" />
      </View>
      <View style={styles.btn}>
        <Button onPress={VideoCamera} title="Video from Camera" />
      </View>
    </View>
  );
};

export default ImageCropPicker;

const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  btn: {
    // flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    // margin: 10,
    // justifyContent: 'center',
  },
  scroll: {
    // padding: 30,
    backgroundColor: 'white',
    flex: 1,
  },
  userRow: {
    alignItems: 'center',
    padding: 15,
    marginTop: 70,
  },
  content: {
    flex: 1,
    backgroundColor: '#d8d8db',
  },
  avatar: {
    margin: 12,
    flex: 1,
    paddingTop: 20,
    height: 100,
    width: '100%',
    borderRadius: 100,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

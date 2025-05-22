import React from 'react';
import {
  Image,
  ImageProps,
  Pressable,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Text} from 'react-native-gesture-handler';
import ImagePicker, {ImageOrVideo} from 'react-native-image-crop-picker';
import Modal from 'react-native-modal';
import {images} from '../../helper/imageHelper';

interface AvatarProps extends ImageProps {
  onChange?: (image: ImageOrVideo) => void;
}

export const CommonAvatar = (props: AvatarProps) => {
  const [uri, setUri] = React.useState(props.source?.uri || undefined);
  const [visible, setVisible] = React.useState(false);
  const close = () => setVisible(false);
  const open = () => setVisible(true);
  // const chooseImage = () => {
  //   ImagePicker.openPicker({
  //     width: 300,
  //     height: 400,
  //     cropping: true,
  //   })
  //     .then(image => {
  //       setUri(image.path);
  //       props.onChange?.(image);
  //     })
  //     .finally(close);
  // };

  const openCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        setUri(image.path);
        props.onChange?.(image);
      })
      .finally(close);
  };

  return (
    <>
      <TouchableOpacity onPress={openCamera}>
        <Image
          style={styles.avatar}
          {...props}
          source={uri ? {uri} : props.source}
        />
      </TouchableOpacity>
      <Modal
        isVisible={visible}
        onBackButtonPress={close}
        onBackdropPress={close}
        style={{justifyContent: 'flex-end', margin: 0}}>
        <SafeAreaView style={styles.options}>
          {/* <Pressable style={styles.option} onPress={chooseImage}>
            <images.ImageIcon />
            <Text>Library </Text>
          </Pressable> */}
          <Pressable style={styles.option} onPress={openCamera}>
            <images.CameraIcon />
            <Text>Camera</Text>
          </Pressable>
        </SafeAreaView>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  avatar: {
    paddingTop: 20,
    height: 100,
    width: 100,
    borderRadius: 100,
    padding: 20,
  },

  options: {
    backgroundColor: 'white',
    flexDirection: 'row',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  option: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

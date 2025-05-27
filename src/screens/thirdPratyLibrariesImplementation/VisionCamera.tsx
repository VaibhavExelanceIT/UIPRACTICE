/* eslint-disable react-native/no-inline-styles */
import {
  Alert,
  Image,
  ImageSourcePropType,
  Linking,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {
  Camera,
  CameraPosition,
  Templates,
  useCameraDevice,
  useCameraFormat,
  useCameraPermission,
} from 'react-native-vision-camera';
// import {PermissionsAndroid, Platform} from 'react-native';
import {CameraRoll} from '@react-native-camera-roll/camera-roll';
import {images} from '../../helper';
// import {CameraRoll} from 'react-native';

const VisionCamera = () => {
  const camera = useRef<Camera>(null);
  const [photocontain, setPhotoContain] = useState<ImageSourcePropType>(
    images.ImageIcon,
  );
  const [cameraPosition, setCameraPosition] = useState<CameraPosition>('back');
  const device = useCameraDevice(cameraPosition);
  const format = useCameraFormat(device, Templates.Snapchat);
  const {hasPermission, requestPermission} = useCameraPermission();

  const handleFlipCamera = () => {
    setCameraPosition(cameraPosition === 'back' ? 'front' : 'back');
  };
  if (!hasPermission) {
    return requestPermission();
  }
  if (device == null) {
    return Alert.alert('No device found');
  }

  async function photo() {
    try {
      const file = await camera.current?.takePhoto();

      const result = await fetch(`file://${file.path}`);
      const data = await result.blob();

      console.log('The file is:===>>', file);
      console.log('The result is :===>>>', `file://${file.path}`);
      console.log('The data is :==>>,', data);
      await CameraRoll.save(`file://${file.path}`, {type: 'photo'});
      // lastPhoto = require(result);
      setPhotoContain({uri: `file://${file.path}`});
      // await CameraRoll.save
      // setLastPhoto(photo);
      // return file;
    } catch (error) {
      console.log('Error ===>', error);
    }
  }

  const openPhotos = () => {
    switch (Platform.OS) {
      case 'ios':
        Linking.openURL('photos-redirect://');
        break;
      case 'android':
        Linking.openURL('content://media/internal/images/media');
        break;
      default:
        console.log('Could not open gallery app');
    }
  };

  return (
    <>
      <View style={{flex: 3}}>
        <Camera
          video={true}
          photo={true}
          ref={camera}
          style={StyleSheet.absoluteFill}
          format={format}
          device={device}
          isActive={true}
          // onTouchEndCapture={}
          preview={true}
          resizeMode="cover"
          androidPreviewViewType="texture-view"
          // onShutter={voice}
        />
      </View>

      <View
        style={{
          flex: 1,
          backgroundColor: 'transparent',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          style={{
            // flex: 1,
            height: 50,
            width: 50,
            borderRadius: 50,
            backgroundColor: 'transparent',
            borderColor: 'transparent',
          }}
          onPress={openPhotos}>
          <Image style={{height: 50, width: 50}} source={photocontain} />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            // flex: 1,
            height: 100,
            width: 100,
            borderRadius: 50,
            backgroundColor: 'black',
            borderColor: '#00000000',
            // tras,
          }}
          onPress={photo}
        />

        <TouchableOpacity
          style={{
            // flex: 1,
            height: 20,
            width: 20,
            borderRadius: 50,
            backgroundColor: 'transparent',
            borderColor: 'transparent',
          }}
          onPress={handleFlipCamera}>
          <Image style={{height: 40, width: 40}} source={images.flip} />
        </TouchableOpacity>
      </View>
    </>
  );
};
export default VisionCamera;

// const styles = StyleSheet.create({});
// const format = useCameraFormat(device, [
//   {videoAspectRatio: 16 / 9},
//   {videoResolution: {width: 3048, height: 2160}},
//   {photoResolution: 'max'},
//   {fps: 60},
//   {videoHdr: true},
//   // {fps: 60},
//   // {fps: 60},
// ]);

// const {hasMicrophonePermission, requestPermission} =
// useMicrophonePermission();
// const devices = useCameraDevices();
// const device = useMemo(() => findBestDevice(devices), [devices]);
// const showAlert = () => {
//   Alert.alert(
//     'Camera Permission',
//     'Give a Camera Permission for camera use.',
//     [
//       {
//         text: 'Deny',
//         onPress: () => requestPermission(),
//         style: 'cancel',
//       },
//       {text: 'Allow', onPress: () => !requestPermission()},
//     ],
//     {cancelable: false},
//   );
// };
// if (!hasMicrophonePermission) {
//   return requestMicroPhonePermission();
// }
// eslint-disable-next-line react-hooks/rules-of-hooks
// const onPhotoCaptured = useCallback((file: PhotoFile) => {
//   console.log(file);
// }, []);

// const PhotoFile = await camera.current?.takePhoto({
//   flash: 'on', // 'auto' | 'off'
// });

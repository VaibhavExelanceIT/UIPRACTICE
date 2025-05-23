/* eslint-disable no-sequences */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
// import {renderItem} from '@/utils/render-item';
import * as React from 'react';
import {Image, View} from 'react-native';
import {Text} from 'react-native-gesture-handler';
import type {ICarouselInstance} from 'react-native-reanimated-carousel';
import Carousel, {Pagination} from 'react-native-reanimated-carousel';
import {data} from '../../static/entries';
import {useSharedValue} from 'react-native-reanimated';
// import {Image} from 'react-native-reanimated/lib/typescript/Animated';

// const defaultDataWith6Colors = [
//   '#B0604D',
//   '#899F9C',
//   '#B3C680',
//   '#5C6265',
//   '#F5D399',
//   '#F1F1F1',
// ];

const SnapCarousel = () => {
  const progress = useSharedValue<number>(0);
  const ref = React.useRef<ICarouselInstance>(null);

  // function renderItem(arg0: {
  //   rounded: boolean;
  // }): import('react-native-reanimated-carousel').CarouselRenderItem<string> {
  //   throw new Error('Function not implemented.');
  // }
  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      /**
       * Calculate the difference between the current index and the target index
       * to ensure that the carousel scrolls to the nearest index
       */
      count: index - progress.value,
      animated: true,
    });
  };
  return (
    <View

    // data
    // dataSet={{kind: 'basic-layouts', name: 'stack'}}
    >
      <Carousel
        // loop={false}
        // fixedDirection="positive"
        ref={ref}
        // overscrollEnabled={true}
        autoPlayInterval={2000}
        data={data}
        height={220}
        // loop={true}
        pagingEnabled={true}
        snapEnabled={true}
        width={430 * 0.75}
        onProgressChange={progress}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: 240,
          // backgroundColor: 'white',
        }}
        autoPlay
        // autoPlayInterval:'2000'
        // vertical
        // mode={'horizontal-stack'}
        // modeConfig={{
        //   snapDirection: 'left',
        //   stackInterval: 18,
        // }}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 50,
        }}
        // customConfig={() => ({type: 'positive', viewCount: 5})}
        // renderItem={renderItem({rounded: true})}
        // renderItem={() => {
        //   return (
        //     <>
        //       {data.map(x => {
        //         return (
        //           <React.Fragment key={x.title}>
        //             <Image
        //               source={x.illustration}
        //               style={{
        //                 height: '50%',
        //                 maxHeight: 60,
        //                 width: '30%',
        //                 maxWidth: 60,
        //               }}
        //             />
        //           </React.Fragment>
        //         );
        //       })}
        //     </>
        //   );
        // }}
        renderItem={({index}) => (
          <View
            style={{
              flex: 1,
              borderWidth: 1,
              backgroundColor: 'white',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 30,
              }}>
              {index}
            </Text>

            <Image
              style={{
                height: '100%',
                width: '100%',
              }}
              source={data?.[index]?.illustration}
            />
          </View>
        )}
      />
      <Pagination.Basic
        progress={progress}
        data={data}
        dotStyle={{borderRadius: 20, backgroundColor: '#262626'}}
        activeDotStyle={{backgroundColor: 'red', height: 10, width: 10}}
        containerStyle={{gap: 5, marginBottom: 10}}
        onPress={onPressPagination}
      />
    </View>
  );
};

export default SnapCarousel;

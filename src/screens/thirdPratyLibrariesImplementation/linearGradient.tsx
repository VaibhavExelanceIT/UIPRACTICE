import {StyleSheet, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const linearGradient = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <LinearGradient
          useAngle={true}
          angle={-45}
          angleCenter={{x: 0.5, y: 0.5}}
          start={{x: 0.9, y: 0.9}}
          end={{x: 0, y: 0}}
          colors={[
            '#d16ba5',
            '#c777b9',
            '#ba83ca',
            '#aa8fd8',
            '#9a9ae1',
            '#8aa7ec',
            '#79b3f4',
            '#69bff8',
            '#52cffe',
            '#41dfff',
            '#46eefa',
            '#5ffbf1',
          ]}
          style={styles.linearGradient}
        />
        <LinearGradient
          useAngle={true}
          angle={45}
          angleCenter={{x: 0.5, y: 0.5}}
          start={{x: 0.9, y: 0.9}}
          end={{x: 0, y: 0}}
          colors={[
            '#d16ba5',
            '#c777b9',
            '#ba83ca',
            '#aa8fd8',
            '#9a9ae1',
            '#8aa7ec',
            '#79b3f4',
            '#69bff8',
            '#52cffe',
            '#41dfff',
            '#46eefa',
            '#5ffbf1',
          ]}
          style={styles.linearGradient}
        />
      </View>

      <View style={styles.container2}>
        <LinearGradient
          useAngle={true}
          angle={-135}
          angleCenter={{x: 0.5, y: 0.5}}
          start={{x: 0.9, y: 0.9}}
          end={{x: 0, y: 0}}
          colors={[
            '#d16ba5',
            '#c777b9',
            '#ba83ca',
            '#aa8fd8',
            '#9a9ae1',
            '#8aa7ec',
            '#79b3f4',
            '#69bff8',
            '#52cffe',
            '#41dfff',
            '#46eefa',
            '#5ffbf1',
          ]}
          style={styles.linearGradient}
        />

        <LinearGradient
          useAngle={true}
          angle={135}
          angleCenter={{x: 0.5, y: 0.5}}
          start={{x: 0.9, y: 0.9}}
          end={{x: 0, y: 0}}
          colors={[
            '#d16ba5',
            '#c777b9',
            '#ba83ca',
            '#aa8fd8',
            '#9a9ae1',
            '#8aa7ec',
            '#79b3f4',
            '#69bff8',
            '#52cffe',
            '#41dfff',
            '#46eefa',
            '#5ffbf1',
          ]}
          style={styles.linearGradient}
        />
      </View>
    </View>
  );
};

export default linearGradient;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  container2: {
    flex: 1,
    flexDirection: 'row',
  },
  linearGradient: {
    flex: 1,
  },
  buttonText: {
    flex: 1,
    fontSize: 18,
    justifyContent: 'center',
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});

/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ViewBox from '../components/ViewBox';

const FlexPracticeScreen = () => {
  return (
    <View style={[styles.container1, {}]}>
      {/* \ view 1st threee block */}
      {/* <View style={styles.FlexDir}>
        <View style={[{flex: 1, backgroundColor: '#FFB6C1'}]}>
          <Text style={{flex: 1, alignItems: 'flex-start'}}> 1</Text>
          <Text style={{textAlign: 'right'}}>2</Text>
        </View>

        <View
          style={{
            flex: 1,
          }}>
          <Text
            style={{
              alignSelf: 'center',
            }}>
            3
          </Text>
        </View>

        <View
          style={[
            styles.FlexDir,
            {
              backgroundColor: '#90EE90',
            },
          ]}>
          <Text>4</Text>
        </View>
      </View> */}
      <View style={styles.FlexDir}>
        <ViewBox
          text1={1}
          text2={2}
          textStyle2={{textAlign: 'right'}}
          containerStyle={{backgroundColor: '#FFB6C1'}}
          textStyle1={{flex: 1, alignItems: 'flex-start'}}
        />
        <ViewBox
          text1={3}
          containerStyle={{
            backgroundColor: '#ffc710',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        />
        <ViewBox text1={4} containerStyle={{backgroundColor: '#90EE90'}} />
      </View>

      {/* \ view 2nd two block */}
      {/* <View
        style={{
          flexDirection: 'row',
          flex: 1.5,
        }}>
        <View
          style={[
            styles.FlexDir,
            {
              backgroundColor: '#E6E6FA',
              justifyContent: 'space-between',
            },
          ]}>
          <Text>5</Text>
          <Text>6</Text>
        </View>

        <View
          style={[
            styles.FlexDir,
            {
              backgroundColor: '#F5FFFA',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
            },
          ]}>
          <Text>8</Text>
          <Text style={{alignSelf: 'center'}}>7</Text>
          <Text>9</Text>
        </View>
      </View> */}

      <View
        style={{
          flexDirection: 'row',
          flex: 1.5,
        }}>
        <ViewBox
          text1={5}
          text2={6}
          textStyle2={{textAlign: 'right'}}
          containerStyle={[
            styles.FlexDir,
            {backgroundColor: '#E6E6FA', justifyContent: 'space-between'},
          ]}
          textStyle1={{flex: 1, alignItems: 'flex-start'}}
        />

        <ViewBox
          text1={8}
          text2={7}
          text3={9}
          // textStyle2={{alignSelf: 'center'}}
          textStyle3={{alignSelf: 'flex-end'}}
          textStyle1={{alignSelf: 'flex-end'}}
          containerStyle={[
            styles.FlexDir,
            {
              backgroundColor: '#F5FFFA',
              justifyContent: 'space-between',
              alignItems: 'center',
            },
          ]}
        />
      </View>

      {/* \ view 3rd two block */}
      {/* <View style={styles.FlexDir}>
        <View
          style={[
            {
              flex: 1,
              justifyContent: 'space-around',
              alignItems: 'center',
              backgroundColor: '#FFFFE0',
            },
          ]}>
          <Text>10</Text>
          <Text>10</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            flex: 3,
            backgroundColor: '#F08080',
          }}>
          <Text>11</Text>

          <View
            style={{
              flex: 1,
              justifyContent: 'space-between',
              alignItems: 'flex-end',
            }}>
            <Text>12</Text>
            <Text>13</Text>
          </View>
        </View>
      </View> */}

      <View style={styles.FlexDir}>
        <ViewBox
          text1={10}
          text2={10}
          textStyle2={{textAlign: 'right'}}
          containerStyle={[
            {
              flex: 1,
              justifyContent: 'space-around',
              alignItems: 'center',
              backgroundColor: '#FFFFE0',
            },
          ]}
        />
        <ViewBox
          text1={11}
          text2={12}
          text4={13}
          // text
          // textStyle4={{
          //   flex: 1,
          //   alignContent: 'center',
          //   backgroundColor: 'ligthblue',
          //   textAlign: 'right',
          // }}
          // textStyle2={{
          //   flex: 1,
          //   backgroundColor: 'red',
          // }}
          containerStyle={[
            {
              flex: 3,
              flexDirection: 'row',
              backgroundColor: '#F08080',
              justifyContent: 'space-between',
            },
          ]}
        />
      </View>

      {/* \ view 4th three block */}
      {/* <View
        style={{
          flexDirection: 'row',
          flex: 0.5,
        }}>
        <View
          style={{
            flex: 2,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#E0FFFF',
          }}>
          <Text>14</Text>
          <Text>15</Text>
        </View>

        <View
          style={{
            flex: 1,
            backgroundColor: '#FFDAB9',
            alignItems: 'center',
          }}>
          <Text>16</Text>
        </View>

        <View
          style={{
            flex: 1,
            backgroundColor: '#B0E0E6',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          <Text>17</Text>
        </View>
      </View> */}

      <View style={{flexDirection: 'row', flex: 0.5}}>
        <ViewBox
          text1={14}
          text2={15}
          containerStyle={{
            flex: 2,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#E0FFFF',
          }}></ViewBox>

        <ViewBox
          text1={16}
          containerStyle={{
            flex: 1,
            backgroundColor: '#FFDAB9',
            alignItems: 'center',
          }}></ViewBox>

        <ViewBox
          text1={17}
          containerStyle={{
            flex: 1,
            backgroundColor: '#B0E0E6',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}></ViewBox>
      </View>

      {/* \ view 5th three block */}
      {/* <View
        style={{
          flexDirection: 'row',
          flex: 2,
        }}>
        <View
          style={[
            styles.FlexDir,
            {
              backgroundColor: '#D3D3D3',
              justifyContent: 'space-between',
            },
          ]}>
          <Text>18</Text>
          <Text>19</Text>
          <Text>20</Text>
        </View>
        <View
          style={[
            styles.FlexDir,
            {
              backgroundColor: '#FFE4E1',
              alignItems: 'center',
              justifyContent: 'space-around',
            },
          ]}>
          <Text>21</Text>
          <Text>22</Text>
        </View>

        <View
          style={{
            flex: 1,

            backgroundColor: '#F0FFF0',
            justifyContent: 'space-between',
          }}>
          <View
            style={[
              {
                flexDirection: 'row',
                justifyContent: 'space-between',
              },
            ]}>
            <Text>23</Text>
            <Text>24</Text>
          </View>

          <Text style={{alignSelf: 'center'}}>27</Text>

          <View
            style={[
              {
                flexDirection: 'row',
                justifyContent: 'space-between',
              },
            ]}>
            <Text>25</Text>
            <Text>26</Text>
          </View>
        </View>
      </View> */}

      <View
        style={{
          flexDirection: 'row',
          flex: 2,
        }}>
        <ViewBox
          text1={18}
          text2={19}
          text3={20}
          containerStyle={[
            styles.FlexDir,
            {
              backgroundColor: '#D3D3D3',
              justifyContent: 'space-between',
            },
          ]}></ViewBox>

        <ViewBox
          text1={21}
          text2={22}
          containerStyle={[
            styles.FlexDir,
            {
              backgroundColor: '#FFE4E1',
              alignItems: 'center',
              justifyContent: 'space-around',
            },
          ]}></ViewBox>

        <View
          style={{
            flex: 1,

            backgroundColor: '#F0FFF0',
            justifyContent: 'space-between',
          }}>
          <View
            style={[
              {
                flexDirection: 'row',
                justifyContent: 'space-between',
              },
            ]}>
            <Text>23</Text>
            <Text>24</Text>
          </View>

          <Text style={{alignSelf: 'center'}}>27</Text>

          <View
            style={[
              {
                flexDirection: 'row',
                justifyContent: 'space-between',
              },
            ]}>
            <Text>25</Text>
            <Text>26</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default FlexPracticeScreen;

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: 'red',
  },
  FlexDir: {
    flexDirection: 'row',
    flex: 1,
  },
});

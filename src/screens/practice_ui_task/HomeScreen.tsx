import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';

import {useSelector} from 'react-redux';

import {RootState} from '../../store/mystore';

const HomeScreen = () => {
  const users: any = useSelector<RootState>(state => state.users);

  return (
    <View style={styles.container}>
      {users.length > 0 ? (
        <FlatList
          data={users}
          renderItem={({item}) => {
            return (
              <View>
                <Image
                  style={styles.avatar}
                  source={{
                    uri: 'file://' + item.image,
                  }}
                />
                <View style={styles.detailView}>
                  <Text style={styles.textstyle}>
                    Hello {item.firstname} !!!
                  </Text>

                  <Text style={styles.textstyle}>
                    Last Name: {item.lastname}
                  </Text>

                  <Text style={styles.textstyle}>Phone NO: {item.number}</Text>

                  <Text style={styles.textstyle}>
                    Email Id: {item.email} password: {item.password}
                  </Text>
                </View>
              </View>
            );
          }}
        />
      ) : (
        <View style={styles.nodataviewstyle}>
          <Text>No User data </Text>
        </View>
      )}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  textstyle: {
    fontSize: 20,
    marginTop: 10,
  },
  container: {
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#41dfff',
  },
  textData: {
    textAlign: 'center',
  },
  avatar: {
    height: 150,
    width: 150,
    marginInline: 'auto',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nodataviewstyle: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  detailView: {
    width: '90%',
    flex: 1,
  },
});

import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';

import {useSelector} from 'react-redux';

const HomeScreen = ({route}: any) => {
  const items: any = useSelector(state => state);
  // const item = items.users;
  const user = items.users;
  console.log('users =>>', user);
  console.log(typeof user);

  console.log('items =>>', items);
  console.log(typeof items);

  const {email} = route.params;
  // console.log(email);
  // console.log(user);
  return (
    <View style={styles.container}>
      <FlatList
        data={user}
        renderItem={({item}) => {
          if (item.email === email) {
            return (
              <View style={styles.userItem}>
                <Image
                  style={styles.avatar}
                  source={{
                    uri: 'file://' + item.profileimage,
                  }}
                />
                <Text
                  style={
                    styles.textstyle
                  }>{`Hello ${item.firstname} !!! \n`}</Text>
                <Text
                  style={
                    styles.textstyle
                  }>{`Last Name: ${item.lastname}\n`}</Text>
                <Text
                  style={
                    styles.textstyle
                  }>{`Phone No : ${item.number}\n`}</Text>
                <Text
                  style={styles.textstyle}>{`Email Id : ${item.email}\n`}</Text>
                <Text
                  style={
                    styles.textstyle
                  }>{`Password : ${item.password}\n`}</Text>
              </View>
            );
          } else {
            return <View></View>;
          }
        }}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  textstyle: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 20,
  },
  container: {
    justifyContent: 'center',
    textAlignVertical: 'center',
    flex: 1,
    backgroundColor: '#41dfff',
  },
  textData: {
    textAlign: 'center',
  },
  avatar: {
    marginTop: 20,
    height: 150,
    width: 150,
    marginInline: 'auto',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userItem: {
    width: '90%',
    padding: 10,
    borderWidth: 1,
    alignSelf: 'center',
    marginTop: 10,
    textAlign: 'center',
    flexDirection: 'column',
  },
});

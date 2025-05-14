// import React, {useState} from 'react';
// import {Button, Text, View} from 'react-native';
// import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
// // import NextScreen from '../navigation/app';

// type CatProps = {
//   name: string;
// };

// const Cat = (props: CatProps) => {
//   // const [isHungry, setIsHungry] = useState(true);
//   let isHungry = true;
//   console.log('isHungry==>', isHungry);

//   return (
//     <View>
//       <Text>
//         I am {props.name}, and I am {isHungry ? 'hungry' : 'full'}!
//       </Text>
//       <Button
//         onPress={() => {
//           // setIsHungry(false);
//           isHungry = !isHungry;
//           console.log('isHungry==>', isHungry);
//         }}
//         disabled={!isHungry}
//         title={isHungry ? 'Give me some food, please!' : 'Thank you!'}
//       />
//     </View>
//   );
// };

// const HomeScren = () => {
//   return (
//     <SafeAreaProvider>
//       <SafeAreaView>
//         <Cat name="Munkustrap" />
//         <Cat name="Spot" />
//         {/* <Button
//           title="Go to Next Screen"
//           onPress={() => {
//             NextScreen;
//           }}
//         /> */}
//       </SafeAreaView>
//     </SafeAreaProvider>
//   );
// };

// export default HomeScren;

// import React from 'react';
// import {StyleSheet, ScrollView, Text, Image, View} from 'react-native';
// import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

// type CatProps = {
//   name: string;
// };
// const Cat = (props: CatProps) => {
//   return (
//     <View style={style.container}>
//       <Text style={style.container}> Hello I am {props.name}</Text>
//     </View>

//     // <View style={style.container}>
//     //   <Text style={style.container}>Hello, I am...</Text>
//     //   <TextInput style={style.inputform} placeholder="Name me!" />
//     // </View>
//   );
// };

// const style = StyleSheet.create({
//   container: {
//     padding: 3,
//   },
//   inputform: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     padding: 12,
//   },
// });

// const HomeScren = () => {
//   return (
//     <SafeAreaProvider>
//       <SafeAreaView>
//         <ScrollView>
//           <View>
//             <Image
//               source={{
//                 uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
//               }}
//               style={{width: 200, height: 200}}
//             />
//             <Cat name="Vaibhav" />
//             <Cat name="Vraj" />
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     </SafeAreaProvider>
//   );
// };

// export default HomeScren;

// import React from 'react';
// import {StyleSheet, ScrollView, Text, StatusBar} from 'react-native';
// import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

// const App = () => (
//   <SafeAreaProvider>
//     <SafeAreaView style={style.container} edges={['top']}>
//       <ScrollView style={style.scrollView}>
//         <Text style={style.text}>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//           minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//           aliquip ex ea commodo consequat. Duis aute irure dolor in
//           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//           pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//           culpa qui officia deserunt mollit anim id est laborum.
//         </Text>
//       </ScrollView>
//     </SafeAreaView>
//   </SafeAreaProvider>
// );

// const style = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: StatusBar.currentHeight,
//   },
//   scrollView: {
//     backgroundColor: 'cyan',
//   },
//   text: {
//     fontSize: 42,
//     padding: 12,
//   },
// });

// export default App;

// import React, {useState} from 'react';
// import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

// const App = () => {
//   const [count, setCount] = useState(0);
//   const onPress = () => {
//     console.log('Hello');
//     setCount(prevCount => prevCount + 1);
//   };

//   return (
//     <SafeAreaProvider>
//       <SafeAreaView style={styles.container}>
//         <View style={styles.countContainer}>
//           <Text>Count: {count}</Text>
//         </View>
//         <TouchableOpacity style={styles.button} onPress={onPress}>
//           <Text>Press Here</Text>
//         </TouchableOpacity>
//       </SafeAreaView>
//     </SafeAreaProvider>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     paddingHorizontal: 10,
//   },
//   button: {
//     alignItems: 'center',
//     backgroundColor: '#DDDDDD',
//     padding: 10,
//   },
//   countContainer: {
//     alignItems: 'center',
//     padding: 10,
//   },
// });

// export default App;

// /* eslint-disable react-native/no-inline-styles */
// import React from 'react';
// import {Image, Text, StyleSheet} from 'react-native';
// import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

// const App = () => {
//   return (
//     <SafeAreaProvider>
//       <SafeAreaView style={container}>
//         <Text style={text}>React Native</Text>

//         <Image
//           style={page.tinyLogo}
//           source={{
//             uri: 'https://reactnative.dev/img/tiny_logo.png',
//           }}
//         />

//         <Text style={page.baseText}>
//           I am bold
//           <Text style={page.innerText}> and yellow</Text>
//         </Text>
//         <Text style={page.appText}>This is My First App.</Text>
//         <Text style={page.title}> React Native</Text>
//       </SafeAreaView>
//     </SafeAreaProvider>
//   );

//   // const [text, onChangeText] = React.useState('Useless Text');
//   // const [number, onChangeNumber] = React.useState('');

//   // return (
//   //   <SafeAreaProvider>
//   //     <SafeAreaView style={styles.container}>
//   //       <TextInput
//   //         style={styles.input}
//   //         onChangeText={onChangeText}
//   //         value={text}
//   //       />
//   //       <TextInput
//   //         style={styles.input}
//   //         onChangeText={onChangeNumber}
//   //         value={number}
//   //         placeholder="useless placeholder"
//   //         keyboardType="numeric"
//   //       />
//   //     </SafeAreaView>
//   //   </SafeAreaProvider>
// };

// const page = StyleSheet.create({
//   title: {
//     marginTop: 16,
//     paddingVertical: 8,

//     borderColor: '#20232a',
//     borderRadius: 6,
//     backgroundColor: '#61dafb',
//     color: '#20232a',
//     textAlign: 'center',
//     fontSize: 30,
//     fontWeight: 'bold',
//   },
//   input: {
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//     backgroundColor: 'white',
//   },
//   logo: {
//     width: 66,
//     height: 58,
//   },
//   tinyLogo: {
//     width: 100,
//     height: 100,
//     margin: 10,
//   },
//   appText: {
//     fontFamily: 'TimesNewRoman',
//     fontWeight: 'bold',
//     color: 'cyan',
//   },
//   baseText: {
//     fontWeight: 'bold',
//   },
//   innerText: {
//     color: 'yellow',
//   },
//   container: {
//     flex: 1,
//     //     backgroundColor: 'grey',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 24,
//     backgroundColor: '#fff',
//   },
//   text: {
//     fontSize: 30,
//     color: '#000',
//   },
// });

// const lists = StyleSheet.create({
//   listContainer: {
//     flex: 1,
//     backgroundColor: '#61dafb',
//   },
//   listItem: {
//     fontWeight: 'bold',
//   },
// });

// const container = StyleSheet.compose(page.container, lists.listContainer);
// const text = StyleSheet.compose(page.text, lists.listItem);

// // const styles = StyleSheet.create({
// //   title: {
// //     marginTop: 16,
// //     paddingVertical: 8,
// //     borderWidth: 4,
// //     borderColor: '#20232a',
// //     borderRadius: 6,
// //     backgroundColor: '#61dafb',
// //     color: '#20232a',
// //     textAlign: 'center',
// //     fontSize: 30,
// //     fontWeight: 'bold',
// //   },
// //   input: {
// //     height: 40,
// //     margin: 12,
// //     borderWidth: 1,
// //     padding: 10,
// //     backgroundColor: 'white',
// //   },
// //   container: {
// //     flex: 1,
// //     backgroundColor: 'grey',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   logo: {
// //     width: 66,
// //     height: 58,
// //   },
// //   tinyLogo: {
// //     width: 100,
// //     height: 100,
// //     margin: 10,
// //   },
// //   appText: {
// //     fontFamily: 'TimesNewRoman',
// //     fontWeight: 'bold',
// //     color: 'cyan',
// //   },
// //   baseText: {
// //     fontWeight: 'bold',
// //   },
// //   innerText: {
// //     color: 'yellow',
// //   },
// // });

// // const App = () => {
// //   const [value, onChangeText] = React.useState('Useless Multiline Placeholder');

// //   // If you type something in the text box that is a color,
// //   // the background will change to that color.
// //   return (
// //     <SafeAreaProvider>
// //       <SafeAreaView
// //         style={[
// //           styles.container,
// //           {
// //             backgroundColor: value,
// //           },
// //         ]}>
// //         <TextInput
// //           editable
// //           multiline
// //           numberOfLines={4}
// //           maxLength={40}
// //           onChangeText={text => onChangeText(text)}
// //           value={value}
// //           style={styles.textInput}
// //         />
// //       </SafeAreaView>
// //     </SafeAreaProvider>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     borderBottomColor: '#000',
// //     borderBottomWidth: 1,
// //   },
// //   textInput: {
// //     padding: 10,
// //   },
// // });

// export default App;

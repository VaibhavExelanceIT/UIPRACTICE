/* eslint-disable react-native/no-inline-styles */
// import {
//   Alert,
//   Button,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TextInput,
//   View,
// } from 'react-native';
// import React from 'react';
// import {Formik} from 'formik';

// const RegistrstionFormikValidation = () => {
//   return (
//     <ScrollView>
//       <View style={styles.container}>
//         <Text>Registrstion Formik Validation</Text>
//         <Formik
//           initialValues={{email: ''}}
//           onSubmit={values => console.log(values)}>
//           {({handleChange, handleBlur, handleSubmit, values}) => (
//             <View>
//               <TextInput
//                 onChangeText={handleChange('email')}
//                 onBlur={handleBlur('email')}
//                 value={values.email}
//               />
//               <Button onPress={handleSubmit} title="Submit" />
//             </View>
//           )}
//         </Formik>
//       </View>
//     </ScrollView>
//   );
// };

// export default RegistrstionFormikValidation;

// const styles = StyleSheet.create({
//   container: {
//     marginTop: 20,
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

import React from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required').label('Name'),
  number: Yup.string()
    .length(10, 'number must be 10 digit')
    .required('Number is required'),
  email: Yup.string()
    .email('Please enter valid email')
    .required('Email is required')
    .label('Email'),
  password: Yup.string()
    .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
    .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
    .matches(/\d/, 'Password must have a number')
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required')
    .label('Password'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm Password is required'),
});
const RegistrstionFormikValidation = () => {
  return (
    <ScrollView>
      <View
        style={{
          alignItems: 'center',
          marginTop: 40,
        }}>
        <Text>Sign Up FormikValidation</Text>
        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
            number: '',
            confirmPassword: '',
          }}
          validationSchema={validationSchema}
          onSubmit={values => console.log(values)}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View style={styles.container}>
              <TextInput
                style={styles.inputTextStyle}
                placeholder="Name"
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
                autoCorrect={false}
              />
              {errors.name && touched.name && (
                <Text style={{color: 'red'}}>{errors.name}</Text>
              )}

              <TextInput
                style={styles.inputTextStyle}
                placeholder="Phone No"
                onChangeText={handleChange('number')}
                onBlur={handleBlur('number')}
                value={values.number}
                autoCorrect={false}
                maxLength={10}
              />
              {errors.number && touched.number && (
                <Text style={{color: 'red'}}>{errors.number}</Text>
              )}

              <TextInput
                style={styles.inputTextStyle}
                placeholder="Email"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect={false}
                keyboardType="email-address"
                textContentType="emailAddress"
                value={values.email}
              />
              {errors.email && touched.email && (
                <Text style={{color: 'red'}}>{errors.email}</Text>
              )}
              <TextInput
                style={styles.inputTextStyle}
                placeholder="Password"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                autoCapitalize="none"
                secureTextEntry
                textContentType="password"
                value={values.password}
              />
              {errors.password && touched.password && (
                <Text style={{color: 'red'}}>{errors.password}</Text>
              )}
              <TextInput
                style={styles.inputTextStyle}
                placeholder="Confirm Password"
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                autoCapitalize="none"
                secureTextEntry
                textContentType="password"
                value={values.confirmPassword}
              />
              {errors.confirmPassword && touched.confirmPassword && (
                <Text style={{color: 'red'}}>{errors.confirmPassword}</Text>
              )}
              <Button onPress={() => handleSubmit} title="Submit" />
            </View>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
};
export default RegistrstionFormikValidation;

const styles = StyleSheet.create({
  container: {
    width: '80%',

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputTextStyle: {
    // flex: 1,

    width: '80%',
    backgroundColor: '#eeeeee',
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    margin: 5,
    borderBlockColor: '#000000',
  },
  validationtext: {
    color: '#ff0000',
  },
});

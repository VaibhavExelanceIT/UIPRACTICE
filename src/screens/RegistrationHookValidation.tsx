import React from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {Controller, useForm} from 'react-hook-form';
import {ScrollView} from 'react-native';

const RegistrationHookValidation = () => {
  const {
    control,
    handleSubmit,
    watch,
    // getValues,
    formState: {errors},
  } = useForm({
    defaultValues: {
      userName: '',
      phoneNo: '',
      emailId: '',
      password: '',
      confirmPassword: '',
    },
  });
  const password = watch('password');
  const onSubmit = (data: any) => {
    console.log(data);
  };

  // username
  // phoneno
  // emialid
  // password
  // confirm password

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>Registration Validation by Hook</Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={styles.inputTextStyle}
              placeholder="User name"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType="ascii-capable"
            />
          )}
          name="userName"
        />
        {errors.userName && (
          <Text style={styles.validationtext}>UserName is required.</Text>
        )}

        <Controller
          control={control}
          rules={{
            maxLength: 10,
            minLength: 10,
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={styles.inputTextStyle}
              placeholder="Phone no"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType="decimal-pad"
            />
          )}
          name="phoneNo"
        />
        {errors.phoneNo && (
          <Text style={styles.validationtext}>Number must be 10 character</Text>
        )}

        <Controller
          control={control}
          rules={{
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'invalid email address',
            },

            required: 'true',
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={styles.inputTextStyle}
              placeholder="Email ID"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType="email-address"
            />
          )}
          name="emailId"
        />
        {errors.emailId && (
          <Text style={styles.validationtext}>Email Id is Required</Text>
        )}

        <Controller
          control={control}
          rules={{
            pattern: {
              value: /^([a-zA-Z0-9]).{8,}$/,
              message: 'Password atleast 8 character',
            },

            required: 'true',
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={styles.inputTextStyle}
              placeholder="Password"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType="ascii-capable"
            />
          )}
          name="password"
        />
        {errors.password && (
          <Text style={styles.validationtext}>Password is Required </Text>
        )}

        <Controller
          control={control}
          rules={{
            validate: value => value === password || 'Passwords do not match',
            required: 'true',
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={styles.inputTextStyle}
              placeholder="confirm Password"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType="ascii-capable"
            />
          )}
          name="confirmPassword"
        />
        {errors.confirmPassword && (
          <Text style={styles.validationtext}>Passwords do not match </Text>
        )}

        <Button title="Submit" onPress={handleSubmit(onSubmit)} />
      </View>
    </ScrollView>
  );
};

export default RegistrationHookValidation;

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
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

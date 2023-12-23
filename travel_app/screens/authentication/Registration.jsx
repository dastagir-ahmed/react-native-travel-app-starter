import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React, { useState } from "react";
import styles from "./signin.style";
import { Formik } from "formik";
import * as yup from "yup";
import { COLORS, SIZES } from "../../constants/theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import WidthSpacer from "../../components/Reuseable/WidthSpace";
import ReuseableBtn from "../../components/Button/ReuseableBtn";
import HeightSpacer from "../../components/Reuseable/HeightSpacer";

const validationSchema = yup.object().shape({
  password: yup
    .string()
    .min(8, "password must be at least 8 characters")
    .required("This field is required"),
  email: yup
    .string()
    .email("This email is not valid")
    .required("This field is required"),
  username: yup
    .string()
    .min(3, "Username must be at least 3 characters")
    .required("This field is required"),
});

const Registration = () => {
  const [loader, setLoader] = useState(false);
  const [response, setResponse] = useState(null);
  const [secureText, setSecureText] = useState(false);
  return (
  
      <View style={styles.container}>
        <Formik
          initialValues={{ email: "", password: "", username: " " }}
          validationSchema={validationSchema}
          onSubmit={(value) => {
            console.log(value);
          }}
        >
          {({
            handleChange,
            touched,
            handleSubmit,
            errors,
            values,
            isValid,
            setFieldTouched,
          }) => (
            <View>
              <View style={styles.wrapper}>
                <View>
                  <Text style={styles.label}>Username</Text>
                  <View
                    style={styles.inputWrapper(
                      touched.email ? COLORS.lightBlue : COLORS.lightGrey
                    )}
                  >
                    <MaterialCommunityIcons
                      name="face-man-profile"
                      size={20}
                      color={COLORS.gray}
                    />
                    <WidthSpacer width={10} />
                    <TextInput
                      placeholder="Enter Username"
                      onFocus={() => setFieldTouched("username")}
                      onBlur={() => setFieldTouched("username", "")}
                      onChangeText={handleChange("username")}
                      value={values.username}
                      autoCapitalize="none"
                      autoCorrect={false}
                      style={{ flex: 1 }}
                    />
                  </View>
                  {touched.username && errors.username && (
                    <Text style={styles.errorMessage}>{errors.username}</Text>
                  )}
                </View>
              </View>
              <View style={styles.wrapper}>
                <View>
                  <Text style={styles.label}>Email</Text>
                  <View
                    style={styles.inputWrapper(
                      touched.email ? COLORS.lightBlue : COLORS.lightGrey
                    )}
                  >
                    <MaterialCommunityIcons
                      name="email-outline"
                      size={20}
                      color={COLORS.gray}
                    />
                    <WidthSpacer width={10} />
                    <TextInput
                      placeholder="Enter email"
                      onFocus={() => setFieldTouched("email")}
                      onBlur={() => setFieldTouched("email", "")}
                      onChangeText={handleChange("email")}
                      value={values.email}
                      autoCapitalize="none"
                      autoCorrect={false}
                      style={{ flex: 1 }}
                    />
                  </View>
                  {touched.email && errors.email && (
                    <Text style={styles.errorMessage}>{errors.email}</Text>
                  )}
                </View>
              </View>
              <View style={styles.wrapper}>
                <View>
                  <Text style={styles.label}>Password</Text>
                  <View
                    style={styles.inputWrapper(
                      touched.password ? COLORS.lightBlue : COLORS.lightGrey
                    )}
                  >
                    <MaterialCommunityIcons
                      name="lock-outline"
                      size={20}
                      color={COLORS.gray}
                    />
                    <WidthSpacer width={10} />
                    <TextInput
                      secureTextEntry={secureText}
                      placeholder="Enter Password"
                      onFocus={() => setFieldTouched("password")}
                      onBlur={() => setFieldTouched("password", "")}
                      onChangeText={handleChange("password")}
                      value={values.password}
                      autoCapitalize="none"
                      autoCorrect={false}
                      style={{ flex: 1 }}
                    />
                    <TouchableOpacity
                      onPress={() => setSecureText(!secureText)}
                    >
                      <MaterialCommunityIcons
                        name={secureText ? "eye-outline" : "eye-off-outline"}
                        size={20}
                      />
                    </TouchableOpacity>
                  </View>
                  {touched.password && errors.password && (
                    <Text style={styles.errorMessage}>{errors.password}</Text>
                  )}
                </View>
              </View>
              <ReuseableBtn
                textColor={COLORS.white}
                borderColor={COLORS.green}
                backgroundColor={COLORS.green}
                borderWidth={1}
                width={SIZES.width - 50}
                btnText={"REGISTER"}
                onPress={handleSubmit}
              />
            </View>
          )}
        </Formik>
      </View>
   
  );
};

export default Registration;

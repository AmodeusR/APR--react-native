import { View, Text, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "@/components/FormField";
import { images } from "@/constants";
import { Link } from "expo-router";
import CustomButton from "@/components/CustomButton";

const SignIn = () => {
  const [form, setform] = useState({ email: "", password: "" });

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="justify-center min-h-[90vh] px-4 space-y-6">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />
          <Text className="text-white font-pbold text-2xl">Sign In</Text>
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setform({ ...form, email: e })}
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setform({ ...form, password: e })}
            secureText
          />
          <Link
            className="text-gray-100 font-pregular text-base self-end"
            href="/"
          >
            Forgot password
          </Link>
          <CustomButton
            title="Log In"
            handlePress={() => {}}
            containerStyles="py-4 mt-6"
          />
          <Text className="text-gray-100 font-pregular text-base text-center">
            Don't have an account?{" "}
            <Link className="text-secondary font-psemibold" href="/sign-up">
              Sign up
            </Link>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;

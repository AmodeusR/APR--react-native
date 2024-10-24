import { View, Text, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "@/components/FormField";
import { images } from "@/constants";
import { Link } from "expo-router";
import CustomButton from "@/components/CustomButton";

const SignUp = () => {
  const [form, setform] = useState({ username: "", email: "", password: "" });

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="mt-14 min-h-[90vh] px-4 space-y-6">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />
          <Text className="text-white font-pbold text-2xl">Sign Up</Text>
          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e) => setform({ ...form, username: e })}
          />
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
          <CustomButton
            title="Log In"
            handlePress={() => {}}
            containerStyles="py-4 mt-6"
          />
          <Text className="text-gray-100 font-pregular text-base text-center">
            Already have an account?{" "}
            <Link className="text-secondary font-psemibold" href="/sign-in">
              Sign in
            </Link>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;

import { View, Text, TextInput, Image, TouchableOpacity, type KeyboardTypeOptions } from "react-native";
import React, { useState } from "react";
import { icons, images } from "@/constants";

type FormFieldProps = {
  title: string;
  value: string;
  handleChangeText: ((text: string) => void) | undefined;
  keyboardType?: KeyboardTypeOptions;
  className?: string;
  placeholder?: string;
  secureText?: boolean;
};

const FormField = ({
  title,
  value,
  handleChangeText,
  keyboardType,
  placeholder,
  className,
  secureText = false,
  ...props
}:
FormFieldProps) => {
  const [showPassword, setShowPassword] = useState(secureText);

  return (
    <View className={`space-y-2`} {...props}>
      <Text className="text-gray-100 font-psemibold text-base">{title}</Text>
      <View className="flex-row items-center w-full p-4 bg-black-100 border-black-200 border-2 rounded-lg focus:border-secondary">
        <TextInput
          className="text-white text-base font-psemibold flex-1"
          onChangeText={handleChangeText}
          value={value}
          secureTextEntry={showPassword}
          placeholder={placeholder}
          placeholderTextColor="#7B7B8B"
          keyboardType={keyboardType}
        />
        {secureText && (
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            activeOpacity={0.5}
          >
            <Image
              source={showPassword ? icons.eye : icons.eyeHide}
              className="w-7 h-7"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;

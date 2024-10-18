import { View, Text, Image, ImageSourcePropType } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import icons from "../../constants/icons";

type TabIconType = {
  icon: ImageSourcePropType;
  color: string;
  name: string;
  focused: boolean;
  altName?: string;
};

const TabIcon = ({ icon, color, name, focused }: TabIconType) => {
  return (
    <View className="items-center gap-1">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      />
      <Text
        className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`} style={{ color }}
      >
        {name}
      </Text>
    </View>
  );
};

const tabsData: Omit<TabIconType, "color" | "focused">[] = [
  {
    name: "Home",
    icon: icons.home,
  },
  {
    name: "Create",
    icon: icons.plus,
  },
  {
    name: "Profile",
    icon: icons.profile,
  },
  {
    name: "Bookmark",
    icon: icons.bookmark,
    altName: "Saved",
  },
];

const TabsLayout = () => {
  return (
    <View className="flex-1">
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#FFA001",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarStyle: {
            backgroundColor: "#161622",
            borderTopWidth: 1,
            borderTopColor: "#232533",
            height: 65
          }
        }}
      >
        {tabsData.map((item) => (
          <Tabs.Screen
            name={item.name.toLowerCase()}
            options={{
              headerShown: false,
              tabBarIcon: ({ color, focused }) => (
                <TabIcon
                  name={item.altName ?? item.name}
                  color={color}
                  focused={focused}
                  icon={item.icon}
                />
              ),
            }}
          />
        ))}
      </Tabs>
    </View>
  );
};

export default TabsLayout;

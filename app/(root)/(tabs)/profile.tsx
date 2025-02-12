import React from "react";
import { View, Text, Alert, TouchableOpacity } from "react-native";
import { logout } from "@/lib/appwrite";

const Profile = () => {
  const handleLogout = async () => {
    const result = await logout();

    if (result) {
      console.log("Logged out successfully");
    } else {
      Alert.alert("Failed to logout");
    }
  };

  return (
    <View>
      <Text>Profile Screen</Text>
      <TouchableOpacity
        onPress={handleLogout}
        className="bg-white shadow-md shadow-zinc-300 rounded-full py-4 mt-5"
      >
        <Text className="text-lg font-rubik text-black-300 ml-2">Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

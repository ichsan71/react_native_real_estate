import * as React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { login } from "@/lib/appwrite";
import images from "@/constants/images";
import icons from "@/constants/icons";
import { useGlobalContext } from "@/lib/global-provider";
import { Redirect } from "expo-router";

const SignIn = () => {
  const { refetch, loading, isLogged } = useGlobalContext();

  if (!loading && isLogged) return <Redirect href="/" />;

  const handleLogin = async () => {
    const result = await login();
    if (result) {
      refetch();
    } else {
      Alert.alert("Error", "Failed to login");
    }
  };

  return (
    <SafeAreaView className="bg-white flex-1">
      <ScrollView
        className="flex-1 min-h-screen"
        contentContainerClassName="flex-grow pb-10"
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={true}
      >
        <Image
          source={images.onboarding}
          className="w-full h-[70vh]"
          resizeMode="cover"
        />
        <View className="px-10">
          <Text className="text-base text-center uppercase font-rubik text-black-200">
            Welcome to Restate
          </Text>
          <Text className="text-3xl font-rubik-bold text-center text-black-300 mt-2">
            Let's get You Close to {"\n"}
            <Text className="text-primary-300">Your Ideal Home</Text>
          </Text>
          <Text className="text-lg font-rubik text-center mt-12 text-black-200">
            Login to ReState with Google
          </Text>
          <TouchableOpacity
            onPress={handleLogin}
            className="bg-white shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5"
          >
            <View className="flex flex-row items-center justify-center">
              <Image
                source={icons.google}
                className="w-5 h-5"
                resizeMode="contain"
              />
              <Text className="text-lg font-rubik text-black-300 ml-2">
                Continue with Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;

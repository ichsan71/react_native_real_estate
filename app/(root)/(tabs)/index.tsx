import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Page() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View>
        <Text className="font-bold text-lg my-10">Welcome to Restate</Text>
        <Link href="/sign-in">Sign in</Link>
        <Link href="/explore">Explore</Link>
        <Link href="/profile">Profile</Link>
        <Link href="/properties/1">property</Link>
      </View>
    </View>
  );
}

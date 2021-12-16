import { Button, Text, View } from "react-native";
import React from "react";

export default function HomeScreen({ navigation: { navigate } }: any) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to PDP"
        onPress={() => navigate('PDP')}
      />
    </View>
  );
}



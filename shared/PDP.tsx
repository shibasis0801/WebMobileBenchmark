import { Button, Text, View } from "react-native";
import React from "react";

export default function PDPScreen({ navigation: { navigate } }: any) {
  console.log("REACHED PDP", navigate);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>PDP Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigate('Home')}
      />
    </View>
  );
}

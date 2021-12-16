import { Button, Text, View } from "react-native";
import React from "react";
import { getTimeSinceStartup, StartupTime } from "react-native-startup-time";
import Reactotron from "reactotron-react-native";
import { startBench } from "./ReactotronConfig";
import { get } from "lodash";

export default function HomeScreen({ navigation: { navigate } }: any) {
  getTimeSinceStartup().then((time) => {
    console.log(`Time since startup: ${time} ms`);
  });
  console.log(get({name: "Shibasis"}, "name"));
  return (
    <View style={{ backgroundColor: "black", flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to PDP"
        onPress={() => {
          // startBench("Home to PDP lazy load");
          navigate('PDP')
        }}
      />
    </View>
  );
}



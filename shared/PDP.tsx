import { Button, Text, View } from "react-native";
import React from "react";
import Reactotron from "reactotron-react-native";
import { stopBench } from "./ReactotronConfig";
import Video from 'react-native-video';

export default function PDPScreen({ navigation: { navigate } }: any) {
  // stopBench();
  console.log("REACHED PDP", navigate);

  return (
    <View style={{ backgroundColor: "black", flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>PDP Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => {
          navigate('Home')
        }}
      />
      <Video source={{uri: "background"}}
             ref={() => {}}
             onBuffer={console.log}
             onError={console.error}
      />
    </View>
  );
}

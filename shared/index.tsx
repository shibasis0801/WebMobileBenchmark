import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, Button } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const HomeScreen = React.lazy(() => import(/* webpackChunkName: 'home' */"./Home.tsx"))
const PDPScreen = React.lazy(() => import(/* webpackChunkName: 'pdp' */"./PDP.tsx"))

const HomeScreenRoute = (props: any) => {
  console.log("REACHED HOME ROUTE", props);
  return (
    <React.Suspense fallback={<Text>Loading...</Text>}>
      <HomeScreen {...props} />
    </React.Suspense>
  );
};

const PDPScreenRoute = (props: any) => {
  console.log("REACHED PDP ROUTE", props);
  return (
    <React.Suspense fallback={<Text>Loading...</Text>}>
      <PDPScreen  {...props} />
    </React.Suspense>
  );
};
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={"Home"} component={HomeScreenRoute} />
        <Stack.Screen name={"PDP"} component={PDPScreenRoute} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

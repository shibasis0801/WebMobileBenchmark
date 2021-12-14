import React from 'react';
import App from "../shared/index.tsx";
import { AppRegistry } from 'react-native';

AppRegistry.registerComponent("main", () => App);
AppRegistry.runApplication("main", { rootTag: document.getElementById('root') })

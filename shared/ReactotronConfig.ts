import AsyncStorage from '@react-native-community/async-storage';
import Reactotron from 'reactotron-react-native';

export function configure() {
  Reactotron.setAsyncStorageHandler(AsyncStorage)
    .configure()
    .useReactNative()
    .connect();
}


let bench: any;
export function startBench(name: String) {
  bench = Reactotron.benchmark(name);
}

export function stopBench() {
  bench.stop();
}

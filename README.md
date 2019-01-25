# A Manual testcase for https://github.com/facebook/react-native/issues/22535

Uses RN from source with this [commit](https://github.com/Jyrno42/react-native/commit/bf64df4aea3f8ecda3fd9cfc2ed25e9f61ac905b).

1. Clone
2. yarn or npm install
3. `mkdir -p node_modules/@react-native-community/cli/scripts` ¯\_(ツ)_/¯
   - https://github.com/react-native-community/react-native-cli/issues/126
4. yarn start
5. yarn android
6. Follow onscreen instructions
7. After denying location permissions you should see a similar error:

```
01-02 13:32:00.270 16625 16645 E ReactNativeJS: { TIMEOUT: 3,
01-02 13:32:00.270 16625 16645 E ReactNativeJS:   POSITION_UNAVAILABLE: 2,
01-02 13:32:00.270 16625 16645 E ReactNativeJS:   PERMISSION_DENIED: 1,
01-02 13:32:00.270 16625 16645 E ReactNativeJS:   message: 'Location permission was not granted.',
01-02 13:32:00.270 16625 16645 E ReactNativeJS:   code: 1 }
```

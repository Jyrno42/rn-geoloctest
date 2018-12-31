# A Manual testcase for https://github.com/facebook/react-native/issues/22535

Uses RN from source with this [commit](https://github.com/Jyrno42/react-native/commit/defd1f4f1307080d6e1bbbd61d672f2b3b768574).

1. Clone
2. yarn or npm install
3. yarn start
4. yarn android
5. Follow onscreen instructions

## Misc

For some reason we also need to patch react-native-local-cli to make it use the correct directory. This is done
via [patch-package](https://github.com/ds300/patch-package). Without the patch the packager will look for JS files
inside node_modules directory (which is odd, and might be an issue with the alpha version of react-native-local-cli).

The patch changes the fallback return value of `getProjectRoot` to go up one more directory. Since the file resides in
`<APP_ROOT>/node_modules/react-native-local-cli/util/Config.js` the default `../..` results in packager looking for the
app files inside `<APP_ROOT>/node_modules` not in `<APP_ROOT>`. This might not be an issue anymore with master version of
react-native-local-cli since the file has been removed and I failed to find the new place for it.

https://github.com/react-native-community/react-native-cli
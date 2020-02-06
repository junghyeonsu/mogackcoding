import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Timer from './Component/Timer/index';
import reducer from './reducer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

let store = createStore(reducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Timer />
      </Provider>
    );
  }
}


// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>hello world</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
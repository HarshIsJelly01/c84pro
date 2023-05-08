import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from "./navigation/drawereNavigator";
import LoginScreen from './screens/logingScreen';
import RegisterScreen from './screens/registerScreen';
import StackNavigator from './navigation/stackNavigator';
import firebase from 'firebase';
import { firebaseConfig } from './config';

if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig)
}
else{
  firebase.app()
}

const Stack = createStackNavigator()
const StackNav = ()=>{
  <Stack.Navigator>

    <Stack.screen name='login' component={LoginScreen} />
    <Stack.screen name='register' component={RegisterScreen} />
    <Stack.screen name='dashboard' component={DrawerNavigator} />
    

  </Stack.Navigator>
}

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
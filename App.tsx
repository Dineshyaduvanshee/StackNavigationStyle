import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';
const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Login' component={Login}/>
        <Tab.Screen name='SignUp' component={SignUp}/>
      </Tab.Navigator>
      
    </NavigationContainer>
    // <Text style={{fontSize:30,backgroundColor:'purple',textAlign:'center',color:'orange'}}>!!Tab Navigation | React Navigation!!</Text>
  );
};

const Login = () =>{
  return(
    <View>
      <Text>Login</Text>
    </View>
  )
}
const SignUp = () =>{
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontSize:40}}>SignUp</Text>
    </View>
  )
}
export default App;
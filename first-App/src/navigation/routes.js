
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Signup from '../Dashboard/signup';
import SignIn from '../Dashboard/signin';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
  <Stack.Navigator>

<Stack.Screen name="Login" component={SignIn}/>
<Stack.Screen name="Signup" component={Signup}/>

  </Stack.Navigator>
  );
}


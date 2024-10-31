
import { Text, TouchableOpacity, View, SafeAreaView, Image } from "react-native";
import { TextInput } from 'react-native-paper';


export default function Signup({navigation}) {
  return (
    <SafeAreaView>
    <View style={{alignItems:"center",   }}>
    

<Text style={{
          fontSize:50,
          fontWeight:"bold",
          fontStyle:'italic',
          marginVertical:50

        }}> SignUp  </Text>

       
    </View>
<View style={{margin:20, gap:20}}>

    <TextInput
    style={{backgroundColor:'#b7c9c9'}}
    label="Email"
    />

    <TextInput
    style={{backgroundColor:'#b7c9c9',}}
    label="Password"
    />
</View>

<View style={{flexDirection:"row", justifyContent:"space-evenly",margin:20}}>
<TouchableOpacity style={{justifyContent:"center",
alignItems:"center", 
backgroundColor:'#5fb5e3',
height:50,
width:"45%",
borderRadius:10}}>

<Text style={{color:"white", fontSize:20, fontWeight:"bold"}}>
 SignUp
</Text>
</TouchableOpacity>

<TouchableOpacity
onPress={()=> navigation.navigate('Login')}
style={{justifyContent:"center",
alignItems:"center", 
backgroundColor:'#6ebd5e',
height:50,
width:"45%",
borderRadius:10}}>

<Text style={{color:"white", fontSize:20, fontWeight:"bold",}}>
Login Here
</Text>
</TouchableOpacity>
</View>

  </SafeAreaView>
  );
}


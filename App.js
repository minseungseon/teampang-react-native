// In App.js in a new project

import * as React from 'react';
import { View, Text, Button,StyleSheet,ImageBackground,Image, SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Images from './assets/images';
import { TouchableHighlight } from 'react-native-gesture-handler';

function HomeScreen({navigation}) {
  return ( 
    <View style ={styles.container}> 
      <ImageBackground source={Images.homeWideImage} style={styles.image}>
          <View style ={styles.inner_container}> 
              <Image style ={{width:50,height:50, marginBottom:15 }}source={Images.brandIcon}/>
              <Text style ={styles.headerText} >드래그</Text>
              <Text style ={styles.headerText} >한번으로,</Text>
              <Text style ={styles.headerText} >팀플 Okay.</Text>
          </View>
        <View style ={{flex:4}}>
        </View>
        <View style ={{flex:2, marginLeft:30, marginRight:30}}>
            <TouchableHighlight 
                    style ={{
                        width:'100%',
                        // height: 50, 절대적인값.. 화면크기 달라지면... 그대로 50 ..?
                        borderRadius:2,
                        backgroundColor : 'rgb(244,227,103)',
                        marginTop :10
                    }}>
                <Button color='black' title="카카오톡으로 로그인" onPress={() => navigation.navigate('Details')}/> 
            </TouchableHighlight>
        <TouchableHighlight 
                style ={{
                    width:'100%',
                    borderRadius:2,
                    backgroundColor : 'rgb(244,227,103)',
                    marginTop :10
                }}>
        <Button color='black' title="팀프앙 로그인" onPress={() => navigation.navigate('Details')}/> 
        </TouchableHighlight>
        <TouchableHighlight 
                style ={{
                    width:'100%',
                    borderRadius:2,
                    backgroundColor : 'rgb(244,227,103)',
                    marginTop :10
                }}>
         <Button color='white' title="계정이 없으신가요?" onPress={() => navigation.navigate('SignUpTerm')}/> 
        </TouchableHighlight>
       

        </View>
     
      </ImageBackground>
      </View>
  );
}

function DetailsScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createStackNavigator();


function SignUpTermScreen({navigation}){
  return(
    <View style={styles.container}>
      <View style={styles.TermHeader}>
      <Image source={Images.brandIcon} style={styles.TermImage}></Image>
      <Text style={styles.TermText}>팀프앙</Text>
      </View>
      <View>
        <Text style={styles.agreement} >모든 약관에 동의합니다.</Text>
      </View>
    </View>
  );
}


function App() { //main
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerStyle:{position: 'absolute',
        backgroundColor: 'transparent',
        opacity: 0,
        borderBottomWidth: 0,}}} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="SignUpTerm" component={SignUpTermScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#FFFFFF',
    flex: 1
  },
  inner_container: {
    // backgroundColor: 'blue',
    flex: 1,
    marginLeft:40,
    marginTop:60,
  },
  headerText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
    fontFamily: 'NEXONLv2GothicLight',
    paddingTop: 7,
  },
  image: {
    width:'100%',
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  kakaoButton: {
    width: 50,
    height: 20,
  },
  TermHeader:{
    flexDirection:'row',
    marginTop: 30,
    marginBottom:30,
    marginLeft:30,
    marginRight:100
  },

  TermImage:{
    width: 50, 
    height: 50,
    // flex: 3,
    resizeMode: "cover"},

  TermText:{ 
    marginTop:-10,
    color:'#399FFB',
    fontWeight: 'bold',
    fontSize: 50,    
  },

  agreement:{
    color:'rgb(74,74,74)',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft:30   
  }

});


export default App;
// In App.js in a new project

import * as React from 'react';
import { View, Text, Button,StyleSheet,ImageBackground,Image, SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Images from './assets/images';
import styled from 'styled-components';
import { TouchableHighlight } from 'react-native-gesture-handler';

interface StyleProps {
  background?: string;
}
const BasicButton = styled.TouchableHighlight`
    justifyContent: center
    alignItems: center
    borderRadius: 5
    backgroundColor : rgb(244,227,103)
    width: 100%
    height: 45
    background-color: ${(props:StyleProps) => props.background ? props.background : 'white'}
`
function HomeScreen({navigation}) {
  navigationOptions = { header: null };
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
        <View style ={{flex:3, marginLeft:30, marginRight:30, flexDirection: 'column'}}>
            
            <View style ={styles.center_container}>
              <BasicButton onPress={() => navigation.navigate('Details')}>
                    <Text style = {styles.midHeaderText}>팀프앙으로 로그인</Text>
              </BasicButton>
            </View>
            <View style ={styles.center_container}>
              <BasicButton background ="rgb(41,164,49)" onPress={() => navigation.navigate('Details')}>
                    <Text style = {styles.midHeaderWhiteText}>네이버로 시작하기</Text>
              </BasicButton>
            </View>
            <View style ={styles.center_container}>
              <BasicButton background ="rgb(244,227,103)" onPress={() => navigation.navigate('Details')}>
                    <Text style = {styles.midHeaderText}>카카오톡으로 로그인</Text>
              </BasicButton>
            </View>
            <View style ={styles.center_container}>
              <BasicButton background ="rgb(63,93,170)" onPress={() => navigation.navigate('Details')}>
                    <Text style = {styles.midHeaderWhiteText}>Facebook으로 로그인</Text>
              </BasicButton>
            </View>
           
            
            <Button color='white' title="계정이 없으신가요?" onPress={() => navigation.navigate('Details')}/> 

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

function App() { //main
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerStyle:{position: 'absolute',
        backgroundColor: 'transparent',
        opacity: 0,
        borderBottomWidth: 0,}}} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        
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
  center_container: {
    flex: 1,
    justifyContent: "center",
    // backgroundColor: 'blue',

  },
  headerText: {
    color: 'black',
    fontSize: 30,
    fontFamily: 'NEXONLv2GothicMedium',
    paddingTop: 7,
  },
  midHeaderText: {
    color: 'black',
    fontSize: 16,
    fontFamily: 'NEXONLv2GothicRegular',
  },
  midHeaderWhiteText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'NEXONLv2GothicRegular',
  },
  image: {
    width:'100%',
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  kakaoButton: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius:5,
    backgroundColor : 'rgb(244,227,103)',
    width: '100%',
    height: 45,
  },
  facebookButton: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius:5,
    backgroundColor : 'rgb(63,93,170)',
    width: '100%',
    height: '100%',
  }
});


export default App;
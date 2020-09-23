// In App.js in a new project

import * as React from 'react';
import { View, Text, Button,StyleSheet,ImageBackground,Image, SafeAreaView, TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Images from './assets/images';
import styled from 'styled-components';
import { TouchableOpacity } from 'react-native-gesture-handler';

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
const BasicInput =styled.TextInput`
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
        placeholder = 'Enter text'
        placeholderTextColor = 'red'
        value={this.state.text}   
`


function HomeScreen({navigation}) {
  navigationOptions = { header: null };
  return ( 
    <View style ={{flex:1}}> 
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
              <BasicButton onPress={() => navigation.navigate('Login')}>
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
         <Button color='white' title="계정이 없으신가요?" onPress={() => navigation.navigate('SignUpTerm')}/> 
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

function LoginScreen({navigation}) {
  return (
    <View style ={styles.container}>
      <View style={{flex:2, backgroundColor: 'red'}}>
      </View>
      <View style={{flex:2}}>
        <View style={styles.center_container}>
          <Image style ={{width:70,height:70}}source={Images.brandIcon}/>
        </View>
        <View style={styles.center_container}>
        <BasicInput Inputplaceholder="hello"/>
        </View>
        <View style={{flex:1, backgroundColor: 'yellow'}}>
        </View>
        <View style={{flex:1, backgroundColor: 'red'}}>
        </View>
      </View>
      
      <View style={{flex:2, backgroundColor: 'green'}}>
      </View>
    </View>
  );
}


const Stack = createStackNavigator();


function SignUpTermScreen({navigation}){
  return(
    <View style={styles.container}>
    <View style={styles.center_container}>
    <View style={{ marginBottom:20, marginLeft:30,marginRight:30}}>
      <View style={styles.TermHeader}>
      <Image source={Images.brandIcon} style={{ width: 50,height: 50,marginRight:10,resizeMode: "cover"}}></Image>
      <Text style={styles.TermText}>팀프앙</Text>
      </View>

      <View style={{flexDirection:'row',marginBottom:20}}>
        <Text style={styles.agreement} >모든 약관에 동의합니다.</Text>
        <Image source={Images.right} style={{width:30, height:30,}}></Image>  
      </View> 

      <Image source={Images.line} style={{marginBottom:20,width:330}}></Image> 

      <View style={{marginLeft:10}}>
        <View style={{flexDirection:'row'}}> 
          <Image source={Images.check} style={{marginRight:10,width:20, height:20}}></Image>
          <Text style={{marginBottom:25,fontSize:18}}>이용약관</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Details')}>
          <Image source={Images.point} style={{width:20, height:20}}></Image>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row'}}>
          <Image source={Images.check} style={{marginRight:10,width:20, height:20}}></Image>          
          <Text style={{marginBottom:25,fontSize:18}}>개인정보 처리 방침</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Details')}>
          <Image source={Images.point} style={{width:20, height:20}}></Image>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row'}}> 
          <Image source={Images.check} style={{marginRight:10,width:20, height:20}}></Image>          
          <Text style={{marginBottom:25,fontSize:18}}>개인정보 수집 및 이용 동의</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Details')}>
          <Image source={Images.point} style={{width:20, height:20}}></Image>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row'}}>
          <Image source={Images.check} style={{marginRight:10,width:20, height:20}}></Image>
          <Text style={{marginBottom:25,fontSize:18}}>개인정보 처리 위탁 동의</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Details')}>
          <Image source={Images.point} style={{width:20, height:20}}></Image>
          </TouchableOpacity>
          </View> 
        <View style={{flexDirection:'row'}}>
          <Image source={Images.check} style={{marginRight:10,width:20, height:20}}></Image>
          <Text style={{marginBottom:25,fontSize:18}}>이동통신단말장치 접근 권한 동의</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Details')}>
          <Image source={Images.point} style={{width:20, height:20}}></Image>
          </TouchableOpacity>
        </View> 
      </View>

      <View style={{marginBottom:20, fontSize:1,}}>
      <Text style={{fontSize:12,color:'rgb(167,167,167)'}}>팀프앙은 모두가 사용 가능한 서비스이며, 타인의 계정으로 본 서비스를 사용하는 경우 정보통신망 이용촉진 및 정보보호 등에 관한 법률에 의거하여 처벌을 받을 수 있습니다.</Text> 
      </View>

      {/* justifyContent:'center', alignItems:'center' 이거 왜 적용안되지 */}
      <TouchableOpacity onPress={() => navigation.navigate('Details')}>
        <View style={{ marginLeft:5}} onPress={()=> navigation.navigate('Details')}>   
          <Image source={Images.TermButton} style={{width:350,height:50}} ></Image> 
        </View>
      </TouchableOpacity>
    </View>
    </View>
    </View>
  );
}


function App() { //main
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUpTerm" component={SignUpTermScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    paddingTop: 40,
  },
  inner_container: { //메인
    flex: 1,
    marginLeft:40,
    marginTop:60,
  },
  center_container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',

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
    justifyContent: "center",
    paddingBottom : 30,
    paddingTop:60,
  },
  TermHeader:{
    flexDirection:'row',
    marginTop: 30,
    marginBottom:30,
    marginRight:100,
    fontFamily: 'NEXONLv2GothicMedium',

  },

  TermText:{ 
    marginTop:-10,
    color:'#399FFB',
    // marginRight:60,
    fontSize: 50,    
    fontFamily: 'NEXONLv2GothicMedium',
  },

  agreement:{
    color:'rgb(74,74,74)',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft:10,   
    marginRight:85,
  },
 

});


export default App;
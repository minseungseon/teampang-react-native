// In App.js in a new project

import * as React from 'react';
import { View, Text, Button,StyleSheet,ImageBackground,Image, SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Images from './assets/images';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';

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
    <View style={{backgroundColor:'rgb(255,255,255)', width:'100%', height:'100%'}} >
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
    marginRight:100
  },

  TermText:{ 
    marginTop:-10,
    color:'#399FFB',
    // marginRight:60,
    fontSize: 50,    
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
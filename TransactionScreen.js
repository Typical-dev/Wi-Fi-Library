import  React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import * as Permissions from 'expo-permissions'
import { BarCodeScanner } from 'expo-barcode-scanner'
import { TouchableOpacity } from 'react-native';

export default class TransactionScreen extends React.Component{
  constructor(){
    super();
    this.state = {
      hasCameraPermissions: "",
      scanned:false,
      scanData:"",
    }
  }
  getCameraPermissions = async ()=>{
    const {status} = await Permissions.askAsync(Permissions.CAMERA)
    this.setState({hasCameraPermissions:status === "granted"})
  }
 render(){
   return(
       <View>
       <Text>Issue-Or-Return</Text>
       <TouchableOpacity onPress = {this.getCameraPermissions}>
     <Text>Scan-QR-Code</Text>
     </TouchableOpacity>
     </View>
   )
 }
}
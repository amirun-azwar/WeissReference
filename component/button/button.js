import React, { Children } from 'react';
import {Text,Button,StyleSheet,View } from 'react-native';

const MenuButton = ({text,onClick}) =>{
    const styles= StyleSheet.create({
        container:{
            width:'50%',
            // height:'100%',
            marginBottom:10
        }
    });

    return(
        <View style={styles.container}>
            <Button title={text} color={'blue'} onPress={onClick}/>
        </View>
    )
}
export default MenuButton;
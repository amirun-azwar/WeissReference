import React,{useEffect, useState} from 'react';
import {View,Text,Image} from 'react-native';


export default function RenderContent ({item}){

    return(
        <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 40 }}>
            <Image source={{ uri: item.image }} style={{ width: 250, height: 350, borderRadius: 2 }} />
            <View style={{ marginTop: 20 }} />
            <Text style={{ color: 'white', marginBottom: 10 }}>
            {'Name : '}{item.name}
            </Text>
            <Text style={{ color: 'white', marginBottom: 10 }}>
            {'Code : '}{item.code}
            </Text>
            <View style={{ borderWidth: 1, borderColor: 'white', padding: 25 }}>
            <View>
                <Text style={{ color: 'white' }}>Ability :</Text>
                {item.ability.map((ability, index) => (
                <Text key={index} style={{ color: 'white' }}>{ability}</Text>
                ))}
            </View>
            </View>
        </View>
    )
}


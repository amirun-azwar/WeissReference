import React from 'react';
import {ScrollView, View} from 'react-native';
import { MenuButton } from '../component/button';

export default function MainMenu({ setPage }) {
    return (
        <ScrollView>
            <View style={{display:'flex', justifyContent: 'center', alignItems: 'center',  margin:50 }}>
                <MenuButton text={'Oshi no Ko'} onClick={() => { setPage(1) }} />
                <MenuButton text={'Bocchi the Rock'} onClick={() => { setPage(2) }} />
            </View>
        </ScrollView>

    );
};


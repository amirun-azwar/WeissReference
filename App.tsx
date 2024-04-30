/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React,{useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  ScrollView ,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Dimensions
} from 'react-native';

import {background} from './assets/images'
import data from './WeissDB/OSK_S107.json'
import MainMenu from './pages/Menu';
import OshiNoKo from './pages/OshiNoKo';
import Bocchi from './pages/Bocchi';

function App(): JSX.Element {
  const [page,setPage] = useState(0)
  const { width, height } = Dimensions.get('window')

  return (
    <ScrollView >
      <ImageBackground source={background}style={{width:width, height:height}}>
        {
          page === 0 && (
            <MainMenu setPage={setPage}/>
          )
        }
        {
          page === 1 && (
            <OshiNoKo setPage={setPage}/>
          )
        }
        {
          page === 2 &&(
            <Bocchi setPage={setPage}/>
          )
        }

      </ImageBackground>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 10,
    alignItems: 'center'
  },

  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

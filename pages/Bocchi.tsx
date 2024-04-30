import React,{useEffect, useState} from 'react';
import {View,TextInput, ScrollView, BackHandler, ActivityIndicator, Text} from 'react-native';
import data from '../WeissDB/BTR_W107.json'
import { MenuButton } from '../component/button';
import RenderContent from './Content';

export default function Bocchi({setPage}){

    const [cardData,setCardData] = useState([])
    const [searchQuery, setSearchQuery] = useState('')
    const [loading,setLoading] = useState(true)
    const [visibleItems, setVisibleItems] = useState(10);

    useEffect(()=>{
        setCardData(data)
        setLoading(false)
    },[])
    useEffect(() => {
        const backAction = () => {
            setPage(0)
          return true; 
        };
    
        const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
    
        return () => backHandler.remove();
      }, []);


      const handleSearch=()=>{
        const filtered = data.filter((item) =>
            item.code.toLowerCase().includes(searchQuery.toLowerCase())
          );
          setCardData(filtered)
        }

      const handleClear=()=>{
        setSearchQuery('')
        setCardData(data)
      }

      const loadMoreItems = () => {
        setLoading(true);
        // Simulate loading delay
        setTimeout(() => {
        setVisibleItems(visibleItems + 10); // Increase visible items by 10
          setLoading(false);
        }, 1000);
      };

      const handleInput = (query) => {
        setSearchQuery(query)
      }

    return(
        <ScrollView>
            <View style={{margin:20,}}>
                <MenuButton text={'Back'} onClick={()=> setPage(0)}/>
                <View style={{alignItems: 'center'}}>
                    <Text style={{marginBottom:10}}>{'Search Input'}</Text>
                    <TextInput value={searchQuery} style={{borderWidth:1,borderColor:'white',width:250, height:40, marginBottom:20}} onChangeText={handleInput}/>
                    <MenuButton text="Clear" onClick={()=>handleClear()} />
                    <MenuButton text="Search" onClick={()=>handleSearch()} />
                </View>
                {cardData.slice(0, visibleItems).map((item, index) => (
          <RenderContent key={index} item={item} />
        ))}
        {visibleItems < cardData.length && !loading && (
          <View style={{ alignItems: 'center', marginTop: 20 }}>
            <MenuButton text="Load More" onClick={loadMoreItems} />
          </View>
        )}
        {loading && (
          <View style={{ alignItems: 'center', marginTop: 20 }}>
            <ActivityIndicator size="large" color="blue" />
          </View>
        )}
            </View>
        </ScrollView>
    )

}
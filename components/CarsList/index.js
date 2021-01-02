
import React from 'react';
import { View, FlatList, Text} from 'react-native';

import styles from './styles';
import cars from './cars'; //dummy data

import CarItem from '../CarItem' //car item


const CarsList = (props) => {
    return (
     <View style = {styles.container}>
        <FlatList
         data = {cars}
         renderItem = {({item}) => <CarItem car = {item}/>}
        />
     </View>
    );
}

export default CarsList;
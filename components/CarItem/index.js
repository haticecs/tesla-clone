import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styles from './styles';

import StyledButton from '.././StyledButton';

const CarItem = (props) => {
  const { name, tagline, taglineCTA, image } = props;

  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />

      <View style={styles.titleContainer}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline}
           {' '}
          <Text style={styles.subtitleCTA}>
            {taglineCTA}
          </Text>
        </Text>
        <Text></Text>
      </View>

      <View style={styles.buttonsContainer}>
        <StyledButton
          type='primary'
          content='Custom Order'
          onPress={() => {
            console.warn('Custom Order button is pressed');
          }}
        />
        <StyledButton
          type='secondary'
          content='EXISTING INVENTORY'
          onPress={() => {
            console.warn('Existing Inventory button is pressed');
          }}
        />
      </View>
    </View>
  );
};

export default CarItem;

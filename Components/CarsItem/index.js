import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import StyledButton from "../StyleButton";
import styles from './style';

const CarItem = (props) => {

  return (
    <View style={styles.carContainer}>

            <ImageBackground
            source={require('../../assets/images/ModelX.jpeg')}
            style={styles.image}
            />

            <View style={styles.titles}>
            <Text style={styles.title}>Model S</Text>
            <Text style={styles.subtitle}>Starting at $69,420</Text>
            </View>

            <StyleButton
                type="primary"
                content={"Custom Order"}
                onPress={() => {
                    console.warn( data:"Custom Order was pressed");
                }}
            />

            <StyleButton
                type="secondary"
                content={"Existing Inventory"}
                onPress={() => {
                    console.warn( data:"Existing Inventory was pressed");
                }}
            />
        </View>
  );
};

export default CarItem;
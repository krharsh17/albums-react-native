import React, { Component } from 'react';
import { Text, View } from 'react-native';

const Album = (props) => {
    return (
        <View>
            <Text>{ props.albumName }</Text>
        </View>
    );
};

export default Album;

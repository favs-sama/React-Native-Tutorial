import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

class PickLocation extends Component {
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.placeHolder}><Text>Map</Text></View>
                <View style={styles.button}>
                    <Button title="Locate Me" />
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: "center"
    },
    placeHolder: {
        borderWidth: 1,
        borderColor: "black",
        backgroundColor: "#eee",
        width: "80%",
        height: 150
    },
    button: {
        margin: 8
    }
});

export default PickLocation;
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PlaceInput from '../../components/PlaceInput/PlaceInput';
import { connect } from 'react-redux';
import { addPlace } from '../../store/actions/index';

class SharePlaceScreen extends Component {
    static navigationOptions = {
        title: 'Share Place'
    }

    placeAddedHandler = placeName => {
        this.props.onAddPlace(placeName)
    }

    render() {
        const { navigation } = this.props.navigation;
        return (
            <View>
                <PlaceInput onPlaceAdded={ this.placeAddedHandler }/>
            </View>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddPlace: (placeName) => dispatch(addPlace(placeName))
    }
};

export default connect(null, mapDispatchToProps)(SharePlaceScreen);
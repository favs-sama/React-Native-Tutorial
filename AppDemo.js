import React from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';

import PlaceInput from "./src/components/PlaceInput/PlaceInput";
import PlaceList from "./src/components/PlaceList/PlaceList";
import PlaceDetail from "./src/components/PlaceDetail/PlaceDetail";
import { addPlace, deletePlace, selectPlace, deselectPlace } from './src/store/actions/index';

class AppDemo extends React.Component {
    
  placeAddedHandler = placeName => {
    this.props.onAddPlace(placeName)
  };

  placeSelectedHandler = key => {
    this.props.onSelectPlace(key)
  };

  PlaceDeletedHandler = () => {
    this.props.onDeletePlace()
  };

  ModalClosedHandler = () => {
    this.props.onDeselectPlace()
  };
  render() {
    return(
        <View style={styles.container}>
            <PlaceDetail selectedPlace={this.props.selectedPlace}
                        OnItemDeleted={this.PlaceDeletedHandler}
                        OnModalClosed={this.ModalClosedHandler}/>
            <PlaceInput onPlaceAdded={this.placeAddedHandler}/>
            <PlaceList places={this.props.places} 
                       OnItemSelected={this.placeSelectedHandler}/>
        </View>
    );
}
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 50,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
    }
  });


const mapStateToProps = state => {
    return {
      places: state.places.places,
      selectedPlace: state.places.selectedPlace
    };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (name) => dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: (key) => dispatch(selectPlace(key)),
    onDeselectPlace: () => dispatch(deselectPlace())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppDemo);
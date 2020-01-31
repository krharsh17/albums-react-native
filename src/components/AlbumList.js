import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';


class AlbumList extends Component {
    // eslint-disable-next-line no-undef
    state = { albums: [] };


    componentDidMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then((response) => {
           this.setState({ albums: response.data });
        });
    }
    
    renderAlbums() {
        return this.state.albums.map(album => <Text>{album.title}</Text>);
    }
    
    render() {
        console.log(this.state.albums[0]);
        return (
            <View>
                { this.renderAlbums() }
            </View>
        );
    }
}

export default AlbumList;

// @flow
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

// make a component
type State = { albums: [] };
type Props = {};

class AlbumList extends Component<Props, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      albums: []
    };
  }

  async componentWillMount() {
    const response = await axios.get('https://rallycoding.herokuapp.com/api/music_albums');
    this.setState({ albums: response.data });
  }

  renderAlbums() {
    return this.state.albums.map(album => <AlbumDetail key={album.title} album={album} />);
  }

  render() {
    return <ScrollView>{this.renderAlbums()}</ScrollView>;
  }
}

export default AlbumList;

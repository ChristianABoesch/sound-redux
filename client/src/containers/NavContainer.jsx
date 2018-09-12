import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux'
import { firebaseConnect } from 'react-redux-firebase'
import { navigateTo } from '../actions/RouterActions';
import { fetchNewStreamSongs, loadNewStreamSongs, login, logout } from '../actions/SessionActions';
import Nav from '../components/Nav';
import { getIsAuthenticated, getNewStreamSongs, getSessionUser, getShowLikes, getShowPlaylist, getShowStream, getAuth } from '../selectors/CommonSelectors';
import { getNavPlaylist, getNavPlaylists, getStreamFutureUrl } from '../selectors/NavSelectors';

const NavContainer = props => <Nav {...props} />;

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
  navPlaylist: getNavPlaylist(state),
  navPlaylists: getNavPlaylists(state),
  newStreamSongs: getNewStreamSongs(state),
  showLikes: getShowLikes(state),
  showPlaylist: getShowPlaylist(state),
  showStream: getShowStream(state),
  streamFutureUrl: getStreamFutureUrl(state),
  user: getSessionUser(state),
  auth: getAuth(state),
});

export default compose(
  firebaseConnect(),
  connect(mapStateToProps, {
    fetchNewStreamSongs,
    loadNewStreamSongs,
    login,
    logout,
    navigateTo,
  }))(NavContainer);

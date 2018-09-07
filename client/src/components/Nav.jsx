import PropTypes from 'prop-types';
import React from 'react';
import Link from '../components/Link';
import NavSearch from '../components/NavSearch';
import NavSession from '../components/NavSession';
import NavUser from '../components/NavUser';
import { SONGS_PATH } from '../constants/RouterConstants';

const defaultProps = {
  navPlaylist: null,
  user: null,
};

const propTypes = {
  fetchNewStreamSongs: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  loadNewStreamSongs: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  navigateTo: PropTypes.func.isRequired,
  navPlaylist: PropTypes.shape({}),
  navPlaylists: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  newStreamSongs: PropTypes.arrayOf(PropTypes.number).isRequired,
  showLikes: PropTypes.bool.isRequired,
  showPlaylist: PropTypes.bool.isRequired,
  showStream: PropTypes.bool.isRequired,
  streamFutureUrl: PropTypes.string.isRequired,
  user: PropTypes.shape({}),
  auth: PropTypes.object.isRequired,
  firebase: PropTypes.object.isRequired,
};

const Nav = ({
  fetchNewStreamSongs,
  isAuthenticated,
  loadNewStreamSongs,
  login,
  logout,
  navigateTo,
  navPlaylist,
  navPlaylists,
  newStreamSongs,
  showLikes,
  showPlaylist,
  showStream,
  streamFutureUrl,
  user,
  auth,
  firebase,
}) => (
  <div className="nav">
    <div className="nav__inner container">
      <div className="nav__section">
        <i className="nav__logo__icon ion-radio-waves" />
        <Link
          className="nav__logo__text"
          navigateTo={navigateTo}
          path={SONGS_PATH}
        >
          MusicDrop
        </Link>
      </div>
      <div className="nav__section nav__section--session">
        <NavSession
          fetchNewStreamSongs={fetchNewStreamSongs}
          isAuthenticated={isAuthenticated}
          loadNewStreamSongs={loadNewStreamSongs}
          navigateTo={navigateTo}
          navPlaylist={navPlaylist}
          navPlaylists={navPlaylists}
          newStreamSongs={newStreamSongs}
          showLikes={showLikes}
          showPlaylist={showPlaylist}
          showStream={showStream}
          streamFutureUrl={streamFutureUrl}
        />
      </div>
      <div className="nav__section nav__section--search">
        <NavSearch navigateTo={navigateTo} />
      </div>
      <div className="nav__section nav__section--user">
        <NavUser
          isAuthenticated={isAuthenticated}
          login={firebase.login}
          logout={firebase.logout}
          showPlaylist={showPlaylist}
          user={user}
          auth={auth}
        />
      </div>
    </div>
  </div>
);

Nav.defaultProps = defaultProps;
Nav.propTypes = propTypes;

export default Nav;
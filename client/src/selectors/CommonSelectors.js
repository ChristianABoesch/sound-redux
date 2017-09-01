// authed selectors
export const getAccessToken = state => state.authed.accessToken;

// entities selectors
export const getEntities = state => state.entities;

// router selectors
export const getGenre = state => state.router.route.options.g || 'house';
export const getSearch = state => state.router.route.options.q || '';
export const getTime = state => (state.router.route.options.t
  ? Number(state.router.route.options.t)
  : null
);

// playlists selectors
export const getPlaylists = state => state.playlists;
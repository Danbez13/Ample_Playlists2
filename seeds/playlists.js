
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('playlists').del()
    .then(function () {
      // Inserts seed entries
      return knex('playlists').insert([
        {id: 1, playlist: 'Pop-Punk', url : 'https://open.spotify.com/playlist/3MvFIlC4hRSDIGlEaJIrIJ?si=X4_EKHTRQou2VcdrnOVJfw'},
        {id: 2, playlist: 'Pop', url : 'https://open.spotify.com/playlist/4iT9fHcrVJikWEvuCFMXPJ?si=LRMdVztNQN-r6D9UxKtbKg'},
        {id: 3, playlist: 'Britpop', url : 'https://open.spotify.com/playlist/0S8f400klCXNlDaOb68c94?si=LTW3G3r-Quu9xitB9yv9dw'},
        {id: 4, playlist: 'Rock', url : 'https://open.spotify.com/playlist/0WyvYpg4AmSVIIf0oy3fu1?si=NmthYirMSaSdr8icc8q-Cg'},
        {id: 5, playlist: 'Musicals', url : 'https://open.spotify.com/playlist/1oPAchkFYkxbw14NLRw1Kg?si=cd9_XIvLTx2nNgH2KY-DBg'},
        {id: 6, playlist: 'Post-Punk Revival', url : 'https://open.spotify.com/playlist/1k25OCpIg79cp54OSBkt6E?si=QOtMT7t1SLi45N-YjAooGg'},
        {id: 7, playlist: 'Disney', url : 'https://open.spotify.com/playlist/5svor1pomjV608qLiJRgVs?si=BXWYIcVHRw-37X_lqu8rzA'},
        {id: 8, playlist: 'Punk', url : 'https://open.spotify.com/playlist/30tO0q38XlL4Zekn8k5BGT?si=nJtDZHD6QNWlAqQ-MJuZKg'},
        {id: 9, playlist: 'Alt-Rock', url : 'https://open.spotify.com/playlist/31DQUJTHkXD38n1obVnnh6?si=1BTAyvUYTa-OyZuL3a95wg'},
      ]);
    });
};

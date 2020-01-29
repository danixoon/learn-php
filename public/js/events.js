$(document).ready(function() {
  $(".form__auth").submit(async function(e) {
    e.preventDefault();
    Downloader.fetchUser();
  });
});

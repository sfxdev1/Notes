(function(){
    // Initialize Firebase
        var config = {
            apiKey: "AIzaSyADvnNm1M7RN2_X_dIsX5PsdupEaAgg6XY",
            authDomain: "notes-5ca5c.firebaseapp.com",
            databaseURL: "https://notes-5ca5c.firebaseio.com",
            storageBucket: "notes-5ca5c.appspot.com",
        };
        firebase.initializeApp(config);
        var uiConfig = {
        'signInSuccessUrl': '<url-to-redirect-to-on-success>',
        'signInOptions': [
          // Leave the lines as is for the providers you want to offer your users.
          firebase.auth.GoogleAuthProvider.PROVIDER_ID
        ],
        // Terms of service url.
        'tosUrl': '<your-tos-url>',
      };

      // Initialize the FirebaseUI Widget using Firebase.
      var ui = new firebaseui.auth.AuthUI(firebase.auth());
      // The start method will wait until the DOM is loaded.
      ui.start('#firebaseui-auth-container', uiConfig);
})();
(function($){
  $(function(){

    $('.button-collapse').sideNav();

  }); // end of document ready
})(jQuery); // end of jQuery name space
$(document).ready(function(){
    
});
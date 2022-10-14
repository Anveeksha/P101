// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
     apiKey: "AIzaSyDivDBP9mNx2FAwamc-3Iq6i-Rr015vQCU",
      authDomain: "let-s-chat-anveeksha.firebaseapp.com",
       databaseURL: "https://let-s-chat-anveeksha-default-rtdb.firebaseio.com",
        projectId: "let-s-chat-anveeksha", 
        storageBucket: "let-s-chat-anveeksha.appspot.com",
         messagingSenderId: "486688046309",
          appId: "1:486688046309:web:e749aa8d6ee56e6f99280c",
           measurementId: "G-5BD5JJ503L"
         }; // Initialize Firebase 
         firebase.initializeApp(firebaseConfig);

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}




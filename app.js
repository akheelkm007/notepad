// Initialize Firebase
var config = {
apiKey: "AIzaSyCMrf4VXTAPC_ZeplaJfKbIfhHPgwvxqO8",
authDomain: "chat-application-ba784.firebaseapp.com",
databaseURL: "https://chat-application-ba784.firebaseio.com",
storageBucket: "",
};
firebase.initializeApp(config);

var textBox = document.getElementById('text-box');
var keyBox = document.getElementById('key');
var textValue = '';
var reference;

function readMessage () {
	reference.on('value', function (ss) {
		textBox.value = ss.child('message').val();
	});	 
}

function sendMessage() {
	textValue = textBox.value;
	reference.set({
		message : textValue
	});
}

keyBox.addEventListener('keyup', function (evt) {	
	if (evt.keyCode == 13) {
		reference = firebase.database().ref().child(keyBox.value);
		readMessage();
	}
});


textBox.addEventListener('keyup', sendMessage);
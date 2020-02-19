(function() {
	
	// Firebase configuration
	var firebaseConfig = {
		apiKey: "AIzaSyCELGwrnPTQI38dQlztxcb_bD2w8pJBvlo",
		authDomain: "o-cheese-us.firebaseapp.com",
		databaseURL: "https://o-cheese-us.firebaseio.com",
		projectId: "o-cheese-us",
		storageBucket: "o-cheese-us.appspot.com",
		messagingSenderId: "900960262358",
		appId: "1:900960262358:web:b4ad9458e12163ac7d1177",
		measurementId: "G-18YJ8L96FN"
	};
		  
	// Initialize Firebase
	firebase.initializeApp(firebaseConfig);
	firebase.analytics();
	
	const txtEmail = document.getElementById('txtEmail');
	const txtPassword = document.getElementById('txtPassword');
	const btnLogin = document.getElementById('btnLogin');
	const btnSignUp = document.getElementById('btnSignUp');
	
	btnLogin.addEventListener('click', e => {
		
		console.log("Login clicked");
		
		const email = txtEmail.value;
		const pass = txtPassword.value;
		const auth = firebase.auth();
		
		// Sign in
		const promise = auth.signInWithEmailAndPassword(email, pass);
		promise.catch(e => console.log(e.message));
	});
	
}());
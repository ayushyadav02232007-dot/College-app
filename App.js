// 1. Your web app's Firebase configuration
// (Get this from your Firebase Project Settings)
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// 2. Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// 3. DOM Elements
const authBtn = document.getElementById('authBtn');
const submitPostBtn = document.getElementById('submitPost');
const postContentInput = document.getElementById('postContent');
const feed = document.getElementById('feed');

// 4. Authentication Mockup (To be connected to actual Firebase Auth)
authBtn.addEventListener('click', () => {
    // In a real app, this would trigger firebase.auth().signInWithPopup()
    alert("Authentication modal would open here!");
    authBtn.innerText = "Logged In";
});

// 5. Handling Post Submissions
submitPostBtn.addEventListener('click', async () => {
    const text = postContentInput.value.trim();
    
    if (text === "") {
        alert("Please write something before posting.");
        return;
    }

    // Create a new post HTML element locally for immediate feedback
    const newPostHTML = `
        <div class="post card">
            <div class="post-header">
                <strong>You</strong>
                <span class="badge branch">Your Branch</span>
                <span class="badge college">Your College</span>
            </div>
            <div class="post-body">
                ${text}
            </div>
            <div class="post-footer">
                <button class="btn btn-sm">👍 Upvote (0)</button>
                <button class="btn btn-sm">💬 Comment (0)</button>
            </div>
        </div>
    `;

    // Add to the top of the feed
    feed.insertAdjacentHTML('afterbegin', newPostHTML);

    // Clear the input
    postContentInput.value = "";

    /* // REAL DATABASE LOGIC (Uncomment when Firebase Firestore is set up)
    try {
        await db.collection("posts").add({
            text: text,
            author: "User", // Should be user's actual name
            branch: "CS",   // Should be user's actual branch
            college: "NIT", // Should be user's actual college
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        console.log("Post successfully written to database!");
    } catch (error) {
        console.error("Error writing document: ", error);
    }
    */
});

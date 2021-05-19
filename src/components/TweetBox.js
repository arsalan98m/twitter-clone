import React, { useState, useEffect } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db, { auth } from "../firebase";
import firebase from "firebase/app";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");

  useEffect(() => {
    setPhotoUrl(auth.currentUser.photoURL);
  }, []);

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: auth.currentUser.displayName,
      username: `@${auth.currentUser.displayName.split(" ")[0]}`,
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: photoUrl,
      likes: 0,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setTweetImage("");
    setTweetMessage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src={photoUrl} />
          <input
            type="text"
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
            placeholder="What's happening?"
          />
        </div>

        <input
          type="text"
          placeholder="Optional: Enter image URL"
          className="tweetBox__imageInput"
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
        />
        <Button onClick={sendTweet} className="tweetBox__tweetButton">
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;

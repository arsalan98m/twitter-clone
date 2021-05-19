import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterTweetEmbed,
  TwitterShareButton,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";
function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={"1394170667113844738"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="arsalan90m"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://www.facebook.com/profile.php?id=100006634666984"}
          options={{ text: "#reactjs is awesome", via: "arsalan90m" }}
        />{" "}
      </div>
    </div>
  );
}

export default Widgets;

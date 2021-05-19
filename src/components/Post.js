import React, { forwardRef, useState } from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PublishIcon from "@material-ui/icons/Publish";
import db from "../firebase";

const Post = forwardRef(
  (
    { id, displayName, username, verified, likes, text, image, avatar },
    ref
  ) => {
    const [liked, setLiked] = useState(false);

    const like = () => {
      setLiked(true);
      db.collection("posts")
        .doc(id)
        .update({
          likes: likes + 1,
        });
    };

    return (
      <div className="post" ref={ref}>
        <div className="post__avatar">
          <Avatar src={avatar} />
        </div>

        <div className="post__body">
          <div className="post__bodyHeader">
            <div className="post__bodyHeaderText">
              <h3>
                {displayName}
                <span className="post__bodyHeaderSpecial">
                  {verified && <VerifiedUserIcon className="post__bodyBadge" />}{" "}
                  {username}
                </span>
              </h3>
            </div>

            <div className="post__bodyHeaderDescription">
              <p> {text}</p>
            </div>
          </div>
          <img src={image} alt="" />

          <div className="post__bodyFooter">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <div className="post__bodyFooterLike" onClick={like}>
              {liked || likes ? (
                <FavoriteIcon
                  fontSize="small"
                  className="post__bodyFooterLikedIcon"
                />
              ) : (
                <FavoriteBorderIcon fontSize="small" />
              )}
              {likes > 0 && <p>{likes}</p>}
            </div>
            <PublishIcon fontSize="small" />
          </div>
        </div>
      </div>
    );
  }
);

export default Post;

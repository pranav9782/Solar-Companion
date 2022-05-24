import React from "react";
import PostItem from "./post-item";
import Bkg from '../GeneralisedImage/background.png';

const PostList = (props) => {
  console.log("post list", props.data);
  const { data } = props;

  return (
    <div>
      <img className="bg-image" alt='...' src={Bkg} style={{height:'auto',width:'100%'}}></img>
      {data.map((item) => {
        return (
          <PostItem
            key={item.id}
            title={item.title}
            description={item.description}
          />
        );
      })}
    </div>
  );
};

export default PostList;

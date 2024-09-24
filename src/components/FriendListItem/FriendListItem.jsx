import React from "react";
import clsx from "clsx";
import style from "./FriendListItem.module.css";

const FriendListItem = ({ isOnline, name, avatar }) => {
  return (
    <div>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
      <p className={clsx(style.status, style[isOnline])}>
        {isOnline ? "isOnline" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;

import React from "react";

export const navRef = React.createRef();

export const navigate = (_routeName) => {
  navRef.current.history.push(_routeName);
};

import React from "react";
import {
  Link,
  useMatch,
  useResolvedPath,
} from "react-router-dom";

export const  CustomLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
        <Link
          style={{ textDecoration: match ? "underline" : "none", color: match ? "red" : "green" }}
          to={to}
          {...props}
        >
          {children}
        </Link>
    );
}
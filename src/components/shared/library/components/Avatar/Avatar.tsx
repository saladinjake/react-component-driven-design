import React from "react";
import { StyledAvatar } from "./Avatar.styles";
import { AvatarProps } from "./Avatar.types";

const Avatar: React.FC<AvatarProps> = ({
  shape = "square",
  size = "md",
  src,
  text = "Avatar",
  name,
}) => {
  return (
    <StyledAvatar shape={shape} size={size}>
      <img src={src} alt={name} />
    </StyledAvatar>
  );
};

export default Avatar;

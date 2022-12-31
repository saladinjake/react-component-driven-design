import { Box } from "kuda-component-library";
import { useState, useRef } from "react";
import styled from "styled-components";
import { Svg } from "assets/svg";
import useOnClickOutside from "utils/hooks/useOnClickOutside";

const SearchInput = (props) => {
  const {
    children,
    onChange,
    value = "",
    disabled = false,
    fontSize = "14px",
    borderRadius = "5px",
    height = "50px",
  } = props;
  const node = useRef();
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [searchQuery, setSearchQuery] = useState(value);

  const handleChange = ({ target }) => {
    if (target.value) {
      setShowSearchResults(true);
    } else {
      setShowSearchResults(false);
    }
    setSearchQuery(target.value);
    onChange(target.value);
  };

  const handleClick = () => {
    setShowSearchResults(false);
  };

  useOnClickOutside(node, handleClick);

  return (
    <Box height={height} width="full" position="relative">
      <StyledSearchIcon />

      <StyledInput
        type="text"
        placeholder="Search modules"
        fontSize={fontSize}
        borderRadius={borderRadius}
        value={searchQuery}
        onChange={handleChange}
        disabled={disabled}
      />

      {typeof children === "function" &&
        children(showSearchResults, setShowSearchResults, setSearchQuery, node)}
    </Box>
  );
};

export default SearchInput;

const StyledInput = styled.input<{ fontSize: string; borderRadius: string }>`
  width: 100%;
  height: 100%;
  background: #ffffff;
  border: 1px solid #dbdce0;
  border-radius: 5px;
  font-weight: 600;
  font-size: 14px;
  padding-left: 45px;

  &::placeholder {
    color: #979797;
  }
`;

const StyledSearchIcon = styled(Svg.Search)`
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  position: absolute;
`;

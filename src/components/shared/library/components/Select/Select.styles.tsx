import styled from "styled-components";

const StyledSelect = styled.div<{
  width: string;
  disabled: boolean;
  placeholderIsSelected?: boolean;
  hasShadow?: boolean
}>`
  display: flex;
  flex-direction: column;
  width: ${({ width }) => width || "300px"};
  position: relative;
  color: ${(props) => (props.disabled ? "#6a6a6a" : "#000")};

  select {
    display: none;
  }

  .label {
    font-weight: normal;
    font-size: 13.5px;
    line-height: 18px;
    color: #000;
    text-transform: capitalize;
    margin-bottom: 10px;
  }

  .label-star {
    color: #f7685b;
  }

  .selected {
    display: flex;
    align-items: center;
    position: relative;
    height: 46px;
    background: #fff;
    border: 1px solid #f4f4f4;
    box-sizing: border-box;
    box-shadow: ${(props) => props.hasShadow ? '0px 2px 2px rgba(0, 0, 0, 0.1)': ''} ;
    border-radius: 5px;
    padding: 0 40px 0 12px;
    color: ${(props) =>
      props.disabled
        ? "#6a6a6a"
        : `${props.placeholderIsSelected ? "#6a6a6a" : "#000"}`};
    cursor: pointer;
  }

  .selected:after {
    position: absolute;
    content: "";
    top: 20px;
    right: 16px;
    width: 0;
    height: 0;
    border: 6px solid transparent;
    border-color: #000000 transparent transparent transparent;
  }

  .select-items {
    position: absolute;
    z-index: 1000000;
    width: 100%;
    top: 80px;
    background: #ffffff;
    border: 1px solid rgba(219, 220, 224, 0.5);
    box-shadow: 15px 30px 40px rgba(64, 25, 109, 0.07);
    border-radius: 5px;
    padding: 6px;
    cursor: pointer;
    max-height: 200px;
    overflow-y: scroll;
    overflow-x: hidden;

    ::-webkit-scrollbar {
      width: 10px;
    }
    
    /* Track */
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 10px;
    }
    
    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  }

  .select-items div {
    display: flex;
    padding: 15px;
    height: 49px;
    border-bottom: 1px solid #f4f4f4;

    &:hover {
      background: #f4f4f4;
    }
  }

  .error {
    display: inline-flex;
    align-items: center;
    margin-top: 10px;
    font-size: 12px;
    color: ${(props) => props.theme.colors.Red};

    img {
      display: inline-block;
      margin-right: 4px;
    }
  }
`;

export default StyledSelect;

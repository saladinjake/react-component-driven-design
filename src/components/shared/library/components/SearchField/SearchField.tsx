import React , { useState, useEffect} from "react";
import Button from "../Button";
import { StyledSearchField } from "./SearchField.styles";
import { SearchFieldProps } from "./SearchField.types";
import { Svg } from "./../../assets/svg";

const { Search } = Svg;

const SearchField: React.FC<SearchFieldProps> = ({
  error,
  placeholder,
  width,
  withBtn,
  btnText,
  onChange,
  height,
  value,
  onButtonClick,
  onResetSearch,
  searchColumns
}) => {
  const [clicked, setClicked] = useState(false)
  const [touched, setTouched] = useState(false)
  const [searchBy, setSearchColumns] = useState([])
  const [searchColumnsString, setSearchString] =  useState("")
  useEffect(()=>{
    if(value?.length<=0 ){
      setClicked(false)
      setTouched(false)
    }
  },[value, clicked, touched])

  useEffect(()=>{
    searchColumns.forEach(searchItem=>{
      if(!searchBy.includes(searchItem?.name)){
        setSearchColumns([...searchBy,searchItem?.name ])
      }
       
    })
    setSearchString(searchBy.join(" ,"))
  },[searchColumns])

  const handleFocus = (ev) =>{
    var tooltip= ev.target.nextElementSibling;
    if (tooltip && tooltip.className=='tooltip'){
      tooltip.style.opacity= 1;
    }
  }
  const handleBlur =(ev) =>{
    var tooltip= ev.target.nextElementSibling;
    if (tooltip && tooltip.className=='tooltip'){
      tooltip.style.opacity= 0;
    }
  }


 

  return (
    <StyledSearchField error={error} width={width} height={height}>
      <div className="icon">
        <img src={Search} alt="lens icon" />
      </div>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <div className="tooltip">{"Search table by " + searchColumnsString }</div>
      {withBtn && (
        <>
          {
            (!touched && clicked.toString()!="true") ? (

              <Button width="87px" size="md" type="submit" onClick={onButtonClick}>
                {btnText}
               </Button>
            ): (
              <Button width="87px" size="md" type="submit" onClick={() =>{
                setTouched(false)
                if(onResetSearch)onResetSearch()
               
              }}>
              Reset
            </Button>
             
             
            )
          }

        </>
        
      )}
    </StyledSearchField>
  );
};

export default SearchField;

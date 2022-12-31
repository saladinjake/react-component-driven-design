import React from "react"
import StyledGridItem from "./GridItem.styles"
import GridItemProps from "./GridItems.type"

const GridItem: React.FC<GridItemProps> = ({
    bg,
    colSpan,
    rowSpan,
    colStart,
    rowStart,
    margin,
    children
}) => {
    return (
        <StyledGridItem 
            bg={bg} 
            colSpan={colSpan} 
            rowSpan={rowSpan} 
            colStart={colStart} 
            rowStart={rowStart}
            margin={margin}
        >
            {children}
        </StyledGridItem>
    )
}

export default GridItem;
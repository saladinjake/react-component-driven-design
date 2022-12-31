import React from 'react';
import StyledGrid from './Grid.styles';
import { GridProps } from './Grid.types';



const Grid: React.FC<GridProps> = ({
    templateColumn,
    templateRow,
    columnGap,
    gap,
    rowGap,
    height,
    margin,
    children
}) => {
    return (
        <StyledGrid 
            templateColumn={templateColumn} 
            templateRow={templateRow}
            columnGap={columnGap}
            gap={gap}
            rowGap={rowGap}
            margin={margin}
        >
            {children}
        </StyledGrid>
    )
}

export default Grid;
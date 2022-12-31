import React from 'react';
import { StyledModalFooter } from './Modal.styles';

type ModalFooterProp = {
    secondaryBtn?: React.ReactNode;
    primaryBtn?: React.ReactNode;
}

export default function ModalFooter({secondaryBtn, primaryBtn}) {
  return (
    <StyledModalFooter>
        {secondaryBtn && 
            (
                <div className='secondaryBtn'>
                    {secondaryBtn}
                </div>
            )
        }
        
        {primaryBtn && 
            (
                <div className='primaryBtn'>
                    {primaryBtn}
                </div>
            )
        }

        
    </StyledModalFooter>
  )
}

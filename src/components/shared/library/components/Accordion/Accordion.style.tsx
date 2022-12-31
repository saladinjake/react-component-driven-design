import styled from "styled-components";

export const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const AccordionLink = styled.button`
  background-color: #fff;
  color: #444;
  cursor: pointer;
  padding: 18px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  transition: background-color 0.6s ease;
  border: 1px solid #eaeaea;
  width: 100%;
  margin-bottom: 15px;
  &.active {
    background-color: #fff;
  }
`;

export const AccordionUI = ({ tag, children, ...props }) => {
  return <AccordionLink {...props}>{children}</AccordionLink>;
};

export const AccordionTitle = styled.p`
  font-weight: 600;
  font-size: 14px;
`;

export const AccordionText = styled.div`
  font-weight: 400;
  font-size: 14px;
  padding: 18px;
`;

export const AccordionContent = ({ tag, children, ...props }) => {
  const AccordionBody = styled(tag)`
    background-color: white;
    overflow: hidden;
    transition: max-height 0.6s ease;
  `;
  return <AccordionBody {...props}>{children}</AccordionBody>;
};

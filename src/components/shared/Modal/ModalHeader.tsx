import React from "react";
import { StyledModalHeader } from "./Modal.styles";

type ModalHeaderProp = {
  title?: string;
  subtitle?: string;
};

export default function ModalHeader({ title, subtitle }: ModalHeaderProp) {
  return (
    <StyledModalHeader subtitle={subtitle}>
      <h2>{title}</h2>
      <div className="subtitle">
        <h6>{subtitle}</h6>
      </div>
    </StyledModalHeader>
  );
}

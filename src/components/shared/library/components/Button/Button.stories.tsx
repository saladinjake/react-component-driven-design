import React from "react";

import Button from "./Button";

export default {
  title: "Form/Button",
  component: Button,
};

export const Size = () => {
  return (
    <div style={{ marginLeft: "10px" }}>
      <div style={{ marginBottom: "10px" }}>
        <Button size="sm">Button</Button>
      </div>
      <div style={{ marginBottom: "10px" }}>
        <Button size="md">Button</Button>
      </div>
      <div style={{ marginBottom: "10px" }}>
        <Button size="lg">Button</Button>
      </div>
    </div>
  );
};

export const Variant = () => {
  return (
    <div style={{ marginLeft: "10px" }}>
      <div style={{ marginBottom: "10px" }}>
        <Button variant="text">Text</Button>
      </div>
      <div style={{ marginBottom: "10px" }}>
        <Button variant="solid">Solid</Button>
      </div>
      <div style={{ marginBottom: "10px" }}>
        <Button variant="outline">Outline</Button>
      </div>
    </div>
  );
};

export const Color = () => {
  return (
    <div style={{ marginLeft: "10px" }}>
      <div style={{ marginBottom: "10px" }}>
        <Button size="sm" color="primary">
          Button
        </Button>
      </div>
      <div style={{ marginBottom: "10px" }}>
        <Button size="md" color="secondary">
          Button
        </Button>
      </div>
      <div style={{ marginBottom: "10px" }}>
        <Button size="lg" color="danger">
          Button
        </Button>
      </div>
    </div>
  );
};

// export const Variant = () => {
//   return (
//     <div style={{ marginLeft: "10px" }}>
//       <div style={{ marginBottom: "10px" }}>
//         <Button variant="primary">Primary</Button>
//       </div>
//       <div style={{ marginBottom: "10px" }}>
//         <Button variant="secondary">Secondary</Button>
//       </div>
//       <div style={{ marginBottom: "10px" }}>
//         <Button variant="danger">Danger</Button>
//       </div>
//     </div>
//   );
// };

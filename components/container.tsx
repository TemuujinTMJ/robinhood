import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="w-screen flex justify-center">
      <div className="w-[1200px]">{children}</div>
    </div>
  );
};

export default Container;

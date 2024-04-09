import * as React from "react";
import { ReactNode } from "react";
import { FaCheck } from "react-icons/fa"; // Importing the FaCheck icon

type PropsType = {
  children: ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
  icon?: ReactNode; // Icon element or component
};

const Button = ({ children, onClick, style, icon }: PropsType) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      style={{
        padding: "10px 20px",
        fontSize: "1.2em",
        borderRadius: "5px",
        cursor: "pointer",
        backgroundColor: "blue",
        color: "white",
        border: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ...style,
      }}
      aria-label="button"
      tabIndex={0}
    >
      {icon && <span style={{ marginRight: "0.5em" }}>{icon}</span>}
      {children}
    </button>
  );
};

Button.defaultProps = {
  onClick: () => {},
  style: {},
};

export { Button };

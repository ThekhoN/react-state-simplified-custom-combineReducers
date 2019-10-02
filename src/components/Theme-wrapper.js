import React from "react";
import styled from "styled-components";
import { Store } from "../index"

const ThemeWrapperDiv = styled.div`
  min-height: 100vh;
  width: 100%;
  padding: 2.6rem;
`;

const ThemeWrapper = ({ children }) => {
  const [state] = React.useContext(Store);
  const { ui } = state;
  const { textColor, bgColor } = ui;
  const style = {
    backgroundColor: bgColor,
    color: textColor
  };
  return <ThemeWrapperDiv style={style}>{children}</ThemeWrapperDiv>;
};

export default ThemeWrapper;

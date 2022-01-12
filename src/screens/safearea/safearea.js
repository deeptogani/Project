import { StatusBar, View } from "react-native";

import styled from "styled-components";

import { Colors } from "../../colors/colors";

export const SafeArea = styled(View)`
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
  background-color : ${Colors.black}};
`;
import React from "react";
import { Stack, Text, Link, IStackTokens, IStackStyles } from "@fluentui/react";
import "./App.css";

import Button from "./components/button/Button";
import TextComponent from "./components/text/TextComponent";
import LinkComponent from "./components/link/LinkComponent";

const stackTokens: IStackTokens = { childrenGap: 15 };
const stackStyles: Partial<IStackStyles> = {
	root: {
		width: "960px",
		margin: "0 auto",
		textAlign: "center",
		color: "#605e5c",
		backgroundColor: "pink",
		minHeight: "100vh"
	},
};

export const App: React.FunctionComponent = () => {
	return (
		<Stack horizontalAlign="center" verticalAlign="center" styles={stackStyles} tokens={stackTokens}>
			<LinkComponent></LinkComponent>
			<TextComponent></TextComponent>
			<Button></Button>
		</Stack>
	);
};

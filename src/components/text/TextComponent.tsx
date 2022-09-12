import { Stack, Text, ITextStyles, FontWeights } from "@fluentui/react";

const boldStyle: Partial<ITextStyles> = { root: { fontWeight: FontWeights.semibold } };
const tokens = {
	outerStack: {
		childrenGap: 30,
		padding: "10px 30px",
	},
	innerStack: {
		childrenGap: 50,
		padding: "20px",
	},
};

// console.log(FontWeights);

const TextComponent = () => {
	return (
		<Stack tokens={tokens.outerStack} style={{ backgroundColor: "aqua" }}>
			<h2>Text:</h2>
			<Text variant="tiny">tiny text</Text>
			<Text variant="xSmall">xSmall text</Text>
			<Text variant="small">small text</Text>
			<Text variant="smallPlus">smallPlus text</Text>
			<Text variant="medium" block>
				medium text
			</Text>
			<Text variant="mediumPlus">mediumPlus text</Text>
			<Text variant="large" styles={boldStyle}>
				large text
			</Text>
			<Text variant="xLarge">xLarge text</Text>
			<Text variant="xxLarge">xxLarge text</Text>
			<Text variant="mega">mega text</Text>
			<Text variant="medium">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam pariatur iure, perferendis cumque odit commodi doloribus illo dolore repellendus alias enim omnis
				veritatis temporibus suscipit quod porro. Temporibus, consequuntur magni.
			</Text>
			<Stack horizontal horizontalAlign="center" tokens={tokens.innerStack} style={{ backgroundColor: "orange" }}>
				<Text variant="large">second stack text 1</Text>
				<Text variant="large">second stack text 2</Text>
				<Text variant="large">second stack text 3</Text>
			</Stack>
		</Stack>
	);
};

export default TextComponent;

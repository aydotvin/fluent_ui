//	https://developer.microsoft.com/en-us/fluentui#/controls/web/link
import { Stack, Link, IStackTokens, ILinkStyles } from "@fluentui/react";

const stackTokens: IStackTokens = { childrenGap: 30, padding: "10px" };
const linkStyles: ILinkStyles = {
	root: {
		color: "white",
	},
};

const clickHandler = (ev: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement | HTMLElement | MouseEvent>) => {
	ev.preventDefault();
	console.log("link clicked");
};

const LinkComponent = () => {
	return (
		<Stack horizontal tokens={stackTokens} horizontalAlign="center" verticalAlign="end" style={{ height: "75px", backgroundColor: "orange" }}>
			<h2>Links:</h2>
			<Link href="https://developer.microsoft.com/en-us/fluentui#/get-started/web" styles={linkStyles}>
				Docs
			</Link>
			<Link href="https://stackoverflow.com/questions/tagged/office-ui-fabric" onClick={clickHandler}>
				Stack Overflow
			</Link>
			<Link href="https://github.com/microsoft/fluentui/" disabled>
				Github
			</Link>
			<Link href="https://twitter.com/fluentui">Twitter</Link>
		</Stack>
	);
};

export default LinkComponent;

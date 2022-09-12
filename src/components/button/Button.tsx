import { Stack, IContextualMenuProps, IIconProps, FontWeights, IStackTokens, IStackStyles, ITextStyles, DefaultButton } from "@fluentui/react";
import { CommandBarButton } from "@fluentui/react/lib/Button";

const menuProps: IContextualMenuProps = {
	items: [
		{
			key: "emailMessage",
			text: "Email message",
			iconProps: { iconName: "Mail" },
		},
		{
			key: "calendarEvent",
			text: "Calendar event",
			iconProps: { iconName: "Calendar" },
			subMenuProps: {
				items: [
					{
						key: "submenu1",
						text: "sub menu 1",
						iconProps: { iconName: "Car" },
					},
					{
						key: "submenu2",
						text: "sub menu 2",
						iconProps: { iconName: "EatDrink" },
					},
				],
			},
		},
	],
};
const addIcon: IIconProps = { iconName: "Phone" };
const mailIcon: IIconProps = { iconName: "Mail" };
const stackStyles: Partial<IStackStyles> = { root: { backgroundColor: "orangered", padding: "10px" } };

const Button = () => {
	const disabled = false;
	const checked = false;

	return (
		<Stack gap={20} styles={stackStyles}>
			<CommandBarButton iconProps={addIcon} text="Button 1" menuProps={menuProps} disabled={disabled} checked={checked} styles={{ root: { padding: "10px" } }} />
			<CommandBarButton iconProps={mailIcon} text="Button 2" disabled={disabled} checked={checked} styles={{ root: { padding: "10px" } }} />
		</Stack>
	);
};

export default Button;

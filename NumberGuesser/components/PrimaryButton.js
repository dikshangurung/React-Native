import { View, Text, Pressable, StyleSheet } from "react-native";
function PrimaryButton({ children }) {
	function handlePress() {
		console.log("PrimaryButton was pressed");
	}
	return (
		<View style={styles.buttonOuterContainer}>
			<Pressable
				style={({ pressed }) =>
					pressed
						? [styles.pressed, styles.buttonInnerContainer]
						: [styles.buttonInnerContainer]
				}
				onPress={handlePress}
				android_ripple={{ color: "#440424" }}
			>
				<Text style={styles.buttonText}>{children}</Text>
			</Pressable>
		</View>
	);
}
export default PrimaryButton;

const styles = StyleSheet.create({
	buttonOuterContainer: {
		borderRadius: 28,
		margin: 4,
		overflow: "hidden",
	},
	buttonInnerContainer: {
		backgroundColor: "#50042a",
		borderRadius: 28,
		paddingVertical: 8,
		paddingHorizontal: 16,
		margin: 4,
	},
	buttonText: {
		color: "#fff",
		textAlign: "center",
	},
	pressed: {
		opacity: 0.5,
	},
});

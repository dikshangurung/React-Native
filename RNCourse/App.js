import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
	return (
		<View style={styles.appContainer}>
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.textInput}
					placeholder="Your course goal"
				/>
				<Button title="Add Goal" />
			</View>
			<View sty>
				<Text>List of goals...</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		paddingTop: 50,
		paddingHorizontal: 16,
	},
	inputContainer: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingBottom: 24,
		borderBottomColor: "#cccccc",
		borderBottomWidth: 1,
	},
	textInput: {
		width: "70%",
		borderColor: "#cccccc",
		borderWidth: 1,
		padding: 8,
		marginRight: 8,
	},
	goalsContainer: {
		flex: 3,
	},
});

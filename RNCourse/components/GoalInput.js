import { useState } from "react";
import {
	StyleSheet,
	View,
	TextInput,
	Button,
	Modal,
	Image,
} from "react-native";
function GoalInput({ addGoalHandler, modalIsVisible, closeAddGoalHandler }) {
	const [enteredGoalText, setEnteredGoalText] = useState("");
	function goalInputHandler(enteredText) {
		setEnteredGoalText(enteredText);
	}
	function goalHandler() {
		addGoalHandler(enteredGoalText);
		setEnteredGoalText("");
	}
	return (
		<Modal visible={modalIsVisible} animationType="slide">
			<View style={styles.inputContainer}>
				<Image
					source={require("../assets/images/favicon.png")}
					style={styles.image}
				/>
				<TextInput
					style={styles.textInput}
					placeholder="Your course goal"
					onChangeText={goalInputHandler}
					value={enteredGoalText}
				/>
				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button title="Add Goal" onPress={goalHandler} />
					</View>
					<View style={styles.button}>
						<Button title="Cancel" onPress={closeAddGoalHandler} />
					</View>
				</View>
			</View>
		</Modal>
	);
}
export default GoalInput;
const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",

		padding: 16,
		backgroundColor: "#311b6b",
	},
	textInput: {
		width: "100%",
		borderColor: "#e4d0ff",
		backgroundColor: "#e4d0ff",
		color: "#120438",
		borderRadius: 6,
		borderWidth: 1,
		padding: 10,
		marginRight: 8,
	},
	buttonContainer: {
		flexDirection: "row",
	},
	button: {
		width: 100,
		marginHorizontal: 8,
	},
	image: {
		width: 100,
		height: 100,
		margin: 20,
	},
});

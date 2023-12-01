import { useState } from "react";
import { TextInput, View, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../util/colors";
function StartGameScreen({ onPickNumber }) {
	const [enteredNumber, setEnteredNumber] = useState("");
	function numberInputHandler(enteredText) {
		setEnteredNumber(enteredText);
	}
	function resetInputHandler() {
		setEnteredNumber("");
	}
	function confirmInputHandler() {
		const chosenNumber = parseInt(enteredNumber);
		if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
			Alert.alert(
				"Invalid number!",
				"Number has to be a number between 1 and 99.",
				[
					{
						text: "Okay",
						style: "destructive",
						onPress: resetInputHandler,
					},
				]
			);
			return;
		}
		onPickNumber(chosenNumber);
	}
	return (
		<View style={styles.inputContainer}>
			<TextInput
				style={styles.numberInput}
				maxLength={2}
				keyboardType="number-pad"
				onChangeText={numberInputHandler}
				value={enteredNumber}
			/>
			<View style={styles.buttonsContainer}>
				<View style={styles.buttonContainer}>
					<PrimaryButton onPress={resetInputHandler}>
						Reset
					</PrimaryButton>
				</View>
				<View style={styles.buttonContainer}>
					<PrimaryButton onPress={confirmInputHandler}>
						Confirm
					</PrimaryButton>
				</View>
			</View>
		</View>
	);
}
export default StartGameScreen;
const styles = StyleSheet.create({
	inputContainer: {
		alignItems: "center",
		padding: 16,
		marginTop: 100,
		backgroundColor: Colors.primary500,
		marginHorizontal: 24,
		borderRadius: 8,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 8,
	},
	numberInput: {
		height: 50,
		width: 50,
		textAlign: "center",
		fontSize: 32,
		borderBottomColor: Colors.accent500,
		borderBottomWidth: 2,
		color: Colors.accent500,
		marginVertical: 8,
		fontWeight: "bold",
	},
	buttonsContainer: {
		flexDirection: "row",
		// width: "100%",
	},
	buttonContainer: {
		flex: 1,
	},
});

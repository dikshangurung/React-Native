import { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	Button,
	TextInput,
	ScrollView,
	FlatList,
} from "react-native";

export default function App() {
	const [enteredGoalText, setEnteredGoalText] = useState("");
	const [courseGoals, setCourseGoals] = useState([]);
	function goalInputHandler(enteredText) {
		setEnteredGoalText(enteredText);
	}
	function addGoalHandler() {
		setCourseGoals((currentCourseGoals) => [
			...currentCourseGoals,
			{ text: enteredGoalText, key: Math.random().toString() },
		]);
	}
	return (
		<View style={styles.appContainer}>
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.textInput}
					placeholder="Your course goal"
					onChangeText={goalInputHandler}
				/>
				<Button title="Add Goal" onPress={addGoalHandler} />
			</View>
			<View style={styles.goalsContainer}>
				<FlatList
					data={courseGoals}
					renderItem={(goalItem) => {
						return (
							<View style={styles.goalItem}>
								<Text style={styles.goalText}>
									{goalItem.item.text}
								</Text>
							</View>
						);
					}}
					alwaysBounceVertical={true}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		paddingTop: 50,
		paddingHorizontal: 16,
	},
	inputContainer: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 24,
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
		flex: 5,
	},
	goalItem: {
		margin: 8,
		padding: 8,
		borderRadius: 6,
		backgroundColor: "#5e0acc",
		color: "red",
	},
	goalText: {
		color: "white",
	},
});

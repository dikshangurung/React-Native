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
import { StatusBar } from "expo-status-bar";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
export default function App() {
	const [courseGoals, setCourseGoals] = useState([]);
	const [modalIsVisible, setModalIsVisible] = useState(false);
	function startAddGoalHandler() {
		setModalIsVisible(true);
	}
	function closeAddGoalHandler() {
		setModalIsVisible(false);
	}
	function addGoalHandler(enteredGoalText) {
		setCourseGoals((currentCourseGoals) => [
			...currentCourseGoals,
			{ text: enteredGoalText, id: Math.random().toString() },
		]);
		setModalIsVisible(false);
	}
	function deleteGoalHandler(id) {
		setCourseGoals((currentCourseGoals) => {
			return currentCourseGoals.filter((goal) => goal.id != id);
		});
	}
	return (
		<>
			<StatusBar style="light" />
			<View style={styles.appContainer}>
				<Button
					title="Add New Goal"
					color="#a065ec"
					onPress={startAddGoalHandler}
				/>
				{modalIsVisible && (
					<GoalInput
						addGoalHandler={addGoalHandler}
						modalIsVisible={modalIsVisible}
						closeAddGoalHandler={closeAddGoalHandler}
					/>
				)}
				<View style={styles.goalsContainer}>
					<FlatList
						data={courseGoals}
						renderItem={(goalItem) => {
							return (
								<GoalItem
									text={goalItem.item.text}
									id={goalItem.item.id}
									onDeleteGoal={deleteGoalHandler}
								/>
							);
						}}
						alwaysBounceVertical={true}
					/>
				</View>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		paddingTop: 50,
		paddingHorizontal: 16,
		backgroundColor: "#1e085a",
	},
	goalsContainer: {
		flex: 5,
	},
});

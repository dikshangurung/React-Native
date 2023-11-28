import {
	StyleSheet,
	Text,
	View,
	Button,
	TextInput,
	ScrollView,
	FlatList,
	Pressable,
} from "react-native";

function GoalItem({ text, onDeleteGoal, id }) {
	return (
		<View style={styles.goalItem}>
			<Pressable
				onPress={() => onDeleteGoal(id)}
				style={({ pressed }) => pressed && styles.itemPressed}
			>
				<Text style={styles.goalText}>{text}</Text>
			</Pressable>
		</View>
	);
}
export default GoalItem;
const styles = StyleSheet.create({
	goalItem: {
		margin: 8,

		borderRadius: 6,
		backgroundColor: "#5e0acc",
		color: "red",
	},
	goalText: {
		padding: 8,
		color: "white",
	},
	itemPressed: {
		opacity: 0.5,
	},
});

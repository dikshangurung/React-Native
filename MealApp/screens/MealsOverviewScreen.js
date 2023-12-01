import { View, Text, Button, StyleSheet } from "react-native";
function MealsOverviewScreen({ route }) {
	const catId = route.param.categoryId;
	return (
		<View style={styles.screen}>
			<Text>The Meals Overview Screen!- {catId}</Text>
		</View>
	);
}
export default MealsOverviewScreen;
const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 16,
	},
});

import { View, Text, Pressable, StyleSheet, Platform } from "react-native";
function CategoryGridTile({ title, color, onPress }) {
	return (
		<View style={[styles.gridItem]}>
			<Pressable
				style={({ pressed }) => [
					styles.button,
					pressed ? styles.buttonPressed : null,
				]}
				android_ripple={{ color: "#ccc" }}
				onPress={onPress}
			>
				<View
					style={[styles.innerContainer, { backgroundColor: color }]}
				>
					<Text style={styles.title}>{title}</Text>
				</View>
			</Pressable>
		</View>
	);
}
export default CategoryGridTile;
const styles = StyleSheet.create({
	gridItem: {
		flex: 1,
		margin: 16,
		height: 150,
		borderRadius: 10,
		elevation: 4,
		backgroundColor: "#fff",
		shadowColor: "#000",
		shadowOpacity: 0.26,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 10,
		overflow: Platform.OS === "android" ? "hidden" : "visible",
	},
	innerContainer: {
		flex: 1,
		padding: 16,
		borderRadius: 10,
		justifyContent: "center",
		alignItems: "center",
	},
	button: {
		flex: 1,
	},
	buttonPressed: {
		opacity: 0.5,
	},
	title: {
		fontSize: 22,
		fontWeight: "bold",
	},
});

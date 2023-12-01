import { View, Text, StyleSheet } from "react-native";
import Colors from "../../util/colors";
function NumberContianer({ children }) {
	return (
		<View style={styles.numberContainer}>
			<Text style={styles.number}>{children}</Text>
		</View>
	);
}
export default NumberContianer;
const styles = StyleSheet.create({
	numberContainer: {
		borderColor: Colors.accent500,
		padding: 28,
		borderWidth: 5,
		borderRadius: 8,
		margin: 24,
		alignItems: "center",

		// alignContent: "center",
		justifyContent: "center",
	},
	number: {
		fontSize: 20,
		fontWeight: "bold",
		color: Colors.accent500,
		textAlign: "center",
	},
});

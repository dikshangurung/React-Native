import { Text, StyleSheet } from "react-native";
import Colors from "../../util/colors";
function Title({ children }) {
	return <Text style={styles.title}>{children}</Text>;
}
export default Title;

const styles = StyleSheet.create({
	title: {
		fontSize: 20,
		fontWeight: "bold",
		color: "#fff",
		textAlign: "center",
		borderColor: "#fff",
		padding: 8,
		borderWidth: 5,
	},
});

import { Text, View, StyleSheet } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
function AllExpenses() {
	return <ExpensesOutput expensesPeriod="Last 7 Days" />;
}
export default AllExpenses;

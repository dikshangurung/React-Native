import { View, Text, StyleSheet, FlatList } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";
const DUMMY_EXPENSES = [
	{
		id: "e1",
		description: "A pair of shors",
		amount: 94.12,
		date: new Date("2021-07-14"),
		// date: `${new Date("2021-07-14")}`,
	},
	{
		id: "e2",
		description: "A pair of scissors",
		amount: 94.12,
		date: new Date("2021-07-14"),
		// date: `${new Date("2021-07-14")}`,
	},
	{
		id: "e3",
		description: "A pair of shocks",
		amount: 94.12,
		date: new Date("2021-07-14"),
		// date: `${new Date("2021-07-14")}`,
	},
	{
		id: "e1",
		description: "A pair of shors",
		amount: 94.12,
		date: new Date("2021-07-14"),
		// date: `${new Date("2021-07-14")}`,
	},
	{
		id: "e2",
		description: "A pair of scissors",
		amount: 94.12,
		date: new Date("2021-07-14"),
		// date: `${new Date("2021-07-14")}`,
	},
	{
		id: "e3",
		description: "A pair of shocks",
		amount: 94.12,
		date: new Date("2021-07-14"),
		// date: `${new Date("2021-07-14")}`,
	},
	{
		id: "e1",
		description: "A pair of shors",
		amount: 94.12,
		date: new Date("2021-07-14"),
		// date: `${new Date("2021-07-14")}`,
	},
	{
		id: "e2",
		description: "A pair of scissors",
		amount: 94.12,
		date: new Date("2021-07-14"),
		// date: `${new Date("2021-07-14")}`,
	},
	{
		id: "e3",
		description: "A pair of shocks",
		amount: 94.12,
		date: new Date("2021-07-14"),
		// date: `${new Date("2021-07-14")}`,
	},
];
function ExpensesOutput({ expenses, expensesPeriod }) {
	return (
		<View style={styles.container}>
			<ExpensesSummary
				periodName={expensesPeriod}
				expenses={DUMMY_EXPENSES}
			/>
			<ExpensesList expenses={DUMMY_EXPENSES} />
		</View>
	);
}
export default ExpensesOutput;
const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 8,
		backgroundColor: GlobalStyles.colors.primary700,
		borderRadius: 8,
		paddingHorizontal: 24,
		paddingTop: 24,
		paddingBottom: 0,
	},
});

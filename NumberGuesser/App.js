import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import Colors from "./util/colors";
export default function App() {
	const [userNumber, setUserNumber] = useState(0);
	function pickedNumberHandler(number) {
		setUserNumber(number);
	}
	let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;
	if (userNumber) {
		screen = <GameScreen />;
	}
	return (
		<LinearGradient
			colors={[Colors.primary700, Colors.accent500]}
			style={styles.outerScreen}
		>
			<ImageBackground
				source={require("./assets/images/background.png")}
				style={styles.rootScreen}
				resizeMode="cover"
				imageStyle={{ opacity: 0.5 }}
			>
				<SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
			</ImageBackground>
		</LinearGradient>
	);
}

const styles = StyleSheet.create({
	outerScreen: {
		flex: 1,
	},
	rootScreen: {
		flex: 1,
	},
});

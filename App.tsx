import { NavigationContainer } from "@react-navigation/native";
import NavigationTabs from "./src/navigation/NavigationBottomTabs";
import { ContextProvider } from "./src/context";
export default function App() {
  return (
    <ContextProvider>
      <NavigationContainer>
        <NavigationTabs />
      </NavigationContainer>
    </ContextProvider>
  );
};
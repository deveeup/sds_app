import { NavigationContainer } from "@react-navigation/native";
import NavigationTabs from "./src/navigation/NavigationBottomTabs";
import { ContextProvider } from "./src/context";
export default function App() {
  return (
    <NavigationContainer>
      <ContextProvider>
        <NavigationTabs />
      </ContextProvider>
    </NavigationContainer>
  );
};
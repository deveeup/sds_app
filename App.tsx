import { NavigationContainer } from '@react-navigation/native';
import NavigationTabs from "./src/navigation/NavigationBottomTabs";

export default function App() {
  return (
    <NavigationContainer>
      <NavigationTabs />
    </NavigationContainer>
  );
};
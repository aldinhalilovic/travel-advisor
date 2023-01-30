import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Discover from './screens/Discover';
import HomeScreen from './screens/HomeScreen';
import ItemScreen from './screens/ItemScreen';

export default function App() {
  const Stack = createNativeStackNavigator();
  const client = new QueryClient();

  return (
    <NavigationContainer>
      <QueryClientProvider client={client}>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Discover"
            component={Discover}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="ItemScreen"
            component={ItemScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </QueryClientProvider>
    </NavigationContainer>
  );
}

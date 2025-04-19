import { Stack } from "expo-router";
import './globals.css'
export default function RootLayout() {
  return <Stack>
    {/* hide the group route */}
    <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> 
    <Stack.Screen name="movie/[id]" options={{ headerShown: false }} />
  </Stack>;
}

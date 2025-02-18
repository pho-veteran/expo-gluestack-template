import Greeting from "@/components/Greeting";
import { Box } from "@/components/ui/box";
import { Text, View } from "react-native";

export default function Index() {
  return (
      <View
        className="flex items-center justify-center flex-1"
      >
        <Text
          className="text-center text-lg"
        >Edit app/index.tsx to edit this screen.</Text>
        <Greeting />
        <Box className="bg-black p-5 text-white">
          <Text className="text-typography-0">This is the Box</Text>
        </Box>
      </View>
  );
}

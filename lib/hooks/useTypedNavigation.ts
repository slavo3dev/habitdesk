import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/types/NavigationTypes";

export const useTypedNavigation = () => {
    return useNavigation<NativeStackNavigationProp<RootStackParamList>>();
};

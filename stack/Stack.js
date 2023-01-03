import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Task from "../screens/Task";

const Stack = createNativeStackNavigator();

 const StackComponent = () => {

    return (
        <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Task" component={Task} />
        </Stack.Navigator>
    );
    }

    export default StackComponent;
import { View } from "react-native";
import { RemixIcon } from "remixicon-native";

const Icon = () => {
    return (
        <View>
            <RemixIcon
                name="remixicon-line" //required
                color="white" //optional, default = 'white'
                size={36} //optional, default = 24
                //to animate color or size, simply pass SharedValue (not SharedValue.value!!)
            />;
        </View>
    );
}

export default Icon;

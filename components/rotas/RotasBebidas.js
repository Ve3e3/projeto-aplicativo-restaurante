import { createStackNavigator } from '@react-navigation/stack';
 
import Bebidas from '../Bebidas'
import Pulque from '../Pulque'
import Mezcal from '../Mezcal'
import AguaFresca from '../AguaFresca'
import Tequila from '../tequila'
 
 
 
const Stack = createStackNavigator();
 
export default function RotasBebidas() {
    return (
 
        <Stack.Navigator name='Bebidas' component={Bebidas}>
            <Stack.Screen name='Pulque' component={Pulque} />
            <Stack.Screen name= 'Mezcal' component={Mezcal} />
            <Stack.Screen name='Tequila' component={Tequila} />
            <Stack.Screen name='Agua Natural' component={AguaFresca} />
        </Stack.Navigator>
 
 
    )
}
 
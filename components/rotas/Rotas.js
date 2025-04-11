import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Bebidas from '../Bebidas';
import Home from '../Home';
import Comidas from '../Comidas';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

export default function Rotas() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarIcon={{ activeTintColor: '#00fff' }}> 
    <Tab.Screen
      name="Bebidas"
      component={Bebidas}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="stepforward"
            color={color}
            size={size}
          />
        ),
        headerShown: false,
      }}
    />
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="stepforward"
            color={color}
            size={size}
          />
        ),
        headerShown: false,
      }}
    />
    <Tab.Screen
      name="Comidas"
      component={Comidas}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="stepforward"
            color={color}
            size={size}
          />
        ),
        headerShown: false,
      }}
    />

  </Tab.Navigator>
  );
}

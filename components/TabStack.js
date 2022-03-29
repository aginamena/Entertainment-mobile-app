import React from "react";
import { TouchableOpacity } from "react-native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Tv from "./Tv";
import Movies from "./Movies";
import Bookmark from "./Bookmark";
import { MaterialIcons } from '@expo/vector-icons';
import Profile from "./UserProfile";
import Home from "./Home";

const Tab = createBottomTabNavigator();
export default function TabStack({ navigation }) {

    return (
        <Tab.Navigator
            barStyle={{ backgroundColor: "green" }}
            screenOptions={({ route }) => ({
                tabBarStyle: {
                    backgroundColor: '#161D2F',
                },
                tabBarIcon: ({ color, size }) => {
                    if (route.name === 'Home') {
                        return <Ionicons name={"home"} size={size} color={color} />;
                    }
                    else if (route.name === 'Tv') {
                        return <Ionicons name={"tv"} size={size} color={color} />;
                    }
                    else if (route.name === 'Movies') {
                        return <MaterialIcons name="local-movies" size={size} color={color} />
                    }
                    else if (route.name === 'Profile') {
                        return <MaterialIcons name="person" size={size} color={color} />
                    }
                    else {
                        return <Ionicons name="bookmark" size={24} color={color} />
                    }
                },
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: '#5A698F',
            })}
        >
            <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Tab.Screen name="Movies" component={Movies} options={{ headerShown: false }} />
            <Tab.Screen name="Tv" component={Tv} options={{ headerShown: false }} />
            <Tab.Screen name="Bookmark" component={Bookmark} options={{ headerShown: false }} />

            {/* the user is also able to view their signin details and logout from the site */}

            <Tab.Screen name="Profile"
                component={Profile}
                options={{
                    headerShown: false,
                    tabBarButton: props => (
                        <TouchableOpacity {...props} onPress={() => navigation.openDrawer()} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}
import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabStack from "./TabStack";
import UserProfile from "./UserProfile";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator drawerContent={props => <UserProfile {...props} />}>
            <Drawer.Screen name="Tabs" component={TabStack} options={{ headerShown: false }} />
        </Drawer.Navigator>
    )
}
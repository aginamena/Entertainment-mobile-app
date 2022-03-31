// import React,{ useEffect, useState, useRef } from "react";
// import { AppState } from "react-native";
// import Login from "./Login";
// import SignUp from "./SignUp";


// export default function LoginStack() {
//     const appState = useRef(AppState.currentState);
//     const [appStateVisible, setAppStateVisible] = useState(appState.current);

    
//   useEffect(
//     () => {
//         const appStateListener = AppState.addEventListener(
//           'change',
//           nextAppState => {
//             if (nextAppState === 'background')
//               console.log("you have gone to background")
//             else console.log("you are still in the app")
//             // console.log('Next AppState is: ', nextAppState);
//             setAppStateVisible(nextAppState);
//           },
//         );
//     }
//     , [])
//     return (
//         <Stack.Navigator>
//             <Stack.Screen name="Login" options={{ headerShown: false }} >
//                 {(props) => <Login {...props} loginUser={() => setIsLoggedIn(true)} />}
//             </Stack.Screen>
//             <Stack.Screen name="SignUp" options={{ headerShown: false }}>
//                 {(props) => <SignUp {...props} loginUser={() => setIsLoggedIn(true)} />}
//             </Stack.Screen>
//         </Stack.Navigator>
//     )
// }
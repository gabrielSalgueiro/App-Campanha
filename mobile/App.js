import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import Routes from "./src/routes/index"

import { AuthProvider } from "./src/contexts/auth"

// COMPONENT DE FLASH MESSAGE
import FlashMessage from "react-native-flash-message";

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes/>
      </AuthProvider>
      <FlashMessage position={{ bottom: 70, left: 20, right: 20 }} animated={true} floating={true}/>
    </NavigationContainer>
  );
}


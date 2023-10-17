
import StackNavigation from "./Routers/stack";
import * as React from 'react';
import { PaperProvider } from 'react-native-paper';

export default function App() {
  return (

    <PaperProvider>
      <StackNavigation />
    </PaperProvider>
  );
}




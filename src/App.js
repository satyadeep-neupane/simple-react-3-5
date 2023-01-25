import Comp1 from './extras/Comp1'
import { createContext } from 'react';

const user = "Ram"
export const UserContext = createContext();

function App() {
  return (
    <UserContext.Provider value={user}>
      <Comp1 />
    </UserContext.Provider>
  );
}

export default App;

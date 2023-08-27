// Import required modules from the React library
import { createContext, useEffect, useState } from "react";
import { User } from "../common";

// Create a new UserContext object with an initial value

{
  /*
  UserContextType["user"] maintains type of user at interface UserContextType so the same 
  type flows throughout createContext and useState and can be changed at one place
*/
}

export interface UserContextType {
  user: User | undefined; // User type for both useState and createContext.
  setUser: React.Dispatch<React.SetStateAction<UserContextType["user"]>>;
}

export const UserContext = createContext<UserContextType>({
  user: undefined,
  setUser: () => {},
});

// Export the UserProvider component
export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserContextType["user"]>();

  useEffect(() => {
    const userInfo = localStorage.getItem("ConnectVerseUI");
    if (userInfo) {
      setUser(JSON.parse(userInfo));
    }
  }, []);

  // Provide the value to the UserContext using the UserContext.Provider
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

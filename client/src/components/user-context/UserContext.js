import { useRef } from "react";
import { createContext, useState } from "react";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [userInfo, setUserInfo] = useState({});
  const about = useRef(null);
  const games = useRef(null);
  const apps = useRef(null);
  const contact = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <UserContext.Provider
      value={{
        userInfo,
        setUserInfo,
        scrollToSection,
        about,
        games,
        apps,
        contact,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

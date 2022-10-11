import { createContext, useState, useContext, useEffect } from 'react';

const ScrollContext = createContext({});

const ScrollProvider = ({ children }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  function scrollToSavedPosition() {
    window.scrollTo(0, scrollPosition);
  }

  return (
    <ScrollContext.Provider value={{
      scrollPosition,
      setScrollPosition,
      scrollToSavedPosition,
    }}>
      {children}
    </ScrollContext.Provider>
  );
};

function useScroll() {
  const context = useContext(ScrollContext);

  if (!context) {
    throw new Error('useScroll must be used within an ScrollProvider');
  }

  return context;
}

export { useScroll, ScrollProvider };

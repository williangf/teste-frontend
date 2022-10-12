import { createContext, useState, useContext } from 'react';

const VideosContext = createContext({});

const VideosProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [videosResult, setVideosResult] = useState({
    items: []
  });

  return (
    <VideosContext.Provider value={{
      searchTerm,
      setSearchTerm,
      videosResult,
      setVideosResult,
    }}>
      {children}
    </VideosContext.Provider>
  );
};

function useVideosSearch() {
  const context = useContext(VideosContext);

  if (!context) {
    throw new Error('useVideosSearch must be used within an VideosProvider');
  }

  return context;
}

export { useVideosSearch, VideosProvider };

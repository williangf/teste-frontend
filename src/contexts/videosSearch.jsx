import { createContext, useState, useContext } from 'react';

const VideosContext = createContext({});

const VideosProvider = ({ children }) => {
  const [videos, setVideos] = useState(null);
  const [videosList, setVideosList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  function resetSearch() {
    setVideos(null);
    setVideosList([]);
  }

  return (
    <VideosContext.Provider value={{
      searchTerm,
      setSearchTerm,
      videos,
      setVideos,
      videosList,
      setVideosList,
      resetSearch,
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

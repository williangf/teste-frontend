import { createContext, useState, useContext } from 'react';

const VideosContext = createContext({});

const VideosProvider = ({ children }) => {
  const [videos, setVideos] = useState(null);
  const [videosList, setVideosList] = useState([]);

  return (
    <VideosContext.Provider value={{
      videos,
      setVideos,
      videosList,
      setVideosList
    }}>
      {children}
    </VideosContext.Provider>
  );
};

function useVideos() {
  const context = useContext(VideosContext);

  if (!context) {
    throw new Error('useVideos must be used within an VideosProvider');
  }

  return context;
}

export { useVideos, VideosProvider };

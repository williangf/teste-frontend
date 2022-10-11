import { VideosProvider } from "./videos";
import { ScrollProvider } from "./scroll";

const AppProvider = ({ children }) => (
  <VideosProvider>
    <ScrollProvider>
      {children}
    </ScrollProvider>
  </VideosProvider>
);

export default AppProvider;

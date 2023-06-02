import harvardArt from "./data/harvardArt";
import GalleryNavigation from "./components/GalleryNavigation";
import GalleryView from "./components/GalleryView";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="page-wrapper">
      <h1>Hello from App</h1>
      <GalleryNavigation galleries={harvardArt.records} />
      <Switch>
        <Route exact path="/galleries/:galleryId">
          <GalleryView galleries={harvardArt.records}/>  
        </Route>
        <Route exact path="/">
          <h2>Harvard Art Museum</h2>
          <p>Look, but don't touch. Please select a gallery in the navigation bar.</p>
        </Route>
        <Route path="">
          <h1>404 Not Found</h1>
        </Route>
      </Switch>
    </div>
  );
  }
  
export default App;

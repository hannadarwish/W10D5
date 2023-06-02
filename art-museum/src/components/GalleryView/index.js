import { useParams } from "react-router-dom";
import ArtImageTile from "../ArtImageTile";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import ArtDescription from "../ArtDescription";

function GalleryView({galleries}) {
    const { galleryId } = useParams();
    const gallery = galleries.find(ele => {
        if (ele.id == galleryId) {
            return true;
        } 
        return false;
    })
    return (
        <>
            <h2>Hello from {gallery["name"]}</h2>
            <Switch>
                <Route path="/galleries/:galleryId/art/:artId"> 
                    <ArtDescription gallery={ gallery }/>
                </Route>
                <Route exact path="/galleries/:galleryId">
                    <AllArtImages gallery={gallery}/>
                </Route>
                <Route path="">
                    <h2>404 Not found</h2>
                </Route>
            </Switch>
        </>

    )
}

function AllArtImages({gallery}) {
    return gallery.objects.map(artwork => {
        // console.log(artwork);
        return (<ArtImageTile artwork={artwork} key={artwork.id}/>)
    })
}

export default GalleryView;
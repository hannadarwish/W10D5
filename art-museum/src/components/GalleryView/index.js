import { useParams } from "react-router-dom";
import ArtImageTile from "../ArtImageTile";

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
            <AllArtImages gallery={gallery}/>
        </>

    )
}

function AllArtImages({gallery}) {
    return gallery.objects.map(artwork => {
        // console.log(artwork);
        return (<ArtImageTile artwork={artwork} />)
    })
}

export default GalleryView;
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";


function ArtImageTile ({artwork}) {
    const { galleryId } = useParams();
    return (
    <Link to= {`/galleries/${galleryId}/art/${artwork.id}`}>
    <img src={artwork['images'][0]['baseimageurl']}/>
    </Link>
    )
}

export default ArtImageTile;
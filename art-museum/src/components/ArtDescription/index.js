import { Link, useParams } from "react-router-dom";
export default function ArtDescription({ gallery }) {
    // console.log(gallery);
    // return null;
    const { galleryId, artId } = useParams();
    const artwork = gallery.objects.find(ele=> {
        if (ele['id'] == artId) return true;
        return false;
    });
    // console.log(artwork);
    return (
        <>
            <Link to={`/galleries/${galleryId}`}>Back to {gallery['name']}</Link>
            <Link to={{ pathname: gallery['url']}} target="_blank">{artwork.title}</Link>
            <p>{artwork['description']}</p>
            <p>{artwork['creditline']}</p>
            <p>{artwork['technique']}</p>
        </>
    )

};
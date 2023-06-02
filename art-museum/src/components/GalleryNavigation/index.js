import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import "./GalleryNavigation.css";
function GalleryNavigation ({galleries}) {
    return (
        <nav>
            <NavLink exact to="/">Home</NavLink>
            < AllLinks galleries={galleries}/>
        </nav>
    )
}

const AllLinks = ({galleries}) => {
    return galleries.map((gallery) => {
        return(<NavLink to={`/galleries/${gallery.id}`} key={ gallery.id }>{gallery["name"]}</NavLink>)
    })
}

export default GalleryNavigation;
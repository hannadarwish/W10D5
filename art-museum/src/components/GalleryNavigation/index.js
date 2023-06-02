import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

function GalleryNavigation ({galleries}) {
    return (
        <nav>
            < allLinks galleries={galleries}/>
        </nav>
    )
}

const allLinks = ({galleries}) => {
    return galleries.map((gallery) => {
        return(<NavLink>{gallery["name"]}</NavLink>)
    })
}

export default GalleryNavigation;
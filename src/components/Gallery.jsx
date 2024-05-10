import { useSelector } from "react-redux";
import GalleryItem from "./GalleryItem";
import { nanoid } from "nanoid";

const Gallery = () => {
    const {galleryList} = useSelector((store) => store.gallery)
    return (
        <ul className="gallery">
            {galleryList.map((item, index) => {
                return (
                    <GalleryItem key={index} {...item}/>
                )
            })}
        </ul>
    )
}

export default Gallery;
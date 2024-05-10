import { useDispatch, useSelector } from "react-redux";
import GalleryItem from "./GalleryItem";
import { useEffect } from "react";
import { getPhotos } from "../features/gallery/gallerySlice";
import Loading from "./Loading";

const Gallery = () => {
    const {galleryList} = useSelector((store) => store.gallery)
    const {isLoading} = useSelector((store) => store.gallery)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPhotos());
      }, [])
    
    return (
        <ul className="gallery">
            {isLoading 
                ? <Loading/>
                : galleryList.map((item, index) => {
                    return (
                        <GalleryItem key={index} {...item}/>
                    )
                })
            }
        </ul>
    )
}

export default Gallery;

import { useSelector } from "../../node_modules/react-redux/dist/react-redux";
import GalleryItem from "./GalleryItem";
import Loading from "./Loading";

const Gallery = () => {
    const {galleryList} = useSelector((store: any) => store.gallery)
    const {isLoading} = useSelector((store: any) => store.gallery)
    return (
        <ul className="gallery">
            {isLoading 
                ? <Loading/>
                : galleryList.map((item: any, index: any) => {
                    return (
                        <GalleryItem key={index} {...item}/>
                    )
                })
            }
        </ul>
    )
}
export default Gallery;
import { jsx as _jsx } from "react/jsx-runtime";
import { useSelector } from "../../node_modules/react-redux/dist/react-redux";
import GalleryItem from "./GalleryItem";
import Loading from "./Loading";
const Gallery = () => {
    const { galleryList } = useSelector((store) => store.gallery);
    const { isLoading } = useSelector((store) => store.gallery);
    return (_jsx("ul", { className: "gallery", children: isLoading
            ? _jsx(Loading, {})
            : galleryList.map((item, index) => {
                return (_jsx(GalleryItem, { ...item }, index));
            }) }));
};
export default Gallery;

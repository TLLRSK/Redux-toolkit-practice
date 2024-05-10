import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getPhotos } from "./features/gallery/gallerySlice";
import Gallery from "./components/Gallery";

function App() {
  const dispatch = useDispatch();
  const {isLoading} = useSelector((store) => store.gallery);

  useEffect(() => {
    dispatch(getPhotos());
  }, [])

  return (
    <main>
      <h1>IMAGES GALLERY</h1>
      <Gallery/>
    </main>
  )
}

export default App

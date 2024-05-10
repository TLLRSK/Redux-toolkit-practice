import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { getPhotos } from "./features/gallery/gallerySlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPhotos());
  }, [])

  return (
    <main>
      <h1>IMAGES GALLERY</h1>
    </main>
  )
}

export default App

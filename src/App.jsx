import { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getPhotos } from "./features/gallery/gallerySlice";
import Gallery from "./components/Gallery";
import './scss/styles.scss';
import Loading from "./components/Loading";

function App() {
  const dispatch = useDispatch();
  const {isLoading} = useSelector((store) => store.gallery);

  useEffect(() => {
    dispatch(getPhotos());
  }, [])

  return (
    <main className="app">
      <h1>IMAGES GALLERY</h1>
      {isLoading 
        ? <Loading/>
        : <Gallery />
      }
    </main>
  )
}

export default App

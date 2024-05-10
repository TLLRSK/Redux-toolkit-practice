import Gallery from "../components/Gallery";
import Cart from "./Cart";

const Home = () => {
return (
    <section className="home">
        <h1>IMAGES GALLERY</h1>
        <Gallery />
        <Cart/>
    </section>
)   
}

export default Home;
import GalleryMix from "./GalleryMix";
import GallerySimple  from "./GallerySimple";

const Gallery = () => {
    return (
        <section className="text-gray-600 body-font">
            <GalleryMix />
            <GallerySimple />
        </section>
    );
}

export default Gallery;
const GalleryItem = (item) => {
    console.log(item)
    const {albumId, id, title, url, thumbnailUrl} = item;
    return (
        <li className="GalleryItem">
            <figure>
                <img src={thumbnailUrl} alt={title} />
                <figcaption>{title}</figcaption>
            </figure>
            
        </li>
    )
}

export default GalleryItem;
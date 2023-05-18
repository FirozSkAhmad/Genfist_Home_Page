const DealCard = ({ data }) => {

    const { imageUrl, productName, genericName, manufacturedBy, packing, expiry } = data

    return (
        <div className="dealcard-con">
            <div className="img-con">
                <img src={imageUrl}></img>
            </div>
            <div className="details-con">
                <div className="con">
                    <h2>{productName}</h2>
                    <h3>{genericName}</h3>
                    <h3>Company:{manufacturedBy}</h3>
                    <h3>Packin Size:{packing}</h3>
                    <h3>Expiry:{expiry}</h3>
                </div>
                
                <button>Add to cart</button>
            </div>

        </div>
    )
}

export default DealCard
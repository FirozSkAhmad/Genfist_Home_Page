const CategorieCard = ({ data }) => {

    const { imageUrl, categoryName } = data

    return (
        <div className="CategorieCard-con">

            <img width='100px' src={imageUrl}></img>
            <div className="name-con">
                <h4>{categoryName}</h4>
            </div>

        </div>)

}

export default CategorieCard

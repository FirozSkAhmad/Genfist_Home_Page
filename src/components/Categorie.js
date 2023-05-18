import { useSelector } from "react-redux"
import CategorieCard from "./CategorieCard"

const Categorie = () => {

    const categorie = useSelector((store) => store.categorie.items)

    return (
        <div className="categorie-con">
            <div className="heading-con">
                <div className="name"><h1>Checkout the most popular categories</h1></div>
                <div className="option">
                    <h4>View All</h4>
                </div>
            </div>
            <div className="items-con">
                {(categorie.length > 0) ? categorie.slice(0, 5).map((itemData) => <CategorieCard key={itemData.categoryId} data={itemData} />) : null}
            </div>
        </div>
    )
}

export default Categorie
import DealCard from "./DealCard"
import { useSelector } from "react-redux"


const DealsoftheDay = () => {

    const dealsoftheday = useSelector((store) => store.dealsoftheday.items)

    return (dealsoftheday.length > 0) ? (
        <div className="DealsoftheDay-con">
            <div className="heading-con">
                <h1>Deals of the Day</h1>
            </div>
            <div className="deals-con">
                {(dealsoftheday.length > 0) ? dealsoftheday.map((itemData) => <DealCard key={itemData.productId} data={itemData} />) : null}
            </div>
        </div>
    ) : null
}

export default DealsoftheDay
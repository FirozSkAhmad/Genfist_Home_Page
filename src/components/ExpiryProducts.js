import { useSelector } from "react-redux"
import DealCard from "./DealCard"
import { useState } from "react"


const ExpiryProducts = () => {

    const expiryproducts  = useSelector((store) => store.expiryproducts.items)

    return (
        <div className="exp-con">
            <div className="heading-con">
                <h1>Near Expiry Products</h1>
            </div>
            <div className="nearToExp-con">
                {(expiryproducts.length > 0) ? expiryproducts.slice(0, 5).map((itemData) => <DealCard key={itemData.productId} data={itemData} />) : null}
            </div>
        </div>
    )
}

export default ExpiryProducts
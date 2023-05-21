import { useSelector } from "react-redux"
import DealCard from "./DealCard"
import { useEffect, useState } from "react"
import { FaLessThan } from 'react-icons/fa'
import { FaGreaterThan } from 'react-icons/fa'


const ExpiryProducts = () => {

    const expiryproducts = useSelector((store) => store.expiryproducts.items)

    const [startIndex, setStartIndex] = useState(0)
    const [endIndex, setEndIndex] = useState(5)


    function incHandler() {
        console.log('incHandler clicked')
        setStartIndex(startIndex + 1)
        setEndIndex(endIndex + 1)
    }

    function decHandler() {
        setStartIndex(startIndex - 1)
        setEndIndex(endIndex - 1)
    }



    return (
        <div className="exp-con">
            <div className="heading-con">
                <h1>Near Expiry Products</h1>
            </div>

            <div className="nearToExp-con">
                <div onClick={(startIndex !== 0) ? decHandler : null} className="leftArrow">
                    <FaLessThan />
                </div>
                {(expiryproducts.length > 0) ? expiryproducts.slice(startIndex, endIndex).map((itemData) => <DealCard key={itemData.productId} data={itemData} />) : null}
                <div onClick={(startIndex >= 0) ? incHandler : null} className="rightArrow">
                    <FaGreaterThan />
                </div>
            </div>

        </div>
    )
}

export default ExpiryProducts
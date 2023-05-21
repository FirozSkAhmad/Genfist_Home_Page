import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

const Scrollerbox = () => {

    const banners = useSelector((store) => store.banners.items)

    const [ind, setInd] = useState(0)

    useEffect(() => {

        const interval = setInterval(() => setInd((prevData) => (prevData === 4) ? 0 : prevData + 1), 2000)

        return (() => clearInterval(interval))

    }, [])


    return (
        <div className="scrollbox-con">
            {(banners.length > 0) ? <img width='1305px' height='450px' src={banners[ind]?.imageUrl} /> : null}
        </div>
    )
}

export default Scrollerbox
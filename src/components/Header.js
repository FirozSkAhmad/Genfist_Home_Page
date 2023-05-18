import { MdFavoriteBorder } from 'react-icons/md'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { BiSearchAlt2 } from 'react-icons/bi'
import Navbar from './Navbar'


const Header = () => {
    return (
        <div className='head-con'>
            <div className='header'>
                <div className='img'>
                    <img alt="logo-img" src="https://genifast.in/static/media/logo.a1bb9086dedf92a99e2b.png"></img>
                </div>
                <div className='filter'>
                    <select>
                        <option>Hyderabad</option>
                        <option>Ware house</option>
                    </select>
                    <div className='search-con'>
                        <input type="text" placeholder='Search Products by generic name'></input>
                        <div className='search-icon'>
                            <h2><BiSearchAlt2 /></h2>
                        </div>
                    </div>
                </div>
                <div className='icons'>
                    <div className='fav-con'>
                        <h1>
                            <MdFavoriteBorder />
                        </h1>
                        <div className='count-con'>
                            <h4>0</h4>
                        </div>
                    </div>
                    <div className='cart-con'>
                        <h1>
                            <AiOutlineShoppingCart />
                        </h1>
                        <div className='count-con'>
                            <h4>0</h4>
                        </div>
                    </div>
                    <h1>
                        <CgProfile />
                    </h1>
                </div>
            </div>
            <Navbar/>
        </div>

    )
}

export default Header
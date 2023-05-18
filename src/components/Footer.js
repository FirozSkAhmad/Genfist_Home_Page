import { FaFacebookF } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import { BsTelephone } from 'react-icons/bs'
import { MdOutlineEmail } from 'react-icons/md'

const Footer = () => {
    return (
        <>
            <div className="footer-con">
                <div className="about-company-con">
                    <div className='img-con'>
                        <img alt="logo-img" src="https://genifast.in/static/media/logo.a1bb9086dedf92a99e2b.png"></img>
                    </div>
                    <h3>
                        #105, Plot No A-1, GBS Enclave,
                        Moti Valley, Trimulgherry,
                        Secunderabad - 500015
                        Hyderabad, Telangana, India
                    </h3>
                    <div className='icons-con'>
                        <h2>
                            <FaFacebookF />
                        </h2>
                        <h2>
                            <BsInstagram />
                        </h2>
                    </div>
                </div>
                <div className='help-con'>
                    <div className='name'>
                        <h2>Need Help</h2>
                    </div>
                    <div className='phone-con'>
                        <h2 className='phone-icon'><BsTelephone /></h2>
                        <h2>8886-6602-01</h2>
                    </div>
                    <div className='timmining-con'>
                        <h2>Monday – Friday: 9:00-20:00</h2>
                        <h2>Saturday: 11:00 – 15:00</h2>
                    </div>
                    <hr></hr>
                    <div className='email-con'>
                        <h3><MdOutlineEmail /></h3>
                        <h3>
                            info@genifast.in
                        </h3>
                    </div>
                </div>
                <div className='imformation-con'>
                    <h2>Information</h2>
                    <h3>About us</h3>
                    <h3>Shipping Policy</h3>
                    <h3>Privacy policy</h3>
                    <h3>Return Policy</h3>
                    <h3>Terms and conditions</h3>
                </div>
                <div className='account-con'>
                    <h2>Account</h2>
                    <h3>My Account</h3>
                    <h3>My Orders</h3>
                    <h3>Wishlist</h3>
                </div>
            </div>
            <hr></hr>
            <div className='buttom-com'>
                <h2>Genifast Is A Product Of Vaishanvi Biotech</h2>
                <h2>Copyright © 2021 Genifast All Right Reserved</h2>
            </div>
        </>

    )
}

export default Footer
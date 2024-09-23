import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

function Footer() {
    return(
        <>
        <footer className="mt-16 bg-muted py-8">
            <div className="container mx-auto text-center flex flex-col justify-center">
            <p>&copy; 2024 ElectroDrive. All rights reserved.</p>
            <div className="flex m-4 justify-center">
                <FaFacebookSquare className=" m-4 text-3xl" />
                <FaInstagram className=" m-4 text-3xl"/>
                <FaLinkedin className=" m-4 text-3xl"/>
                <HiOutlineMail className=" m-4 text-3xl"/>
            </div>
            </div>
      </footer>
      </>
    )
}

export default Footer;
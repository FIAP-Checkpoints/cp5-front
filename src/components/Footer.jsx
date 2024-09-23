import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

function Footer() {
    return(
        <>
        <footer className="mt-16 bg-muted py-8">
            <div className="container mx-auto text-center flex flex-col justify-center">
            <p>&copy; 2024 ElectroDrive. All rights reserved.</p>
            <div className="flex m-4 justify-center">
                <FaFacebookSquare className="text-3xl" />
                <FaXTwitter className="ms-4 me-4 text-3xl"/>
                <FaInstagram className="text-3xl"/>
            </div>
            </div>
      </footer>
      </>
    )
}

export default Footer;
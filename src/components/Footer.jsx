import { Facebook, Instagram, Twitter } from "lucide-react";

function Footer() {
    return(
        <>
        <footer className="mt-16 bg-muted py-8">
            <div className="container mx-auto text-center flex flex-col justify-center">
            <p>&copy; 2024 ElectroDrive. All rights reserved.</p>
            <div className="flex m-4 justify-center">
                <Facebook/>
                <Twitter className="ms-4 me-4"/>
                <Instagram/>
            </div>
            </div>
      </footer>
      </>
    )
}

export default Footer;
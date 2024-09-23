import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-primary">ElectroDrive</h2>
            <p className="mt-2 text-sm text-muted-foreground">Driving the future of electric mobility</p>
          </div>
          <div className="flex space-x-4">
            <SocialIcon href="https://facebook.com" icon={<FaFacebookSquare className="h-6 w-6" />} label="Facebook" />
            <SocialIcon href="https://instagram.com" icon={<FaInstagram className="h-6 w-6" />} label="Instagram" />
            <SocialIcon href="https://linkedin.com" icon={<FaLinkedin className="h-6 w-6" />} label="LinkedIn" />
            <SocialIcon href="mailto:info@electrodrive.com" icon={<HiOutlineMail className="h-6 w-6" />} label="Email" />
          </div>
        </div>
        <Separator className="my-8" />
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} ElectroDrive. All rights reserved.</p>
          <nav className="mt-4 md:mt-0">
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ href, icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-muted-foreground hover:text-primary transition-colors"
      aria-label={label}
    >
      {icon}
    </a>
  );
}
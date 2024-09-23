import { ChevronsUp } from "lucide-react";

export function Cta() {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };

      return(
        <>
            <button 
                onClick={scrollToTop} 
                className="fixed bottom-4 right-4 bg-primary text-white py-4 px-4 rounded-full shadow-lg hover:bg-primary-dark transition"
            >
                <ChevronsUp />
            </button>
        </>
      )

    
}
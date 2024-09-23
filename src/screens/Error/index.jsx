import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function ErrorPage() {
    return(
        <>
            <div className="h-[100vh] flex justify-center items-center">
                <div className="justify-center flex flex-col">
                    <h1 className="text-center font-bold text-4xl ">ERROR 404</h1>
                    <Button className="mt-4"><Link to="/">Return to Home</Link></Button>
                </div>
            </div>
        </>
    )
}
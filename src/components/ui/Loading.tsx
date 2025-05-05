import { Loader2 } from "lucide-react";

const Loading = () => {
    return (
        <div className="fixed inset-0 z-50 bg-white bg-opacity-80 backdrop-blur-sm flex items-center justify-center">
            <Loader2 className="animate-spin text-black w-10 h-10" />
        </div>
    )
}

export default Loading
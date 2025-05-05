import { BrowserRouter } from "react-router-dom"
import TransitionRoute from "./TransitionRoute"
import { Toaster } from "react-hot-toast"

function App() {
    return (
        <main className='w-full min-h-screen bg-[#f3f4f6]'>
            <BrowserRouter>
                <TransitionRoute />
                <Toaster />
            </BrowserRouter>
        </main>
    )
}

export default App

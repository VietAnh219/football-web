import { Navigate, Route, Routes } from "react-router-dom"
import Layout from "./components/layout/Layout"
import Home from "./pages/Home"
import Live from "./pages/Live"
import HightLights from "./pages/HightLights"
import Stadings from "./pages/Stadings"
import Shop from "./pages/Shop"
import ChampionLeague from "./pages/ChampionLeague"
import PremierLeague from "./pages/PremierLeague"
import LaLiga from "./pages/LaLiga"
import Ligue1 from "./pages/Ligue1"
import SerieA from "./pages/SerieA"
import Register from "./pages/Register"
import Login from "./pages/Login"
import { AnimatePresence } from "framer-motion"
import Statistics from "./pages/Statistics"
import HightLightsContent from "./components/layout/Highlight/HightLightsContent"
import ClubDetail from "./components/layout/ClubDetail/ClubDetail"
import ProtectedRoute from "./pages/ProtectedRoute"
import RedirectIfAuthenticated from "./pages/RedirectIfAuthenticated"
import Search from "./pages/Search"

const TransitionRoute = () => {
    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route element={<ProtectedRoute><Layout /></ProtectedRoute>}>
                    <Route path="/" index element={<Navigate to="/home" />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/live" element={<Live />} />
                    <Route path="/stadings" element={<Stadings />} />
                    <Route path="/highlights" element={<HightLights />} />
                    <Route path="/highlights/:id" element={<HightLightsContent />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/CL">
                        <Route index element={<ChampionLeague />} />
                        <Route path=":teamId" element={<ClubDetail />} />
                    </Route>
                    <Route path="/PL">
                        <Route index element={<PremierLeague />} />
                        <Route path=":teamId" element={<ClubDetail />} />
                    </Route>
                    <Route path="/LL">
                        <Route index element={<LaLiga />} />
                        <Route path=":teamId" element={<ClubDetail />} />
                    </Route>
                    <Route path="/FL1">
                        <Route index element={<Ligue1 />} />
                        <Route path=":teamId" element={<ClubDetail />} />
                    </Route>
                    <Route path="/SA">
                        <Route index element={<SerieA />} />
                        <Route path=":teamId" element={<ClubDetail />} />
                    </Route>
                    <Route path="/statistics/:matchSlug" element={<Statistics />} />
                    <Route path="/search" element={<Search />} />
                </Route>
                <Route path="/login" element={
                    <RedirectIfAuthenticated>
                        <Login />
                    </RedirectIfAuthenticated>
                } />
                <Route path="/register" element={
                    <RedirectIfAuthenticated>
                        <Register />
                    </RedirectIfAuthenticated>
                } />
            </Routes>
        </AnimatePresence>
    )
}

export default TransitionRoute
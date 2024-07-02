import React from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from './Home';
import Users from './Users';
import Navbar from './Navbar ';
import { QueryClient, QueryClientProvider } from "react-query"
const queryClient = new QueryClient();
function Header() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <QueryClientProvider client={queryClient}>
                    <div className="App" style={{ backgroundImage: "url(./circle.jpg)" }}>
                        <Routes>
                            <Route path="/Home" element={<Home />} />
                            <Route path="/User" element={<Users />} />
                        </Routes>
                    </div>
                </QueryClientProvider>

            </BrowserRouter>

        </>

    )

}

export default Header
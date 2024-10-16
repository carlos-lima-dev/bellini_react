# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

1-
2-
3-

import React from "react";
import {
BrowserRouter as Router,
Routes,
Route,
useLocation,
} from "react-router-dom";
import {AnimatePresence, motion} from "framer-motion";
import Layout from "./components/Layout/Layout";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Admin from "./Pages/admin";

// Animation for when the app itself first loads
const appEntranceAnimation = {
initial: {opacity: 0, scale: 0.95}, // App starts invisible and slightly scaled down
animate: {
opacity: 1,
scale: 1, // App becomes visible and scales to normal size
transition: {
duration: 0.8,
ease: [0.43, 0.13, 0.23, 0.96], // Smooth easing
},
},
};

// Page transition animation
const pageTransition = {
initial: {
opacity: 0,
scale: 0.95,
},
animate: {
opacity: 1,
scale: 1,
transition: {
duration: 0.8,
ease: [0.43, 0.13, 0.23, 0.96],
},
},
exit: {
opacity: 0,
scale: 0.95,
transition: {
duration: 0.6,
ease: [0.43, 0.13, 0.23, 0.96],
},
},
};

function AnimatedRoutes() {
const location = useLocation();

return (
<AnimatePresence mode="wait">
<Routes location={location} key={location.pathname}>
{/_ Rotas que usam o Layout _/}
<Route element={<Layout />}>
<Route
path="/"
element={
<motion.div
variants={pageTransition}
initial="initial"
animate="animate"
exit="exit">
<About />
</motion.div>
}
/>
<Route
path="/services"
element={
<motion.div
variants={pageTransition}
initial="initial"
animate="animate"
exit="exit">
<Services />
</motion.div>
}
/>
<Route
path="/contact"
element={
<motion.div
variants={pageTransition}
initial="initial"
animate="animate"
exit="exit">
<Contact />
</motion.div>
}
/>
</Route>
{/_ Rota que não usa o Layout _/}
<Route
path="/admin"
element={
<motion.div
variants={pageTransition}
initial="initial"
animate="animate"
exit="exit">
<Admin />
</motion.div>
}
/>
</Routes>
</AnimatePresence>
);
}

function App() {
return (
<motion.div
variants={appEntranceAnimation}
initial="initial"
animate="animate"
style={{height: "100%"}} // Make sure the app container takes up the full screen >
<Router>
<AnimatedRoutes />
</Router>
</motion.div>
);
}

export default App;

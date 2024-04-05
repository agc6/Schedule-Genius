import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Signin from './pages/Signin'; // Correct import
import Signup from './pages/Signup'; // Correct import
import { auth } from './firebase/firebase-config';
import { onAuthStateChanged } from 'firebase/auth';
import ToDoList from './pages/ToDoList';
import Features from './pages/Features';
import Dashboard from './pages/admin/Dashboard';
//import { adminRoutes,} from "./routes/routes";
//import Adminlayout from "./layout/Adminlayout";

const monitorAuthState = async () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log('User is signed in');
      console.log('User:', user);
    } else {
      console.log('User is signed out');
    }
  });
};

monitorAuthState();

{/*
const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      <Layout>
        <Component {...props}></Component>
      </Layout>
    )}
    exact
  ></Route>
);
*/}

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<Signin />} /> {/* Corrected path */}
          <Route path="/signup" element={<Signup />} /> {/* added signup */}\
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/features" element={<Features />} />
          <Route path="/todo" element={<ToDoList />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        {/* {adminRoutes.map((route, idx) => (
          <AppRoute
            key={idx}
            path={route.path}
            component={route.component}
            layout={Adminlayout}
          />
        ))} */}
      </Router>
    </div>
  );
}

export default App;

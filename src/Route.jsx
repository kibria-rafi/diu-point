
import { Outlet } from 'react-router-dom';
import Nav from './components/Header/Header';

const Route = () => {
    return (
        <div style={{ backgroundImage: `url('https://i.ibb.co/87MY2J2/site-bg.jpg')` }} className="mx-auto h-full  bg-no-repeat bg-cover overflow-hidden " >
            <Nav />
            <Outlet></Outlet>

        </div>
    );
};

export default Route;
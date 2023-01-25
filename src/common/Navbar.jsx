import { Link } from 'react-router-dom';

function Navbar() {
    return(
        <div>
            <h1>Navbar</h1>
            <Link to="/">Home</Link> | 
            <Link to="/product">Product</Link>
        </div>
    );
}

export default Navbar;
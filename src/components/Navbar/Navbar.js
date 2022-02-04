import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" >Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" >Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link">Signup</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link">Login</a>
                            </li>
                            <Link to="/carform">
                                <li class="nav-item">
                                    <a class="nav-link">Car form</a>
                                </li>
                            </Link>

                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item">Signup</a></li>
                                    <li><a class="dropdown-item">Login</a></li>
                                    <li><a class="dropdown-item">Car form</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item">Something else here</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled">Disabled</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}


export default Navbar;
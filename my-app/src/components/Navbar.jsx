import React  from "react";


function Navbar() {

    return (
        <div>
            <div>
                <nav class="navbar navbar-expand bg-dark">
                    <div class="container" >
                        <a class="navbar-brand" href="Home" >E-CART</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                {/* <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="Home">Home</a>
                                </li>  */}
                                <li class="nav-item">
                                    <a class="nav-link" href="Cart">Cart</a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Product
                                    </a>
                                     <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a class="dropdown-item" href="#">Complaints</a></li>
                                        <li><a class="dropdown-item" href="#">Feedback</a></li>
                                        <li><hr class="dropdown-divider" />Carrers</li>
                                        <li><a class="dropdown-item" href="#"></a></li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Sign in</a>
                                </li>
                            </ul>
                            <form class="d-flex">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button class="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>

        </div>
       


    )
}
export default Navbar

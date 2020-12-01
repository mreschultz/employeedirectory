import React from 'react';
import SearchName from "../SearchName";

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

       <div className="search-area col-10">
        <SearchName />
    </div>
</nav>
    );
}
export default Nav;
import React from "react";

function Header(props){
    return(
        <header className="h-20 shadow-xl">
           <div className="mx-auto container flex flex-row justify-between items-center h-full">
            <h1 className="text-2xl font-bold">Book vaults</h1>
                <nav>
                    <ul className="flex flex-row gap-6">
                        <li><a href="">Home</a></li>
                        <li><a href="">Books</a></li>
                        <li><a href="">Authors</a></li>
                        <li><a href="">Help</a></li>
                    </ul>
                </nav>
           </div>
        </header>
    )
}
export default Header;
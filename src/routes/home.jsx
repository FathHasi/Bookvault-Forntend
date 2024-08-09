import React, { useState } from "react";
import BookCard from "../components/BookCard";
function Home(props) {
    const [books, setBooks] =useState([
        {
            Id:1,
            title:"Bennyaminte aadhujeevitham",
            author:"Bennyamin",
            image :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8UKn-KAIHv6r8-FuH_gNpAxP56kPMO8_VGw&s"
        },
        {
            Id:2,
            title:"Aarachaar",
            author:"K R Meera",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdGa2E3SToT3YYWWjkBBdZClVEBmaUJcogiQ&s"
        },
        {
            Id:3,
            title:"Pathummayude aadu",
            author:"basheer",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpdcNvSbSsaaxEKBZR6-P7jV2vVIyp6WIU_jjz6db7yoB-EV6UhXX7o3I417z0ty7qEJw&usqp=CAU"
        }
    ])
    return(
        <main>
            <section className="py-20 container px-4 mx-auto">
                <h2 className="text-2xl font-bold">Recommended Books and Authors</h2>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-5 mt-10">
                    {
                        books.map(book=>{
                            return(
                                <BookCard key={book.id}
                                book={book}/>
                            )
                        })
                    }
                </div>
            </section>
        </main>
    );
    
}



export default Home;
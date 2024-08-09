import React from "react";
import { Link } from "react-router-dom";

const authors = [
    { 
      Id:1,
      name:"Bennyamin",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Benyamin_Writer.jpg/640px-Benyamin_Writer.jpg"
    },
    { 
        Id: 2, 
        name: "K. R. Meera", 
        image: "https://www.asuitableagency.com/wp-content/uploads/2020/11/k-r-meera-profile-photo.jpg" 
    },
    { 
        Id: 3, 
        name: "Vaikom Muhammad Basheer", 
        image: "https://fl-i.thgim.com/public/magazine/vzk9sj/article30178806.ece/alternates/FREE_1200/20100115270116801jpg" 
    },
    { 
        Id: 1, 
        name: "O. Chandu Menon", 
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d1/Chandu_Menon.jpg/220px-Chandu_Menon.jpg" 
    }
];

function Authors() {
    return (
        <main>
            <section className="py-20 container px-4 mx-auto">
                <h2 className="text-2xl font-bold">Authors</h2>
                <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {authors.map((author) => (
                        <li key={author.Id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <Link to={`/authors/${author.Id}`} className="block text-center">
                                <img src={author.image} alt={author.name} className="w-full h-48 object-cover rounded" />
                                <h3 className="text-lg font-bold mt-4">{author.name}</h3>
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    );
}

export default Authors;

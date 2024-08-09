import React from "react";
import { useParams, Link } from "react-router-dom";



const books = [
    {
        Id: 1,
        title: "Bennyaminte aadhujeevitham",
        author: "Bennyamin",
        authorId: 1, 
        description: "Benyaminte Aadhujeevitham (also known as Goat Days) is a critically acclaimed novel by the Indian author Benyamin. The story is inspired by real-life events and narrates the harrowing experiences of Najeeb, an Indian migrant worker in Saudi Arabia. The novel delves into themes of survival, human endurance, and the dark side of the migrant experience, portraying Najeeb's life as a goat herder under extreme conditions. With its powerful narrative, Benyaminte Aadhujeevitham has resonated with readers and has been translated into multiple languages, becoming one of the most celebrated works in contemporary Malayalam literature.",
        image: "https://upload.wikimedia.org/wikipedia/en/b/b5/Adujivitam.jpg"
    },
    {
        Id: 2,
        title: "Aarachaar",
        author: "K R Meera",
        authorId: 2, 
        description: "Aarachaar  provoking novel by renowned Malayalam author K R Meera. The novel centers around Chetna Grddha Mullick, the first female executioner in India, who comes from a long lineage of hangmen. Through Chetna's life and experiences, the novel explores complex themes such as justice, power, gender roles, and the weight of tradition.Aarachaar is lauded for its intricate character development and vivid storytelling, making it a landmark work in contemporary Malayalam literature. The novel has earned Meera critical acclaim and numerous awards, including the prestigious Kerala Sahitya Akademi Award.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdGa2E3SToT3YYWWjkBBdZClVEBmaUJcogiQ&s"
    },
    {
        Id: 3,
        title: "Pathummayude aadu",
        author: "Vaikom Muhammad Basheer",
        authorId: 3, 
        description: "Pathummayude Aadu  is a beloved novel by the renowned Malayalam writer Vaikom Muhammad Basheer. The novel is a semi-autobiographical work that humorously and poignantly depicts the everyday life of the author's family in a rural village. Centered around the character of Pathumma, Basheer's sister, and her goat, the story captures the simplicity, warmth, and charm of rural life in Kerala. Through witty dialogues and vivid descriptions, Basheer provides an intimate glimpse into the quirks and dynamics of his family, making Pathummayude Aadu a classic in Malayalam literature.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpdcNvSbSsaaxEKBZR6-P7jV2vVIyp6WIU_jjz6db7yoB-EV6UhXX7o3I417z0ty7qEJw&usqp=CAU"
    },{
        Id: 4,
        title:"Indhulekha",
        author:"O Chandhumenon",
        authorId: 4, 
        description: "Indulekha is a classic Malayalam novel written by O. Chandu Menon. Published in 1889, it is one of the earliest examples of modern Malayalam fiction. The novel is set in the 19th century and revolves around the life of the eponymous heroine, Indulekha, who is a strong-willed and progressive woman in a traditional society.Indulekha defies the norms of her time by seeking education and advocating for women's rights. The story highlights her struggle against societal constraints and her pursuit of personal freedom and intellectual growth. With its progressive themes and vivid portrayal of social issues, **Indulekha** is celebrated for its contribution to Malayalam literature and its impact on the social reform movement in Kerala.",
        image: "https://cdn.exoticindia.com/images/products/original/books-2019-022/uau900.webp"
    }
];

function Book() {
    const { bookId } = useParams();

    const book = books.find((b) => b.Id.toString() === bookId);
    if (!book) {
        return <div>Book not found!</div>;
    }

    return (
        <main>
            <section className="py-20 container px-4 mx-auto">
                <h2 className="text-3xl font-bold">{book.title}</h2>
                <p className="text-lg mt-2">{book.author}</p>
                <img src={book.image} alt={book.title} className="mt-10 mx-auto max-w-xs md:max-w-md lg:max-w-lg h-auto rounded-lg shadow-lg" />
                <p className="mt-5">{book.description}</p>
                <Link to={`/authors/${book.authorId}`} className="block mt-4 text-blue-500 hover:underline">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
                        Learn More About the Author
                    </button>
                </Link>
            </section>
        </main>
    );
}

export default Book;

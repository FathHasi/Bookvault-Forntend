// src/routes/author.jsx
import React from "react";
import { useParams } from "react-router-dom";

// Sample authors data (this could be moved to a separate file or fetched from an API)
const authors = [
    {
        Id: 1,
        name: "Bennyamin",
        bio: "Bennyamin, a quiet observer in a bustling city, had a secret: he was a writer. Each evening, he crafted stories blending reality with dreams. One day, he was drawn into an old bookshop on Elm Street by a shimmering book titled “The Chronicles of Hidden Realms.” That night, Bennyamin discovered the book was a portal to fantastical worlds. His experiences there inspired captivating stories that delighted readers everywhere. The once-quiet observer had become a celebrated storyteller, forever enchanted by the magic that lay just beyond the ordinary.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Benyamin_Writer.jpg/640px-Benyamin_Writer.jpg"
    },
    {
        Id: 2,
        name: "K R Meera",
        bio: "KR Meera was a reclusive artist living in a quaint cottage surrounded by hills and forests. Her paintings, filled with fantastical landscapes and mysterious beings, were rumored to reveal hidden truths and evoke deep emotions.One rainy day, young artist Sam sought shelter at her cottage and was captivated by her work. Meera, usually reserved, shared the stories behind her paintings, filled with dreams and legends. Inspired by this encounter, Meera’s art took on new depth, bridging her secluded world with the vibrant life beyond.",
        image: "https://www.asuitableagency.com/wp-content/uploads/2020/11/k-r-meera-profile-photo.jpg"
    },
    {
        Id: 3,
        name: "Vaikom Muhammad Basheer",
        bio: "Vaikkom Muhammad Basheer was a celebrated Indian writer known for his vivid storytelling and deep compassion. Hailing from the town of Vaikkom, his works, often laced with humor and humanity, captured the essence of everyday life and the struggles of the common man. Basheer's unique voice and profound insights made him a cherished literary figure, leaving a lasting impact on Malayalam literature.His stories, such as Balyakalasakhi and Pathummayude Aadu, showcased his ability to blend simplicity with profound emotion, reflecting the cultural and social fabric of Kerala. Despite facing numerous hardships, Basheer’s resilience and creativity turned him into an enduring icon of literary excellence.",
        image: "https://fl-i.thgim.com/public/magazine/vzk9sj/article30178806.ece/alternates/FREE_1200/20100115270116801jpg"
    },{
        Id: 4,
        name: "O Chandhumenon",
        bio: "O. Chandu Menon (1847–1899) was a pioneering Malayalam writer and one of the earliest contributors to modern Malayalam literature. He is best known for his landmark novel Indulekha, published in 1889, which is considered one of the first modern novels in Malayalam.Chandu Menon was a social reformer and an advocate for educational and social progress. His works often addressed contemporary social issues and aimed to challenge traditional norms.Indulekha is notable for its progressive portrayal of women's issues and its critique of the rigid social structure of 19th-century Kerala.Menon's writing is characterized by its blend of realism and social commentary, making him a significant figure in the evolution of Malayalam literature and the broader Indian literary landscape.",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d1/Chandu_Menon.jpg/220px-Chandu_Menon.jpg"
    }
];

function Author() {
    const { authorId } = useParams();

    // Find the author with the matching ID
    const author = authors.find((a) => a.Id.toString() === authorId);

    // If author not found, display a message or handle the error
    if (!author) {
        return <div>Author not found!</div>;
    }

    return (
        <main>
            <section className="py-20 container px-4 mx-auto">
                <h2 className="text-3xl font-bold">{author.name}</h2>
                <img src={author.image} alt={author.name} className="w-48 h-48 object-cover rounded-full mx-auto" />
                <p className="mt-5">{author.bio}</p>
            </section>
        </main>
    );
}

export default Author;

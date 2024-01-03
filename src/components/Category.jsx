import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard";


const Category = () => {
    const categoryNews = useLoaderData();
    return (
        <section>
            <h2>This is Category categoryNews: {categoryNews.length}</h2>

            <div>
                {
                    categoryNews.map(news => <NewsCard
                        key={news._id}
                        news={news}
                        ></NewsCard>)
                }
            </div>
        </section>
    );
};

export default Category;
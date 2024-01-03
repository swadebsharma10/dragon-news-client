import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/NewsCard";


const Home = () => {
    const allNews = useLoaderData();
    return (
        <section>
            <h2>This is Home : {allNews.length}</h2>
            <div>
            {
                allNews.map(news => <NewsCard
                    key={news._id}
                    news={news}
                    ></NewsCard>)
            }
            </div>
        </section>
    );
};

export default Home;
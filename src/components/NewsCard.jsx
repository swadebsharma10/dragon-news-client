

const NewsCard = ({news}) => {
    console.log(news)
    const {title} = news;
    return (
        <div>
            <p>{title}</p>
        </div>
    );
};

export default NewsCard;
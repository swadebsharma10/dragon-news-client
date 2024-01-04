import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftNav = () => {

    const [categories, setCategories] = useState([]);

    const url = `https://dragon-news24-server.vercel.app/news-categories`;

    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data =>{
            setCategories(data)
        })

    },[url] );

    

    return ( 
        <section>
         <h4>All Categories</h4> 
            <div>
                {
                    categories.map(category => <p key={category.id}>
                      <Link to={`/category/${category.id}`}>{category.name}</Link>  
                        </p>
                    )
                }
            </div>
        </section>
    );
};

export default LeftNav;
import { useState } from "react";
import Bloglist from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'jhonna', id: 1 },
        { title: 'Web dev tips 2021', body: 'lorem ipsum...', author: 'gec', id: 2 },
        { title: 'Birthday Party', body: 'lorem ipsum...', author: 'jhonna', id: 3 },
    ]);

    const handleDelete = (id) =>{
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }
    
    return ( 
        <div className="home">
            <Bloglist blogs={blogs} title= "All Blogs" handleDelete={handleDelete}/>
        </div>
     );
}
 
export default Home;
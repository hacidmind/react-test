import '../css/Blog.css'
import { Link } from "react-router-dom";

const Bloglist = ({ blogs, headings }) => {
    return (
        <div>
            <h1>{headings}</h1>
            {blogs.map((vehicle) => (
                <div className="blog-preview" key={vehicle.id}>
                    <Link to={`/blog/${vehicle.id}`}>
                    
                    <h2>{vehicle.title}</h2>
                    <p>{vehicle.body}</p>
                    <p>{vehicle.founder}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default Bloglist;

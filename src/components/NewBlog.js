
import '../css/NewBlog.css';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'

const Newblog = () => {
    const [title, setTitle] = useState('')
    const [founder, setFounder] = useState('')
    const [body, setBody] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        // alert(`The name you entered was ${title} ${founder} ${body}`)
        const blog = { title, founder, body }
        // console.log(blog);
        setIsLoading(true)
    

        fetch('http://localhost:8000/blogs', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            setIsLoading(false);
            navigate('/blog');
        })
    }
    return (
        <div className="newBlog">
            <h2>Add A New Blog</h2>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div>
                        <label>Blog Title</label>
                    </div>
                    <div className="col-100">
                        <input type="text" placeholder="Your Title.." required value={title} onChange={(e)=>setTitle(e.target.value)} />
                    </div>
                    <div className="row">
                        <div>
                            <label>Founder</label>
                        </div>
                        <div className="col-100">
                            <input type="text" placeholder="The founder.." value={founder} onChange={(e) => setFounder(e.target.value)} />
                        </div>
                    </div>

                    <div className="row">
                        <div>
                            <label htmlFor="subject">Body</label>
                        </div>
                        <div className="col-100">
                            <textarea id="subject" placeholder="Body.." style={{ height: "200px" }} value={body} onChange={(e) => setBody(e.target.value)} />
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        {
                            !isLoading && <input type="submit" value="Submit" />
                        }
                        {
                            isLoading && <input type="submit" value="Adding Blog...." />
                        }
                    </div>

                </div>
            </form>
        </div>
    );
}

export default Newblog;

// import { useState, useEffect } from 'react';

import BlogList from './BlogList'
import useCustomHook from '../useCustomHook'

const Blog = () => {

    const { data: blogs, isLoading, isError } = useCustomHook("http://localhost:8000/blogs")
    


    return (
        <div>
            {blogs && <BlogList blogs={blogs} headings="Car Review" />}
            {isLoading ? <div>Loading....</div> : ""}
            {isError && <div>Error fetching data </div>}
        </div>
    );
}

export default Blog;

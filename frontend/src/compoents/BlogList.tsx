import axios from 'axios';
import { useEffect, useState } from 'react'
import Header from '../shared/Header';

type Blog = {
    title: string;
    content: string;
    createdAt: string;
}
export default function BlogList() {
    const [data, setData] = useState<Blog[]>([]);

    const getData = async () => {
        try {
            const res = await axios.get("http://localhost:3000/get-blogs");
            setData(res.data?.data)
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <Header />
            <div className=' h-screen gap-4 bg-zinc-900 w-screen flex-col flex justify-center items-center'>

                <div className='my-5'>

                    <h1 className='text-white text-lg'> My Blogs</h1>
                </div>

                {data.map((blog, i) => {
                    return (
                        <div key={i} className='border-[1px] rounded-md text-white p-4 border-white  bg-zinc-800'>
                            <h1>Title : {blog.title}</h1>
                            <p>Content : {blog.content}</p>
                            <p>Created At : {blog.createdAt}</p>
                        </div>
                    )
                })}
            </div>
        </>

    )
}

import axios from 'axios'
import React, { useState } from 'react'
import { CREATE_BLOG } from '../ApiRoutes'
import { BASE_URL } from '../config'
import Header from '../shared/Header'

export default function BlogPage() {

    const [blogData, setBlogData] = useState({
        title: "",
        content: "",
    })

    const changeHanler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setBlogData({
            ...blogData,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const res = await axios.post(`${BASE_URL}${CREATE_BLOG.CREATE}`, {
                ...blogData
            });
            if (res.status == 200) {
                alert("BLOG CREATED")
            }
        } catch (e) {
            alert("BLOG NOT CREATED")
        }
    }
    return (
        <>
            <Header />
            <div className='h-screen w-screen flex justify-center items-center'>

                <form onSubmit={handleSubmit} className='flex flex-col border-2 p-20 w-auto rounded-2xl  gap-[20px]'>
                    <h1 className='text-2xl font-bold'>Create Your Blog</h1>
                    <div>
                        <input name='title' onChange={changeHanler} type="text" className='border-2 p-2 rounded-2xl border-grey-500' placeholder='Title' />
                    </div>
                    <div>

                        <textarea name='content' onChange={changeHanler} className='border-2 p-2 rounded-2xl border-grey-500' placeholder='Content' />
                    </div>
                    <div>

                        <button type='submit' className='bg-sky-500 cursor-pointer rounded-lg p-4 text-xs text-white'>Create Blog</button>
                    </div>
                </form>


            </div>
        </>

    )
}

import express from 'express'
import { MONGO_URI, PORT } from './config.js';
import cors from 'cors';
import mongoose from 'mongoose';
import Blog from './model/Blog.js';

const app = express();

app.use(express.json());

mongoose.connect(MONGO_URI).then(() => {
    console.log("Database Connected Successfully");
}).catch((e) => {
    console.log("Error", e);
})
app.use(cors({
    origin:"*",
    methods:["GET","POST", "PUT", "DELETE"],
    credentials:true
}))
// Routes
app.post('/create-blog', (req, res) => {
    try {
        const title = req.body?.title || 'Sample Blog';
        const content = req.body?.content || 'Sample Content';
        console.log(title, content);
        console.log(req.body);

        const newBlog = new Blog({
            title:title,
            content:content
        })
        newBlog.save();
        res.json({
            messgae:"Created Successfully",
            data: {
                title: title,
                content: content
            }
        })
    } catch (E) {
        res.json({
            message:"Internal Server Error",
            error:E
        })
        console.log(E);
    }
})
app.get('/get-blogs' , async (req, res) => {
    const data = await Blog.find();
    res.json({
        data
    })
});

app.get('/health', (req, res) => {
    res.json({
        service: "blog-app",
        version: 1,
        time: Date.now()
    })
})
app.listen(PORT, () => {
    console.log('Backend Running on port http://localhost:' + PORT);
})
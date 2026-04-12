import { Link } from 'react-router-dom'
import Header from '../shared/Header'

export default function HomePage() {


    return (
        <div>
           <Header/>
            <Link to="/create-blog">
                Create A Blog
            </Link>
        </div>
    )
}

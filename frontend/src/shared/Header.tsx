import { onClick } from '../helpers/utils'

export default function Header() {
    return (
        <header className='flex justify-between px-5 py-4 shadow-lg '>
            {/* Logo Part */}
            <div className='flex items-center'>
                BLOGGY
            </div>
            {/* Links */}
            <div className='flex justify-between items-center  list-none gap-5'>
                <li>Home</li>
                <li>About</li>
                <li className='cursor-pointer' onClick={() => onClick('/list-blogs')}> List</li>
                <button onClick={() => onClick('/create-blog')} className='bg-sky-500 cursor-pointer rounded-lg p-4 text-xs text-white' >
                    Create First Blog
                </button>
            </div>
        </header>
    )
}

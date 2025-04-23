import Link from 'next/link'
import '../globals.css'
const Navbar = () => {
    return (
        <div className="containerb py-4 flex in-checked: justify-between">
            <Link href='/'><h2 className='text-3xl font-[montbold]'>CODERPATH</h2></Link>

            <div className="flex gap-5 items-center text-lg">
                <ul className='gap-5 flex items-center'>
                    <li><Link href='/'>home</Link></li>
                    <li><Link href='/quiz'>quizs</Link></li>
                    <li><Link href='/learning'>learning</Link></li>
                </ul>

                <Link href='/signup' className='px-7 pb-3 pt-2 border-[0.3px] border-amber-100 rounded-md'>Sign Up</Link>
            </div>
        </div>
    )
}

export default Navbar
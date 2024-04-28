import { Link } from 'react-router-dom';
import quiz from '../assets/Quiz.png';
import Footer from '../components/Footer';


export default function Quiz() {
  return (
    <div className='px-16 '>
      <img src={quiz} alt="quiz section" className='mb-16' />

      <Link to='/about/results' className='px-8 py-2 w-[300px] rounded-lg font-sans text-base text-[#FFF] bg-[#BF4C9A] flex justify-center items-center'> See Your Results      
      </Link>

      <Footer />

    </div>
  )
}

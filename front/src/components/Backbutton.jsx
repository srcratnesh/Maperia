import { Link, useNavigate } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

const Backbutton = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className='flex'>
      <button onClick={goBack} className='bg-black text-white px-4 py-1 rounded-lg w-fit glow-smd '>
        <BsArrowLeft className='text-2xl'/>
      </button>
    </div>
  );
};

export default Backbutton;

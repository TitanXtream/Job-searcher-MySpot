import { Logo } from '.';
import { FaRegCopyright } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className='bg-[#fff0c3] py-[2rem] flex items-center gap-[1rem] justify-between'>
      <div className='flex items-center gap-[0.4rem]'>
        <FaRegCopyright /> <Logo /> - created by SKIELIME 2024
      </div>
    </footer>
  );
};

export default Footer;

import { PrimaryButton } from '.';

const TopNavbar = () => {
  return (
    <div className='w-full py-[1rem]'>
      <div className='w-full flex justify-between'>
        <Logo />
        <NavOptions />
      </div>
    </div>
  );
};

export default TopNavbar;

const navOptions = [
  'Find Jobs',
  'Categories',
  'Companies',
  'Advance',
  'Contact',
];
export const Logo = () => {
  return <div className='font-extrabold text-[1.5rem]'>LOGO</div>;
};

const NavOptions = () => {
  return (
    <nav className='flex gap-[0.5rem]'>
      {navOptions.map((opt, i) => (
        <button
          key={i}
          className='bg-transparent border-0 px-[1rem] py-[0.3rem] group [--transition-duration:300ms]'
        >
          <div className='relative'>
            <p className='text-[0.8rem] group-hover:-translate-y-[0.5rem] duration-[var(--transition-duration)]'>
              {opt}
            </p>
            <div className='w-0 h-[0.1rem] group-hover:w-full bg-black rounded-sm transition-[width] duration-[var(--transition-duration)]' />
          </div>
        </button>
      ))}
      <PrimaryButton>Sign up</PrimaryButton>
    </nav>
  );
};

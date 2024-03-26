import { ReactNode } from 'react';

type PrimaryButtonType = {
  children: ReactNode;
  icon?: boolean;
};

export const PrimaryButton = ({ children, icon }: PrimaryButtonType) => {
  return (
    <button
      className={`bg-[#313234] border-0 h-[3rem] ${
        icon ? 'w-[2.5rem] flex items-center justify-center' : 'px-[1.5rem]'
      } text-white rounded-[0.8rem] hover:shadow-lg hover:scale-[1.05] active:scale-[1.1] duration-300 transition-transform`}
    >
      <div className='text-[0.8rem] flex gap-[0.5rem] items-center'>
        {children}
      </div>
    </button>
  );
};

type DownloaderButtonProps = {
  icon: string;
  label: string;
  helperText: string;
};
export const DownloaderButton = ({
  icon,
  helperText,
  label,
}: DownloaderButtonProps) => {
  return (
    <button className='flex flex-row p-[0.5rem] bg-[#FD7E55] rounded-[0.5rem] items-center gap-[0.5rem] hover:scale-[1.05] duration-300 transform hover:shadow-md'>
      <img src={icon} className='size-[2.3rem] object-contain object-center' />
      <div className='flex flex-col items-start'>
        <p className='text-[0.7rem]'>{helperText}</p>
        <h1 className='font-medium leading-[110%]'>{label}</h1>
      </div>
    </button>
  );
};

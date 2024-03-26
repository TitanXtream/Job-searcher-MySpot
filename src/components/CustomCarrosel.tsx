import { useState } from 'react';
import {
  employee1Img,
  employee2Img,
  employee4Img,
  employee5Img,
} from '../assets';

import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from 'react-icons/md';

type CarosolData = {
  imageUrl: string;
  name: string;
  profession: string;
  bgColor: string;
};

const carosolData: CarosolData[] = [
  {
    imageUrl: employee1Img,
    name: 'Stephen Griphit',
    profession: 'Financila consultant',
    bgColor: 'FF7B51',
  },
  {
    imageUrl: employee2Img,
    name: 'Lora Winkle',
    profession: 'Financila consultant',
    bgColor: 'CEB7E3',
  },
  {
    imageUrl: employee5Img,
    name: 'John walker',
    profession: 'Financila consultant',
    bgColor: '6096FF',
  },
  // {
  //   imageUrl: employeeImg,
  //   name: 'Great Winkle',
  //   profession: 'Financila consultant',
  // },
  {
    imageUrl: employee4Img,
    name: 'Skara Jakson',
    profession: 'Financila consultant',
    bgColor: '5FF49F',
  },
];

const CustomCarrosel = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [secondNextIndex, setSecondNextIndex] = useState(2);

  const setAllIndex = (index: number) => {
    setSelectedIndex(index);

    setNextIndex((index + 1) % carosolData.length);

    setSecondNextIndex((index + 2) % carosolData.length);
  };

  const moveNext = () => {
    setAllIndex(nextIndex);
  };
  const movePrev = () => {
    setAllIndex(selectedIndex > 0 ? selectedIndex - 1 : carosolData.length - 1);
  };

  return (
    <div className='grid grid-cols-4 grid-rows-2 h-[500px] w-full gap-[1rem]'>
      <div className='w-full h-full col-span-2 row-span-2 '>
        <ImageCard
          presenter
          index={selectedIndex}
          movePrev={movePrev}
          moveNext={moveNext}
          key={selectedIndex}
        />
      </div>
      <div className='w-full h-full col-span-1 row-span-1'>
        <ImageCard index={nextIndex} />
      </div>
      <div className='w-full h-full col-span-1 row-span-1'>
        <ImageCard index={secondNextIndex} />
      </div>
      <div className='w-full h-full col-span-2 row-span-1 bg-[#323335] rounded-[4rem] grid grid-cols-2 grid-rows-2 text-white py-[2rem] px-[3rem] gap-[2rem] '>
        <InfoBox value='14K+' helperText='freelancers available' />
        <InfoBox value='4.9' helperText={`Client\nsatisfaction`} />
        <InfoBox value='98%' helperText={`Big\n companies`} />
        <InfoBox value='2,6K' helperText={`Job\napplied`} />
      </div>
    </div>
  );
};

export default CustomCarrosel;

type ImageCardProps = {
  index: number;
} & (
  | {
      presenter?: false;
    }
  | {
      presenter: true;
      moveNext: () => void;
      movePrev: () => void;
    }
);

const ImageCard = ({ index, ...props }: ImageCardProps) => {
  const employeeData = carosolData[index];

  const color = `#${employeeData.bgColor}`;

  // const twColorClasses = `[--color:${color}]`;
  // // const twColorClasses = `text-[${color}] border-[${color}] hover:bg-[${color}] bg-white`;

  return (
    <div className={`relative w-full h-full`}>
      {props?.presenter && (
        <>
          <CarosolSliderBtn
            onClick={props.movePrev}
            type='prev'
            color={color}
          />
          <CarosolSliderBtn
            onClick={props.moveNext}
            type='next'
            color={color}
          />
        </>
      )}
      <div
        className='relative rounded-[10rem] flex items-center justify-center h-full w-full overflow-hidden'
        style={{
          backgroundColor: color,
        }}
      >
        <img
          className='w-full h-full object-cover object-center animate-toggle-up-slow duration-150'
          src={employeeData.imageUrl}
        />
        {props?.presenter && (
          <div className='absolute inset-x-0 bottom-0 w-[96%] h-auto animate-toggle-up'>
            <div className='m-auto pt-[1rem] pb-[3rem] px-[1rem] flex flex-col items-center text-white bg-slate-500/50 backdrop-blur-md gap-[0.3rem] rounded-[4rem]'>
              <h2 className='font-bold uppercase'>{employeeData.name}</h2>
              <p className='text-[0.8rem]'>{employeeData.profession}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

type CarosolSliderBtnProps = {
  onClick: () => void;
  color: string;
  type: 'next' | 'prev';
};

const CarosolSliderBtn = ({ onClick, type, color }: CarosolSliderBtnProps) => {
  // const twColorClasses = `[--color:${color}]`;
  // const createClassList = (color: string) =>
  //   `text-[${color}] border-[${color}] hover:bg-[${color}] bg-white hover:text-white`;
  // const twColorClasses = createClassList(color);

  // const colorsObj = {

  // }
  return (
    <button
      // className={`z-[1] absolute top-[50%] ${
      //   type === 'prev'
      //     ? 'left-0 translate-x-[-50%]'
      //     : 'right-0 translate-x-[50%]'
      // } translate-y-[-50%] size-[2.5rem] rounded-full flex items-center justify-center border-[2px] shadow-md hover:shadow-lg transform duration-300 hover:scale-[1.1] ${twColorClasses}`}
      className={`z-[1] absolute top-[50%] ${
        type === 'prev'
          ? 'left-0 translate-x-[-50%]'
          : 'right-0 translate-x-[50%]'
      } translate-y-[-50%] size-[2.5rem] rounded-full flex items-center justify-center border-[2px] text-[var(--color)] border-[var(--color)] bg-white shadow-md hover:bg-[var(--color)] hover:text-white hover:shadow-lg transform duration-300 hover:scale-[1.1] `}
      style={{
        // @ts-expect-error Explanation: css variables can be used this wa actually
        '--color': color,
      }}
      onClick={onClick}
    >
      {type === 'prev' ? (
        <MdOutlineArrowBackIosNew />
      ) : (
        <MdOutlineArrowForwardIos />
      )}
      {/* <MdOutlineArrowForwardIos /> */}
    </button>
  );
};

type InfoBoxProps = {
  value: string;
  helperText: string;
};

const InfoBox = ({ value, helperText }: InfoBoxProps) => {
  return (
    <div className='flex flex-col'>
      <p className='text-[1.8rem] font-semibold'>{value}</p>
      <p className='text-[0.7rem] text-gray-400 leading-[110%] whitespace-pre-wrap'>
        {helperText}
      </p>
    </div>
  );
};

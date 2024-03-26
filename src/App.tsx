import { appleStoreIcon, playStoreIcon } from './assets';
import {
  CustomCarrosel,
  DownloaderButton,
  Footer,
  PrimaryButton,
  TopNavbar,
} from './components';
import { MdArrowOutward } from 'react-icons/md';

function App() {
  return (
    <div className='bg-[#F6F2E6] w-full min-h-screen h-full *:md:px-[4rem] *:sm:px-[2rem] *:px-[1rem]'>
      <header>
        <TopNavbar />
      </header>
      <main className='flex flex-col items-stretch'>
        <div className='flex justify-between py-[3rem] gap-[2.5rem]'>
          <div className='flex flex-col gap-[2.5rem] w-[26rem] shrink-0'>
            <h1 className='font-semibold text-[3.5rem] leading-[3.5rem] animate-fade-in-down'>
              Uncover New <br />
              Horizons in
              <br /> Freelance Jobs
            </h1>
            <p className='text-justify animate-fade-in-right'>
              <span className='font-semibold'>MySpot</span> connects skilled
              freelancers to diverse, existing opportunities globally. Explore
              your potential and transform your career with our user-friendly
              platform. The future of freelancing starts here.
            </p>
            <div className='flex gap-[1rem] animate-fade-in-up'>
              <PrimaryButton>Search for Freelancer</PrimaryButton>
              <PrimaryButton>
                <p>Consultant</p>
                <MdArrowOutward className='text-[1.4rem]' />
              </PrimaryButton>
            </div>
            <div>
              <p className='text-[0.8rem] text-gray-600'>Download App</p>
              <div className='flex gap-[1rem] animate-fade-in-up mt-[1rem]'>
                <DownloaderButton
                  icon={appleStoreIcon}
                  label='App Store'
                  helperText='Download on the'
                />
                <DownloaderButton
                  icon={playStoreIcon}
                  label='Google Play'
                  helperText='GET IT ON'
                />
              </div>
            </div>
          </div>
          <CustomCarrosel />
        </div>
      </main>
      {/* <footer className='bg-red-500'> */}
      <Footer />
      {/* </footer> */}
    </div>
  );
}

export default App;

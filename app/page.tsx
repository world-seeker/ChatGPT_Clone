import { BoltIcon, ExclamationTriangleIcon, SunIcon } from '@heroicons/react/24/outline';


export default function Home() {
  return (
    <main className='text-white flex flex-col justify-center p-4 items-center h-screen px-2 overflow-scroll'>
      <h1 className='text-5xl font-bold mb-20'>ChatGpt</h1>

      <div className='flex space-x-2'>
        <div>
          <div className='flex flex-col items-center justify-center mb-5'>
            {/* Sun Icon */}
            <SunIcon className="h-8 w-8" />
            <h2>Examples</h2>
          </div>

          <div className='space-y-2'>
            <p className='infoText'>
              {"Expain Something to me"}
            </p>
            <p className='infoText'>
              {"What is the difference between a dog and a cat"}
            </p>
            <p className='infoText'>
              {"What is the color of the sun?"}
            </p>
          </div>
        </div>

        <div>
          <div className='flex flex-col items-center justify-center mb-5'>
            {/* Bolt Icon */}
            <BoltIcon className="h-8 w-8" />
            <h2>Capabilities</h2>
          </div>

          <div className='space-y-2'>
            <p className='infoText'>
              {"Change ChatGPT Model to use"}
            </p>
            <p className='infoText'>
              {"Messages are stored in Firebase's Firestore"}
            </p>
            <p className='infoText'>
              {"Hot Toast notification when ChatGPT is thinking!"}
            </p>
          </div>
        </div>

        <div>
          <div className='flex flex-col items-center justify-center mb-5'>
            {/* Exclamation Triangle Icon */}
            <ExclamationTriangleIcon className="h-8 w-8" />
            <h2>Limitations</h2>
          </div>

          <div className='space-y-2'>
            <p className='infoText'>
              {"May occasionally generate incorrect information"}
            </p>
            <p className='infoText'>
              {"May occasionally produce harmful instructions or biased content"}
            </p>
            <p className='infoText'>
              {"Limited knowledge of world events after 2021"}
            </p>
          </div>
        </div>
      </div>

 
    </main>
  );
}

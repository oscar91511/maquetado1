
import './App.css'



function App() {

  return (
    <div className="App text-[18px]
    font-hanken-grotesk grid place-content-center sm:min-h-screen">
      
      <section className='grid sm:grid-cols-2 max-w-[700px] sm:shadow-2xl'>
        
        {/* Seccion superior */}
        <section className='bg-gradient-to-t from-light-royal-blue to-light-royal-blue/80
         text-center text-white px-10 py-4 
         rounded-b-3xl sm:rounded-t-3xl sm:grid sm:content-between'>

          <h4 className='text-gray-300 font-semibold text-lg'>Your Result</h4>

          <div className='bg-gradient-to-b
           from-light-royal-blue to-violet-blue/15 w-[110px] 
           aspect-square grid place-content-center gap-[2px] mx-auto 
           rounded-full my-4'>
            <h2 className='text-5xl font-bold'>76</h2>
            <h4 className='text-sm text-gray-300'>of 100</h4>
          </div>

          <h3 className='text-2xl font-bold mt-6'>Great</h3>

          <p className='text-gray-300 my-4'>You scored higher than 65% of the people who have taken these tests.</p>

        </section >

        {/* Seccion inferiorr */}
        <section className='px-8 py-6'>

          <h3 className='font-bold'>Summary</h3>

          <ul className='grid gap-3 my-4'>

            <li className='flex justify-between bg-light-red/10 p-3 rounded-md'>
              <h5 className='flex gap-2 text-light-red'>
                <img src="/images/icon-reaction.svg" alt="" />
                Reaction
              </h5>
              <h5 className='font-bold'>80 <span className='text-gray-400 font-semibold
              '>/ 100</span></h5>
            </li>
            <li className='flex justify-between bg-orangey-yellow/10 p-3 rounded-md'>
              <h5 className='flex gap-2 text-orangey-yellow'>
                <img src="/images/icon-memory.svg" alt="" />
                Memory
              </h5>
              <h5 className='font-bold'>92 <span className='text-gray-400 font-semibold
              '>/ 100</span></h5>
            </li>
            <li className='flex justify-between bg-green-teal/10 p-3 rounded-md'>
              <h5 className='flex gap-2 text-green-teal'>
                <img src="/images/icon-verbal.svg" alt="" />
                Verbal
              </h5>
              <h5 className='font-bold'>61 <span className='text-gray-400 font-semibold
              '>/ 100</span></h5>
            </li>
            <li className='flex justify-between bg-cobalt-blue/10 p-3 rounded-md'>
              <h5 className='flex gap-2 text-cobalt-blue'>
                <img src="/images/icon-visual.svg" alt="" />
                Visual
              </h5>
              <h5 className='font-bold'>72 <span className='text-gray-400 font-semibold
              '>/ 100</span></h5>
            </li>

          </ul>
          
          <button className='bg-slate-800 w-full text-white py-3 
          rounded-full hover:bg-gradient-to-t hover:from-light-royal-blue
            hover:to-light-royal-blue/80 '>Continue</button>

        </section>

      </section>

    </div>
  )
}

export default App



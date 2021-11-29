 import { useState } from 'react'
 import './index.css';
 import Time from'./Time.js'

 function App() {
   const getItemLocalStates = JSON.parse(localStorage.getItem('job'))
   const [job, setJob] = useState('')
   const [lists, setLists] = useState(getItemLocalStates ?? [])
  const handleAddJob = (e) => {
    setLists(prev => {
      const newJob = [...prev,job]
      const jsonJob = JSON.stringify(newJob)
      
      localStorage.setItem('job', jsonJob)
      return newJob
    })
    setJob('')
  }

  const removeJob = (index) => {
    setJob(lists.splice(index, 1)) && setJob('')
    localStorage.setItem('job', JSON.stringify(lists))
    
  }
    return (
      <div className="w-full h-screen bg-gray-600 relative">
          <div className="w-1/2 h-3/4 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-xl shadow-2xl">
              <div className="flex  justify-center bg-pink-800 rounded-xl text-white font-bold text-2xl py-8">
                 <Time/>
              </div>

             <div className="absolute w-4/5 left-1/2 transform -translate-x-1/2 mt-10">
                <div className="w-full text-center">
                    <input value={job}onChange={(e) => setJob(e.target.value)} type="text" className="w-4/5 p-2 rounded-xl outline-none" placeholder="Add Job..."/>
                    <button onClick={handleAddJob} className="p-2 text-white bg-gray-700 ml-5 rounded-xl">Add</button>
                </div>
                <div className="w-4/5 px-10 py-5 absolute">
                  <ul className="">
                  {lists.map((list,index) => {
                      return (
                          <div className="flex mb-5" key={index}>
                            <li>{list}</li>
                            <button onClick={() => removeJob(index)} className="px-2 ml-5 bg-gray-700 rounded-xl text-white">Remove</button>
                          </div>
                      )
                  })}
                  </ul>
                </div>
             </div>


          </div>
      </div>
    )
 }

export default App;

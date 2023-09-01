"use client"
import { useState } from "react"

export default function Home() {

  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [main, setmain] = useState([])


  const submitHandler = (e) => {
    e.preventDefault()
    setmain([...main, { title, desc }]);
    settitle("")
    setdesc("")
    console.log(main)
  }

  let rendertask = <h2>NO TASK</h2>
  if (main.length > 0) {
    rendertask = main.map((t, i) => {
      return <ul className="flex items-center justify-between ">
        <div className="flex justify-between mb-1 w-1/2">
          <h5 className="text-2xl font-bold">{t.title}</h5>
          <h4 className="text-xl font-semibold">{t.desc}</h4>
        </div>
        <button>delete</button>
      </ul>
    })
  }

  return (
    <>
      <h1 className="font-extrabold p-5  text-center text-5xl bg-[#1E4174] text-[#DDA94B]">
        Shivam TODO APP
      </h1>
      <div>
        <form onSubmit={submitHandler}>
          <input type="text" className="m-3 border-zinc-600 border-2 text-2xl p-3 "
            placeholder="Enter task here"
            value={title}
            onChange={(e) => {
              settitle(e.target.value)
            }}
          />
          <input type="text" className="m-3 border-zinc-600 border-2 text-2xl p-3 "
            placeholder="Enter desc here"
            value={desc}
            onChange={(e) => {
              setdesc(e.target.value);
            }}
          />
          <button className="bg-[#1E4174] border px-4 py-2 rounded-full text-[#DDA94B]">Add task</button>
        </form>

        <hr />
        <div className="p-8 bg-slate-200 text-2xl">
          {rendertask}
        </div>

      </div>
    </>
  )
}

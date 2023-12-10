import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(0)
  const [number, SetNumber] = useState(false)
  const [specialChar, SetSpecialChar] = useState(false)
  const [password, setPassword] = useState('')


  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "QWERTYUIOPLKJHGFDSAZXCVBNM"

    if (number) {
      str += "1234567890"
    }
    if (specialChar) {
      str += "!@#$%^&*()_+?/"
    }

    for (let i = 1; i <= length; i++) {
      let randomStr = str.charAt([Math.floor(Math.random() * str.length)])
      pass += randomStr
    }
    setPassword(pass)
  }, [length, number, specialChar])

  useEffect(() => {
    passwordGenerator()
  }, [length, number, specialChar, setPassword])

  //Reference

  const inputRef = useRef()
  const copyButton = useCallback(() => {
    inputRef.current?.select();
    window.navigator.clipboard.writeText(inputRef.current.value)
  }, [password])
  console.log(inputRef);
  return (
    <>
      <div className="flex h-screen items-center justify-center bg-sky-900">
        <div className="w-1/2 rounded-lg bg-sky-800 p-10 ">

          <div className="mb-10 flex">
            <input
              className="flex-1 rounded-md placeholder:text-sky-900 pl-3"
              type="text" name="" id=""
              value={password}
              placeholder='Password'
              readOnly
              ref={inputRef} />
            <button
              className="text-sky-100 ml-2 rounded-lg bg-sky-600 px-5 py-2"
              onClick={copyButton}
            >Copy</button>
          </div>

          <div className="flex justify-between">

            <div className="flex">
              <input
                onChange={(e) => setLength(e.target.value)}
                type="range"
                name=""
                id=""
                min='0'
                max="26"
                value={length} />
              <label
                className="ml-3 text-sky-100"
              >Length ( {length} )</label>
            </div>

            <div className="flex">
              <input
                onChange={() => SetNumber((prev) => !prev)}
                type="checkbox"
                name=""
                id="" />
              <label className="ml-3 text-sky-100">Number</label>
            </div>

            <div className="flex">
              <input
                onChange={() => SetSpecialChar((prev) => !prev)}
                type="checkbox"
                name=""
                id="" />
              <label className="ml-3 text-sky-100">Special Cherecter</label>
            </div>

          </div>

        </div>
      </div>



    </>
  )
}

export default App

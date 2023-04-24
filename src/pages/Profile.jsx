import { getAuth } from 'firebase/auth'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  const auth = getAuth()
  const navigate = useNavigate()
  const [formData,setFormData] = useState({
    name:auth.currentUser.displayName,
    email:auth.currentUser.email

  }) 
  const {name,email} = formData

  const onLogOut= () =>{
    auth.signOut()
    navigate('/')
  }
  
  return (
    <>
      <section className="max-w-6xl mx-auto flex justify-center items-center flex-col">
        <h1 className="text-3xl text-center mt-6 font-bold">My Profile</h1>
        <div className="w-full md:w-[50%] mt-6 px-3">
          <form>
            {/* name input👇 */}
            <input
              type="text"
              id="name"
              value={name}
              disabled
              className="w-full mb-6 px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out"
            />
            {/* email input👇 */}

            <input
              type="email"
              id="email"
              value={email}
              disabled
              className="w-full mb-6 px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out"
            />

            <div className="flex justify-between mb-6 whitespace-nowrap text:sm sm:text-large">
              <p className="flex items-center">
                Do you want to change your name?
                <span className="text-red-500 hover:text-red-700 transition duration-200 ease-in-out cursor-pointer ml-1">
                  Edit
                </span>
              </p>
              <p onClick={onLogOut} className="text-blue-500 hover:text-blue-700 transition duration-200 ease-in-out cursor-pointer">
                Sign Out
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Profile
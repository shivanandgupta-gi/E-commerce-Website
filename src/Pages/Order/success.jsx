import React, { useContext } from 'react'
import { MyContext } from '../../App'
import { useNavigate } from 'react-router-dom'

export default function SuccessOrder() {
  const context = useContext(MyContext)
  const navigate = useNavigate()

  const gotoHome = () => navigate("/")
  const statusCheck = () => navigate("/my-order")

  return (
    <div className="flex items-center justify-center bg-gray-50 pt-8 pb-8">
      <div className="bg-white shadow-lg rounded-2xl p-10 w-[650px] text-center">
        <div className="flex justify-center mb-4">
          <div className="h-30 w-30 rounded-full flex items-center justify-center">
            <img src="/download.png" alt="Success" className="h-20 w-20" />
          </div>
        </div>
        <h2 className="text-gray-700 font-medium mb-1">
          Hey {context?.userData?.name || "User"},
        </h2>
        <h1 className="text-xl font-bold text-gray-900 mb-2">
          Your Order is Confirmed!
        </h1>
        <p className="text-gray-500 text-sm mb-6">
          We'll send you a shipping confirmation email as soon as your order ships.
        </p>

        <div className="flex flex-col items-center space-y-3">
          <button
            type="button"
            className="btn-org btn-md text-white font-medium py-2 px-6 rounded-full"
            onClick={statusCheck}
          >
            CHECK STATUS
          </button>
          <button
            type="button"
            className="btn-org btn-md text-white font-medium py-2 px-6 rounded-full"
            onClick={gotoHome}
          >
            Go To Home Page
          </button>
        </div>
      </div>
    </div>
  )
}

import React from 'react'
import Navbar from "../components/Navbar"
import logo from '../logo.png'
import DeviceSelection from '../components/DeviceSelection'

export default function DeviceSelector() {
  return (
    <main className="w-full">
      <div className="bg-gray-100 dark:bg-gray-800">
        <DeviceSelection />
      </div>
    </main>
  )
}

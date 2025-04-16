// components/ToggleSwitch.tsx
'use client'

import { useState } from 'react'

export default function ToggleSwitch() {
  const [isToggled, setIsToggled] = useState(false)

  return (
    <div className="flex items-center space-x-3">
      <button
        type="button"
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
          isToggled ? 'bg-[#038C8C]' : 'bg-gray-200'
        }`}
        onClick={() => setIsToggled(!isToggled)}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
            isToggled ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
    </div>
  )
}
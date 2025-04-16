// components/NotificationPreferences.tsx
'use client'

import { useState } from 'react'

export default function NotificationPreferences() {
  const [allNotificationsEnabled, setAllNotificationsEnabled] = useState(true)
  const [importantOnly, setImportantOnly] = useState(false)

  return (
    <div className='flex flex-col gap-4'> 
        <div className="flex  gap-3">

                      <input
                type="radio"
                name="all"
                value="all"
                checked={allNotificationsEnabled}
                onChange={() => setAllNotificationsEnabled(true)}
                onClick={() => setImportantOnly(false)}
                className="h-4 w-4 text-black checked:text-black checked:ring-0"
    
              />
              <span className="text-gray-800">Enable for all notification</span>

              </div>
        <div className='flex gap-3'>
              <input
                type="radio"
                name="important"
                value="important"
                checked={importantOnly}
                onChange={() => setImportantOnly(true)}
                onClick={() => setAllNotificationsEnabled(false)}
                className="h-4 w-4 text-black checked:text-black checked:ring-0"
         
    
              />
              <span className="text-gray-800">Enable for Important only</span>
              </div>
    </div>
  )
}
// components/PreferencesSection.tsx
'use client'

import { useState } from 'react'

export default function PreferencesSection() {
  const [selectedLanguage, setSelectedLanguage] = useState('English')
  const [selectedTimezone, setSelectedTimezone] = useState('')
  const [selectedCurrency, setSelectedCurrency] = useState('EGP')

  const languages = ['English', 'Spanish', 'French', 'German', 'Arabic']
  const timezones = [
    'GMT (Greenwich Mean Time)',
    'EST (Eastern Standard Time)',
    'CST (Central Standard Time)',
    'PST (Pacific Standard Time)',
    'CET (Central European Time)',
    'IST (Indian Standard Time)'
  ]
  const currencies = ['EGP', 'USD', 'EUR', 'GBP']

  return (
    <div className="space-y-4 md:space-y-6">
      {/* Preferred Languages Section */}
      <div className="space-y-3 md:space-y-4">
        <h3 className="text-black font-medium text-sm md:text-base">Preferred Languages and Preferences</h3>
        
        <div className="flex flex-wrap gap-3 md:gap-4 bg-[#E0F3F180] rounded-lg p-3 md:p-4">
          {languages.map((language) => (
            <label 
              key={language} 
              className="flex items-center space-x-2 cursor-pointer group flex-shrink-0"
            >
              <input
                type="radio"
                name="language"
                value={language}
                checked={selectedLanguage === language}
                onChange={() => setSelectedLanguage(language)}
                className="h-3 w-3 md:h-4 md:w-4 text-black checked:text-black checked:ring-0"
              />
              <span className="text-black text-sm md:text-base">{language}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Timezone Section */}
      <div className="space-y-2 w-full md:w-80">
        <h3 className="text-[#038C8C] font-bold text-sm md:text-base">Select your timezone</h3>
        <select
          value={selectedTimezone}
          onChange={(e) => setSelectedTimezone(e.target.value)}
          className="w-full text-gray-600 text-sm md:text-base p-2 focus:outline-none focus:border-black bg-white rounded-sm border"
        >
          <option value="" disabled>Select timezone</option>
          {timezones.map((tz) => (
            <option key={tz} value={tz}>{tz}</option>
          ))}
        </select>
      </div>

      {/* Preferred Currency Section */}
      <div className="space-y-2 w-full md:w-80">
        <h3 className="text-[#038C8C] font-bold text-sm md:text-base">Preferred currency</h3>
        <select
          value={selectedCurrency}
          onChange={(e) => setSelectedCurrency(e.target.value)}
          className="w-full text-gray-600 text-sm md:text-base p-2 focus:outline-none focus:border-black bg-white rounded-sm border"
        >
          {currencies.map((currency) => (
            <option key={currency} value={currency}>{currency}</option>
          ))}
        </select>
      </div>
    </div>
  )
}
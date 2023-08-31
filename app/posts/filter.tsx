'use client'

import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Category } from '@/types/posts';

interface FilterProps {
  selectedOption?: string | undefined
  options: Category[]
}

const Filter: React.FC<FilterProps> = ({ selectedOption = 'all', options }) => {
  const router = useRouter()
  const initialRender = useRef(true)
  const [selectedValue, setSelectedValue] = useState(selectedOption)

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false
      return
    }

    if (selectedValue === 'all') {
      router.push(`/posts`)
    } else {
      router.push(`/posts?category=${selectedValue}`)
    }
  }, [selectedValue]);

  return (
    <select
      value={selectedValue}
      onChange={(e) => setSelectedValue(e.target.value)}
    >
      <option value={'all'}>All</option>
      {options && options.map((option, index) => (
        <option key={index} value={option.id}>
          {option.name}
        </option>
      ))}
    </select>
  )
}

export default Filter;
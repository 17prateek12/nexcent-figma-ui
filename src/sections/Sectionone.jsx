import {Component2} from '@/components/Component2'
import {Hero} from '@/components/Hero'
import {Component1} from '@/components/Component1'
import {Component3} from '@/components/Component3'
import React from 'react'

const Sectionone = () => {
  return (
    <div>
        <Hero />
        <Component1 />
        <Component2 />
        <Component3 />
    </div>
  )
}

export {Sectionone}
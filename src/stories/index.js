import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Calendar from '../index'
import '../../style/index.css'

const isWeekDay = (d) => {
  return d.day() !== 0 && d.day() !== 6;
}

storiesOf('Calendar', module)
  .add('default view', () => {
    return (
      <div>
        <Calendar format="DD/MM/YYYY" date="01/01/2016" />
      </div>
    )
  })
  .add('disabled weekend view', () => {
    return (
      <div>
        <Calendar format="DD/MM/YYYY" isValidDate={isWeekDay} />
      </div>
    )
  })

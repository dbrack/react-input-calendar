import React from 'react'
import 'moment-range'

export default function Cell({ value, classes, onCellClick }) {
  const _classes = `${classes} cell`
  return <div className={_classes} onClick={onCellClick}>{value}</div>
}

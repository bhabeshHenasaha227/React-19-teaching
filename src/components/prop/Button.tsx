import React from 'react'

export default function Button({
  label,
  handleClick,
}: {
  label: string;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <div>
      <button onClick={handleClick}>{label}</button>
    </div>
  )
}

import React from 'react'

interface IProps {
  position:
    | 'top-left'
    | 'top-center'
    | 'top-right'
    | 'center-left'
    | 'center-center'
    | 'center-right'
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right'
    | 'top'
    | 'bottom'
  className?: string
}

export const BgcGradients: React.FC<IProps> = ({ position, className }) => {
  const positions = {
    'top-left': 'inset-x-0 -top-40 sm:-top-80',
    'top-center': 'inset-x-0 top-0 left-[calc(50%-11rem)]',
    'top-right': 'inset-x-0 top-0 right-0',
    'center-left': 'inset-x-0 top-1/2 left-0 -translate-y-1/2',
    'center-center':
      'inset-x-0 top-1/2 left-[calc(50%-11rem)] -translate-y-1/2',
    'center-right': 'inset-x-0 top-1/2 right-0 -translate-y-1/2',
    'bottom-left': 'inset-x-0 bottom-0 left-0',
    'bottom-center': 'inset-x-0 bottom-0 left-[calc(50%-11rem)]',
    'bottom-right':
      'inset-x-0 top-[calc(100%-13rem)] sm:top-[calc(100%-30rem)]',
    top: 'inset-x-0 -top-40 sm:-top-80',
    bottom: 'inset-x-0 top-[calc(100%-13rem)] sm:top-[calc(100%-30rem)]',
  }

  const shapes = {
    top: {
      left: 'left-[calc(50%-11rem)] sm:left-[calc(50%-30rem)] rotate-[30deg]',
      width: 'w-[36.125rem] sm:w-[72.1875rem]',
      clipPath:
        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
    },
    bottom: {
      left: 'left-[calc(50%+3rem)] sm:left-[calc(50%+36rem)]',
      width: 'w-[36.125rem] sm:w-[72.1875rem]',
      clipPath:
        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
    },
  }

  const isTopOrBottom = position === 'top' || position === 'bottom'
  const selectedShape = isTopOrBottom ? shapes[position] : shapes.top

  return (
    <div
      className={`absolute ${positions[position]} -z-10 transform-gpu overflow-hidden blur-3xl ${className}`}
      aria-hidden='true'
    >
      <div
        className={`relative ${selectedShape.left} aspect-[1155/678] ${selectedShape.width} -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30`}
        style={{ clipPath: selectedShape.clipPath }}
      />
    </div>
  )
}

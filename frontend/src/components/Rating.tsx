import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'

type Props = {
  value: number
  number: number
  color: string
}

const Rating = ({ value, number, color }: Props) => {
  return (
    <div className='rating'>
      {[...Array(5)].map((_, i) => {
        return (
          <span className={'text-' + color} key={i}>
            {value >= i + 1 ? (
              <FaStar />
            ) : value >= i + 0.5 ? (
              <FaStarHalfAlt />
            ) : (
              <FaRegStar />
            )}
          </span>
        )
      })}
      <span className='ms-2'>
        <small>
          {number} review{number && 's'}
        </small>
      </span>
    </div>
  )
}

Rating.defaultProps = {
  color: 'warning',
}

export default Rating

import { Pagination } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

type Props = { page: number; pages: number; search?: string }

export default function PaginationBs({ page, pages, search }: Props) {
  // console.log(page, pages, search)

  const navigate = useNavigate()

  const onClickHandler = (i: number) => {
    navigate('/page/' + i + '?search=' + search)
  }

  return (
    <div>
      <Pagination>
        <Pagination.Prev />
        {Array.from(Array(Math.min(5, pages))).map((_, i) => {
          return (
            <Pagination.Item
              key={i}
              active={i + 1 === page}
              onClick={() => onClickHandler(i + 1)}
            >
              {i + 1}
            </Pagination.Item>
          )
        })}
        <Pagination.Next />
      </Pagination>
    </div>
  )
}

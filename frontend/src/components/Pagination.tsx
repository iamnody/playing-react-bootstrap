import { Pagination } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

type Props = { page: number; pages: number; search?: string }

export default function PaginationBs({ page, pages, search = '' }: Props) {
  const navigate = useNavigate()

  const maxItems = 5 // Maximum number of pagination items to display
  const halfMaxItems = Math.floor(maxItems / 2)

  // Calculate the start and end index for pagination items
  let start = Math.max(page - halfMaxItems, 1)
  let end = Math.min(start + maxItems - 1, pages)

  // Adjust the start and end index when close to the last page
  if (end === pages) {
    start = Math.max(pages - maxItems + 1, 1)
  }

  const onClickHandler = (i: number) => {
    navigate('/page/' + i + (search ? '?search=' + search : ''))
  }

  return (
    <Pagination>
      {page > 1 && <Pagination.Prev onClick={() => onClickHandler(page - 1)} />}
      {Array.from({ length: end - start + 1 }, (_, i) => start + i).map((i) => (
        <Pagination.Item
          key={i}
          active={i === page}
          onClick={() => onClickHandler(i)}
        >
          {i}
        </Pagination.Item>
      ))}
      {page < pages && (
        <Pagination.Next onClick={() => onClickHandler(page + 1)} />
      )}
    </Pagination>
  )
}

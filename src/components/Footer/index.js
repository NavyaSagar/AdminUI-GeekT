import Pagination from '../Pagination'

import {
  DeleteButton,
  DeleteText,
  FooterContainer,
  PaginationContainer,
} from './styledComponents'

const Footer = props => {
  const {
    usersPerPage,
    totalUsers,
    paginate,
    previousPage,
    nextPage,
    onClickFirstPage,
    onClickLastPage,
    deleteUserById,
  } = props

  return (
    <FooterContainer>
      <DeleteButton onClick={() => deleteUserById()}>
        <DeleteText>DeleteSelected</DeleteText>
      </DeleteButton>
      <PaginationContainer>
        <Pagination>
          usersPerPage={usersPerPage}
          totalUsers={totalUsers}
          paginate={paginate}
          previousPage={previousPage}
          nextPage={nextPage}
          onClickFirstPage={onClickFirstPage}
          onClickLastPage={onClickLastPage}
        </Pagination>
      </PaginationContainer>
    </FooterContainer>
  )
}

export default Footer

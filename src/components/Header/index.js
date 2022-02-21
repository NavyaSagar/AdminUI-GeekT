import {
  HeaderContainer,
  HeaderCheckboxInput,
  HeaderContentContainer,
  NameHeading,
  EmailHeading,
  RoleHeading,
  ActionHeading,
} from './styledComponents'

const Header = props => {
  const {onChangeFunction, allChecked} = props

  return (
    <HeaderContainer>
      <HeaderCheckboxInput
        onChange={e => onChangeFunction(e)}
        type="checkbox"
        name="Header"
        checked={allChecked}
        value="Header0"
      />
      <HeaderContentContainer>
        <NameHeading>Name</NameHeading>
        <EmailHeading>Email</EmailHeading>
        <RoleHeading>Role</RoleHeading>
        <ActionHeading>Action</ActionHeading>
      </HeaderContentContainer>
    </HeaderContainer>
  )
}

export default Header

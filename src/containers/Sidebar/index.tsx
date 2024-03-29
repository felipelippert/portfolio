import Avatar from '../../components/Avatar'
import Paragraph from '../../components/Paragraph'
import Title from '../../components/Title'
import { Description, ThemeButton, SidebarContainer } from './styles'

type Props = {
  changeTheme: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Title fontSize={20}>Felipe Valcarenghi Lippert</Title>
      <Paragraph type="secondary" fontSize={16}>
        felipelippert
      </Paragraph>
      <Description type="main" fontSize={12}>
        Engenheiro Front-end
      </Description>
      <ThemeButton onClick={props.changeTheme}>Change theme</ThemeButton>
    </SidebarContainer>
  </aside>
)

export default Sidebar

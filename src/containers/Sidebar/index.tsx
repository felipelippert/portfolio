import Avatar from '../../components/Avatar'
import Paragraph from '../../components/Paragraph'
import Title from '../../components/Title'
import { Description, ThemeButton, SidebarContainer } from './styles'

const Sidebar = () => (
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
      <ThemeButton>Change theme</ThemeButton>
    </SidebarContainer>
  </aside>
)

export default Sidebar

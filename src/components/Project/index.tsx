import Paragraph from '../Paragraph'
import Title from '../Title'
import { Card, LinkButton } from './styles'

const Project = () => {
  return (
    <Card>
      <Title>Project ToDo List</Title>
      <Paragraph type="secondary">Todo list made with VueJS</Paragraph>
      <LinkButton>Open</LinkButton>
    </Card>
  )
}

export default Project

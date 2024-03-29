import Title from '../../components/Title'
import Paragraph from '../../components/Paragraph'
import { GitHubSection } from './styles'

const About = () => (
  <section>
    <Title fontSize={16}>About me</Title>
    <Paragraph type="main">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
      molestiae voluptas, dolore a quas inventore, ad doloremque natus, est
      dicta suscipit corrupti consequatur aliquid sapiente? Voluptatem veniam
      tempora ullam molestiae.
    </Paragraph>
    <GitHubSection>
      <img src="https://github-readme-stats.vercel.app/api?username=felipelippert&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=felipelippert&layout=compact&langs_count=7&theme=dracula" />
    </GitHubSection>
  </section>
)

export default About

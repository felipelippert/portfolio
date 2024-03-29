import { ThemeProvider } from 'styled-components'
import Sidebar from './containers/Sidebar'
import About from './containers/About'
import GlobalStyle, { Container } from './styles'
import Projects from './containers/Projects'
import LightTheme from './themes/light'
import DarkTheme from './themes/dark'
import { useState } from 'react'

function App() {
  const [isThemeDark, setIsThemeDark] = useState(false)

  function changeTheme() {
    setIsThemeDark(!isThemeDark)
  }

  return (
    <ThemeProvider theme={isThemeDark ? DarkTheme : LightTheme}>
      <GlobalStyle />
      <Container>
        <Sidebar changeTheme={changeTheme} />
        <main>
          <About />
          <Projects />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App

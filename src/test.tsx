import styled from 'styled-components'

type ButtonProps = {
  main: boolean
  fontSize?: string
}

const Button = styled.button<ButtonProps>`
  background-color: ${(props) => (props.main ? 'green' : 'blue')};
  font-size: ${(props) => props.fontSize || '16px'};
`

const ButtonDanger = styled(Button)`
  background-color: red;
  color: #fff;

  span {
    text-decoration: line-through;
  }
`

function Test() {
  return (
    <>
      <Button main>Send</Button>
      <Button fontSize="14px" main={false}>
        Cancel
      </Button>
      <ButtonDanger as="a" main>
        <span>Do Not Click Here</span>
      </ButtonDanger>
    </>
  )
}

export default Test

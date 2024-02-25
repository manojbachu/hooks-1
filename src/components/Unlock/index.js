import {MainContainer, Figure, Image, LockStatus} from './styledComponents'

const Unlock = () => (
  <MainContainer>
    <Figure>
      <Image
        src="https://assets.ccbp.in/frontend/hooks/lock-img.png"
        alt="lock"
      />
      <LockStatus>Your Device is Locked</LockStatus>
    </Figure>
  </MainContainer>
)

export default Unlock

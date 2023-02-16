import {Component} from 'react'
import {
  CustomForm,
  CustomContainer,
  Container,
  Heading,
  LabelHeading,
  InputHeading,
  Paragraph,
  CustomButton,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here
class MemeGenerator extends Component {
  state = {
    imageUrl: '',
    topText: '',
    bottomText: '',
    fontSize: '',
    status: '',
  }

  submitForm = event => {
    event.preventDefault()
    this.setState({status: true})
  }

  renderMeme = () => {
    console.log('hi')
    const {imageUrl, topText, bottomText, fontSize} = this.state
    return (
      <CustomContainer data-testid="meme" backgroundImage={imageUrl}>
        <Paragraph outline fontSize={fontSize}>
          {topText}
        </Paragraph>
        <Paragraph outline fontSize={fontSize}>
          {bottomText}
        </Paragraph>
      </CustomContainer>
    )
  }

  memeGenerator = () => {
    console.log('')
    return (
      <CustomForm onSubmit={this.submitForm}>
        <Heading>Meme Generator</Heading>
        <LabelHeading htmlFor="image">Image Url</LabelHeading>
        <InputHeading
          type="text"
          id="image"
          placeholder="Enter the Image URL"
          onChange={this.getImagUrl}
        />
        <LabelHeading htmlFor="top-text">Top Text</LabelHeading>
        <InputHeading
          type="text"
          id="top-text"
          placeholder="Enter the Top Text"
          onChange={this.getTopText}
        />
        <LabelHeading htmlFor="bottom-text">Bottom Text</LabelHeading>
        <InputHeading
          type="text"
          id="bottom-text"
          placeholder="Enter the Bottom Text"
          onChange={this.getBottomText}
        />
        <LabelHeading htmlFor="font-size">Font Size</LabelHeading>
        <select onChange={this.getFontSize} id="font-size">
          {fontSizesOptionsList.map(font => (
            <option key={font.optionId} value={font.displayText}>
              {font.displayText}
            </option>
          ))}
        </select>
        <CustomButton type="submit">Generate</CustomButton>
      </CustomForm>
    )
  }

  getImagUrl = event => {
    this.setState({imageUrl: event.target.value})
  }

  getTopText = event => {
    this.setState({topText: event.target.value})
  }

  getBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  getFontSize = event => {
    this.setState({fontSize: event.target.value})
  }

  render() {
    const {status} = this.state
    return (
      <Container>
        {this.memeGenerator()}
        {status ? this.renderMeme() : null}
      </Container>
    )
  }
}
export default MemeGenerator

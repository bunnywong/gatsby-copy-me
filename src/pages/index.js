import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import {CopyToClipboard} from 'react-copy-to-clipboard';

class IndexPage extends React.Component {
  state = {
    value: typeof window !== 'undefined' ? window.localStorage.getItem('value') || '': '',
    copied: false,
  }
  onChange = ({target: {value}}) => {
    this.setState({value, copied: false})
    window.localStorage.setItem('value', value)
  }
  onClick = ({target: {innerHTML}}) => {
    const value = this.state.value
    window.localStorage.setItem('value', value)
  }
  onCopy = () => {
    this.setState({copied: true})
  }
  render() {
    return (
      <Layout>
        <SEO title='Home' />

        <section className="section">
          <input
            onChange={this.onChange}
            value={this.state.value}
            />
          <CopyToClipboard
            onCopy={this.onCopy}
            options={{message: 'Whoa!'}}
            text={this.state.value}>
            <button onClick={this.onClick}>Copy</button>
          </CopyToClipboard>
        </section>

        <section className="section">
          {this.state.copied ? <span style={{color: 'green'}}>Copied.</span> : null}
        </section>

      </Layout>
    )
  }
}
export default IndexPage

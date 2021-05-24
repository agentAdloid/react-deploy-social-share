import React,{Component} from 'react';
import SocialShare from './components/SocialShare';
import './App.css';
class App extends Component {

  state = {
    url: 'Github.com',
    title: 'Github',
    fbShareCount: 0,
    whatsAppShareCount: 0,  
  }
  handleChangeUrl=(event) =>{
    this.setState({url: event.target.value});
  }
  handleChangeTitle=(event) =>{
    this.setState({title: event.target.value});
  }
  render() {
    return (
      <div className="App">
        <text>Share with friends!</text>
        <div className="Form">
          <input type="text" onChange={this.handleChangeTitle} placeholder="Title"/>
          <input type="text" onChange={this.handleChangeUrl} placeholder="url"/>
        </div>
        <SocialShare title={this.state.title} url={this.state.url}/>
      </div>
    );
  }
}

export default App;
import React, {Component} from 'react';
import Article from './javascript/components/article/Article';
import articlesData from './javascript/data/articlesData';
import logo from './images/logo.png';
import Modal from './javascript/components/modal/Modal';
import './styles/App.scss';

const articlesDataArray = Array.from(articlesData);

export default class App extends Component {
    state = {
        modalToShow: null
    };

    openModal = (modalToShow) => {
        this.setState({modalToShow})
    };

    closeModal = () => {
        this.setState({modalToShow: null})
    };
  render() {
      const {modalToShow} = this.state;
      console.log(articlesDataArray);
    return (
      <div className="app">
        <header className="appHeader">
          <img src={logo} className="logo" alt="logo" />
        </header>
        <div className="articlesContainer">
            {articlesDataArray.map(article => <Article data={article[1]} key={article[0]} openModal={this.openModal} />)}
        </div>
          {modalToShow ? <Modal close={this.closeModal} id={modalToShow} /> : null}
      </div>
    );
  }
}

import React, {Component} from 'react';

import '../../../styles/article/article.scss';

export default class Article extends Component {
    open = () => {
        const {data, openModal} = this.props;
        openModal(data.id);
    };

    render () {
        const {data} = this.props;
        return (
        <div className="container">
            <img src={data.image} alt={data.title} className="articleImg" />
            <div className="articleTextContainer">
                <h1 className="articleTitle">{data.title}</h1>
                <p>{data.content}</p>
                <button onClick={this.open} className="articleBtn">{data.modal.name}</button>
            </div>
        </div>
    );}
}

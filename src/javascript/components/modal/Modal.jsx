import React, {Component} from 'react';
import articlesData from '../../data/articlesData';
import '../../../styles/modal/modal.scss';

export default class Modal extends Component {
    constructor(props) {
        super(props);
        document.addEventListener('keyup', this.closeEsc);
    }

    componentWillUnmount() {
        document.removeEventListener('keyup', this.closeEsc);
    }

    closeEsc = (event) => {
        if (event.key === 'Escape') {
            this.props.close();
        }
    };

    render() {
        const {close, id} = this.props;
        const modalData = articlesData.get(id).modal;
        return (
            <div className="modalContainer" aria-modal={true}>
                <div className="modalContent">
                    <header className="modalHeader">
                        <h1 className="modalTitle">{`${modalData.name} - ${modalData.title}`}</h1>
                        <button type="button" onClick={close} className="closeBtn">x</button>
                    </header>
                    <p>{modalData.content}</p>
                </div>
                <div onClick={close} />
            </div>
        )
    }
}

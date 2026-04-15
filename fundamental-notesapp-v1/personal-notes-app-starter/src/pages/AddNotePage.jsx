import React from "react";
import parser from "html-react-parser";

class AddNotePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
        };
    }

    onTitleChangeHandler = (event) => {
        this.setState(() => {
            return {
                title: event.target.value,
            };
        });
    }

    onBodyChangeHandler = (event) => {
        this.setState(() => {
            return {
                body: parser(event.target.innerHTML),
            };
        });
    }

    onSubmitHandler = () => {
        this.props.onAdd(this.state.title, this.state.body);
        this.props.navigate('/');
    }

    render() {
        return (
            <div className="add-new-page">
                <div className="add-new-page__input">
                    <input type="text" className="add-new-page__input__title" placeholder="Judul" value={this.state.title} onChange={this.onTitleChangeHandler} />
                    <div className="add-new-page__input__body" data-placeholder="Isi Catatan" contentEditable="true" onInput={this.onBodyChangeHandler} />
                </div>
                <div className="add-new-page__action">
                    <button className="action" onClick={this.onSubmitHandler}>
                        <span className="material-symbols-outlined">save</span>
                    </button>
                </div>
            </div>
        );
    }
}

export default AddNotePage;
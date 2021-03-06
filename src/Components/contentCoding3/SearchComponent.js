import React, { Component } from 'react';
import '../../conmonCSS/cssCoding3.css'


export class SearchComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valueSearch: '',
        }
    }

    handleChangeSearch = (event) => {
        this.setState({ valueSearch: event.target.value });
    }

    handleSubmitSearch = async (value) => {
        const { item, callBackSearch } = await this.props;
        if (value != "") {
            let res = item.filter(x => x.name.toString().includes(value.toString()))
            callBackSearch(res);
        }
        else {
            alert("Not Blank!")
        }


    }

    render() {
        return (
            <div style={{ marginTop: 10, marginBottom: 10 }}>
                <input
                    type="text"
                    placeholder="Search by name!"
                    className="frameSearch"

                    value={this.state.valueSearch}
                    onChange={this.handleChangeSearch.bind(this)} />

                <button
                    className="frameButton"
                    onClick={() => this.handleSubmitSearch(this.state.valueSearch)}
                >
                    Search </button>
            </div>
        )
    }
}
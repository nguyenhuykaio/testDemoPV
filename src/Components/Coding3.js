import React, { Component } from 'react';
import '../conmonCSS/cssCoding3.css'
import { SearchComponent } from './contentCoding3/SearchComponent';
import { MainViewComponent } from './contentCoding3/MainViewComponent';
import { ListViewComponent } from './contentCoding3/ListViewComponent';

export class Coding3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list_data: '',
            videoId: '',
            resSearch: ''
        }
    }

    componentWillMount = async () => {
        await this.getData();
        await this.getVideoId();
    }

    getData = async () => {
        await this.setState({ list_data: DATA })
    }

    getVideoId = async (data) => {
        await this.setState({
            videoId: data
        })
    }

    getResultSearch = async (dataSearch) => {
        await this.setState({ resSearch: dataSearch })
          
    }

    render() {
        return (
            <div className="frameBody">
                <div align="center">
                    <SearchComponent item={this.state.list_data} callBackSearch={this.getResultSearch.bind(this)} />
                </div>

                <div className="frameMainList">
                    <div className="frameMain">
                        <MainViewComponent videoId={this.state.videoId} resSearch={this.state.resSearch}/>
                    </div>
                    <div className="frameList">
                        <ListViewComponent item={this.state.list_data} callBackVideoId={this.getVideoId.bind(this)} />
                    </div>
                </div>
            </div>
        )
    }
}

const DATA = [
    {
        id: 1,
        name: 'Cho tui xin một vé đi tuổi thơ!',
        videoId: 'I0y45gN36Vk',
    },
    {
        id: 2,
        name: 'Nhạc không lời tập trung học tập',
        videoId: '4P0R9dUJ370',
    },
    {
        id: 3,
        name: 'Cho tui xin một vé đi tuổi thơ!',
        videoId: 'I0y45gN36Vk',
    },
    {
        id: 4,
        name: 'Cho tui xin một vé đi tuổi thơ!',
        videoId: 'I0y45gN36Vk',
    },
    {
        id: 5,
        name: 'Nhạc không lời tập trung học tập',
        videoId: '4P0R9dUJ370',
    },
    {
        id: 6,
        name: 'Cho tui xin một vé đi tuổi thơ!',
        videoId: 'I0y45gN36Vk',
    },
]
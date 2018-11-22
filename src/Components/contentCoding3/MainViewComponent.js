import React, { Component } from 'react';
import '../../conmonCSS/cssCoding3.css'
import YouTube from 'react-youtube'

export class MainViewComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    opts = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 1
        }
    };


    render() {
        return (

            <div>
                {
                    this.props.videoId ?
                        <YouTube
                            videoId={this.props.videoId}
                            opts={this.opts}
                            className="video"
                        /> :
                        <p>No video select</p>
                }

            </div>
        )
    }
}
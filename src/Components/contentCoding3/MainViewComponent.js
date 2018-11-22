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

    onPlay(event) {
        event.target.pauseVideo();
    }


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
                        ""
                }
                {
                    this.props.resSearch ?

                        this.props.resSearch.map(item =>
                            <div key={item.id}>
                                <YouTube
                                    videoId={item.videoId}
                                    opts={this.opts}
                                    onPlay={this.onPlay}
                                    className="video"
                                />
                                <p className="frameName">{item.name}</p>
                            </div>
                        )
                        :

                        <p>No video</p>
                }

            </div>
        )
    }
}
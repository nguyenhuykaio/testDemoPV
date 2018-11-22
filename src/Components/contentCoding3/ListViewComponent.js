import React, { Component } from 'react';
import '../../conmonCSS/cssCoding3.css'
import YouTube from 'react-youtube'
export class ListViewComponent extends Component {
    constructor(props) {
        super(props);
        this.data = this.props.item;     
    }

    handleGetId = (videoId) => {
        this.props.callBackVideoId(videoId);
    }

    onPlay(event) {
        event.target.pauseVideo();
    }

    render() {
        return (
            <div className="frameContentList">
                {this.data.map(item =>
                    <a key={item.id} style={{ flexDirection: 'row', display: 'flex', marginTop: 10 }} onClick={() => this.handleGetId(item.videoId)}>
                        <YouTube
                            videoId={item.videoId}
                            opts={this.opts}
                            onPlay={this.onPlay}
                            className="videoList"
                        />
                        <p className="frameName">{item.name}</p>
                    </a>
                )}
            </div>
        )
    }
}
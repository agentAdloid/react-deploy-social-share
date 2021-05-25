import React, { Component } from "react";
import {
  FacebookShareCount,
  FacebookShareButton,
  WhatsappShareButton,
  FacebookIcon,
  WhatsappIcon,
  EmailShareButton,
  EmailIcon,
} from "react-share";

import "./SocialShare.css";

class Demo extends Component {
  render() {
    const shareUrl = this.props.url;
    const title = this.props.title;

    return (
      <div className="Demo__container">
        <div className="Demo__some-network">
          <EmailShareButton
            url={shareUrl}
            title={title}
            seprator="::"
            className="Demo__some-network__share-button"
            subject={this.props.subject}
          >
            <EmailIcon size={32} round />
          </EmailShareButton>
        </div>
        <div className="Demo__some-network">
          <FacebookShareButton
            url={shareUrl}
            quote={title}
            className="Demo__some-network__share-button"
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>

          <div>
            <FacebookShareCount
              url={shareUrl}
              className="Demo__some-network__share-count"
            >
              {(count) => count}
            </FacebookShareCount>
          </div>
        </div>

        <div className="Demo__some-network">
          <WhatsappShareButton
            url={shareUrl}
            title={title}
            separator=":: "
            className="Demo__some-network__share-button"
          >
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>

          <div className="Demo__some-network__share-count">&nbsp;</div>
        </div>
      </div>
    );
  }
}

export default Demo;

import React, { Component } from 'react';

interface IPortfolioItem {
  image: string;
  header: string;
  link: string;
}

export class PortfolioItem extends Component<IPortfolioItem> {
  handleClick = () => {
    window.location.href = this.props.link;
  };

  render() {
    const { image, header } = this.props;

    return (
      <div className="portfolio-galery-item" onClick={this.handleClick}>
        <img src={image} alt="portfolio__item" />
        <p className="item-header">{header}</p>
      </div>
    );
  }
}

export default PortfolioItem;

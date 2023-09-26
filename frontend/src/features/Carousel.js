import React, { Component } from 'react';

class Carousel1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
  }

  nextSlide = () => {
    this.setState((prevState) => ({
      currentIndex: (prevState.currentIndex + 1) % this.props.images.length,
    }));
  };

  prevSlide = () => {
    this.setState((prevState) => ({
      currentIndex: (prevState.currentIndex - 1 + this.props.images.length) % this.props.images.length,
    }));
  };

  render() {
    const { images } = this.props;
    const { currentIndex } = this.state;

    return (
      <div className="relative w-full">
        <div className="overflow-hidden w-full">
          <img
            src={images[currentIndex]}
            alt="Carousel slide"
            className="w-full transition-all duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          />
        </div>
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full flex justify-between">
          <button onClick={this.prevSlide} className="text-white px-4 py-2 bg-gray-800 rounded-full">
            Previous
          </button>
          <button onClick={this.nextSlide} className="text-white px-4 py-2 bg-gray-800 rounded-full">
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default Carousel1;

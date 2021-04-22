import graphic1 from './ticket-listing-ex.jpg';
import graphic2 from './los-hombres-g.jpg';
import graphic3 from './jazz-aspen.jpg';
import graphic4 from './maren-morris.jpg';
import './App.css';
import React from 'react';

const goodieMob = {graphicURL: graphic1, graphicColor: "#000000", month: "April", day: "24", year: "2021", dayOfWeek: "Saturday", time: "20", venue: "The New Parish", location: "Oakland, CA", startPrice: "86"}
const hombres = {graphicURL: graphic2, graphicColor: "#271513", month: "June", day: "6", year: "2021", dayOfWeek: "Sunday", time: "19", venue: "Del Mar Fairgrounds", location: "Del Mar, CA", startPrice: "101"}
const austin = {graphicURL: graphic3, graphicColor: "#385eb3", month: "September", day: "4", year: "2021", dayOfWeek: "Saturday", time: "13", venue: "Snowmass Village at Town Park", location: "Snowmass Village, CO", startPrice: "295"}
const maren = {graphicURL: graphic4, graphicColor: "#26a5d8", month: "May", day: "1", year: "2021", dayOfWeek: "Saturday", time: "23", venue: "Tuscaloosa Ampitheater", location: "Tuscaloosa, AL", startPrice: "57"}

function App() {
  return (
    <div className="root">
      <ListingUI event={goodieMob}/>
      <ListingUI event={maren}/>
      <ListingUI event={hombres}/>
      <ListingUI event={austin}/>
    </div>
  );
}

// Event props: graphic url, graphic color, day, month, year, day of week, time, venue, location, start price
class ListingUI extends React.Component {
  render() {
    return (
      <div className="outer">
        <div className="wrapper">
          <div className="ticket-bkgd" style={{backgroundColor: this.props.event.graphicColor}}></div>
          <img src={this.props.event.graphicURL} className="graphic" alt="graphic"/>
          <div className="date-graphic">
            <p className="month"><strong>{this.props.event.month.substring(0,3)}</strong></p>
            <hr/>
            <p className="day">{this.props.event.day}</p>
          </div>
          <div className="info">
            <p id="full-date">{this.props.event.month} {this.props.event.day}<sup>{parseInt(this.props.event.day) % 10 === 1 ? "st": (parseInt(this.props.event.day) % 10 === 2 ? "nd": "th")}</sup>, {this.props.event.year}</p>
            <p>{this.props.event.dayOfWeek}&nbsp;&nbsp;<span className="mid-break">|</span>&nbsp;&nbsp;{this.props.event.time % 12 >= 0 ? (this.props.event.time % 12 === 0 ? (this.props.event.time === 24 || this.props.event.time === 0 ? "12AM": "12PM"): this.props.event.time % 12) + "PM": this.props.event.time + "AM"}</p>
            <p>{this.props.event.venue}</p>
            <p>{this.props.event.location}</p>
          </div>
          <button className="btn">
            <div className="btn-grid">
              <p className="start-from">Tickets start at:</p>
              <span className="cost">${this.props.event.startPrice}</span>
            </div>
          </button>
        </div>
      </div>
    );
  }
}

export default App;

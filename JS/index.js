require('../CSS/input.scss');

var React = require('react');
var ReactDOM = require('react-dom');


// OLD REACT CODE

// // Components
// var CamperTableHead = React.createClass({
//   sortChoice30: function() {
//     this.props.onThirtyClick();
//   },
//   sortChoiceAt: function() {
//     this.props.onAllTimeClick();
//   },
//   render: function() {
//     var btn30Caret = this.props.thirtySort ? <i className="fa fa-caret-down"></i> : <i></i>;
//     var btnATCaret = this.props.allTimeSort ? <i className="fa fa-caret-down"></i> : <i></i>;
//     return (
//       <thead>
//         <tr>
//           <th className="title">Rank</th>
//           <th className="title">Camper</th>
//           <th className="numHead"><button onClick={this.sortChoice30} className="btn btn-default">Last 30 Days{btn30Caret}</button></th>
//           <th className="numHead"><button onClick={this.sortChoiceAt} className="btn btn-default">All Time{btnATCaret}</button></th>
//         </tr>
//       </thead>
//     );
//   }
// });

// var CamperTableRow = React.createClass({
//   render: function() {
//     return (
//       <tr>
//         <td>{this.props.rank}</td>
//         <td><img src={this.props.camper.img} /> {this.props.camper.username}</td>
//         <td className="number">{this.props.camper.recent}</td>
//         <td className="number">{this.props.camper.alltime}</td>
//       </tr>
//     );
//   }
// });

// var CamperTableBody = React.createClass({
//   render: function() {
//     var rows = [];
//     var rank = 1;
//     var campers = this.props.thirtySort ? this.props.dataThirty : this.props.dataAllTime;
//     campers.forEach(function(camper) {
//       rows.push(<CamperTableRow camper={camper} rank={rank} key={camper.username} />);
//       rank++;
//     });
//     return (
//       <tbody>{rows}</tbody>
//     );
//   }
// });

// var LeaderTable = React.createClass({
//   getInitialState: function() {
//     return ({
//       dataThirty: [],
//       thirtySort: true,
//       dataAllTime: [],
//       allTimeSort: false
//     });
//   },
//   componentDidMount: function() {
//     $.ajax({
//       url: this.props.url30,
//       dataType: 'json',
//       cache: false,
//       success: function(data) {
//         this.setState({
//           dataThirty: data,
//           thirtySort: true,
//           dataAllTime: [],
//           allTimeSort: false
//         });
//       }.bind(this),
//       error: function(xhr, status, err) {
//         console.error(this.props.url30, status, err.toString());
//       }.bind(this)
//     });
//   },
//   thirtyClick: function() {
//     var tempAllTime = this.state.dataAllTime;
//     $.ajax({
//       url: this.props.url30,
//       dataType: 'json',
//       cache: false,
//       success: function(data) {
//         this.setState({
//           dataThirty: data,
//           thirtySort: true,
//           dataAllTime: tempAllTime,
//           allTimeSort: false
//         });
//       }.bind(this),
//       error: function(xhr, status, err) {
//         console.error(this.props.url30, status, err.toString());
//       }.bind(this)
//     });
//   },
//   allTimeClick: function() {
//     var temp30 = this.state.dataThirty;
//     $.ajax({
//       url: this.props.urlAT,
//       dataType: 'json',
//       cache: false,
//       success: function(data) {
//         this.setState({
//           dataThirty: temp30,
//           thirtySort: false,
//           dataAllTime: data,
//           allTimeSort: true
//         });
//       }.bind(this),
//       error: function(xhr, status, err) {
//         console.error(this.props.url30, status, err.toString());
//       }.bind(this)
//     });
//   },
//   render: function() {
//     return (
//       <table className="table table-responsive">
//         <CamperTableHead
//           thirtySort={this.state.thirtySort}
//           allTimeSort={this.state.allTimeSort}
//           onThirtyClick={this.thirtyClick}
//           onAllTimeClick={this.allTimeClick}
//         />
//         <CamperTableBody
//           campers={this.props.campers}
//           dataThirty={this.state.dataThirty}
//           thirtySort={this.state.thirtySort}
//           dataAllTime={this.state.dataAllTime}
//           allTimeSort={this.state.allTimeSort}
//         />
//       </table>
//     );
//   }
// });

// // Static api call for testing
// /*var CAMPERS = [{"username":"Takumar","img":"https://avatars.githubusercontent.com/u/2951935?v=3","alltime":2685,"recent":438,"lastUpdate":"2016-04-06T22:03:22.271Z"},{"username":"anthonygallina1","img":"https://avatars.githubusercontent.com/u/11003055?v=3","alltime":1090,"recent":336,"lastUpdate":"2016-04-06T21:50:25.795Z"},{"username":"dcnr","img":"https://avatars.githubusercontent.com/u/16109443?v=3","alltime":448,"recent":261,"lastUpdate":"2016-03-05T21:18:51.449Z"},{"username":"bitgrower","img":"https://avatars.githubusercontent.com/u/16696049?v=3","alltime":655,"recent":256,"lastUpdate":"2016-04-03T12:22:52.412Z"},{"username":"h4r1m4u","img":"https://avatars.githubusercontent.com/u/4771847?v=3","alltime":1442,"recent":244,"lastUpdate":"2016-04-02T18:48:33.633Z"},{"username":"BKinahan","img":"https://avatars.githubusercontent.com/u/15965601?v=3","alltime":905,"recent":238,"lastUpdate":"2016-04-02T18:48:54.867Z"},{"username":"cannelflow","img":"https://avatars.githubusercontent.com/u/12219251?v=3","alltime":742,"recent":195,"lastUpdate":"2016-04-03T20:46:39.720Z"},{"username":"CEREBR4L","img":"https://avatars.githubusercontent.com/u/7153918?v=3","alltime":451,"recent":187,"lastUpdate":"2016-04-02T18:48:01.229Z"},{"username":"dhcodes","img":"https://avatars.githubusercontent.com/u/7917512?v=3","alltime":238,"recent":171,"lastUpdate":"2016-04-05T22:47:05.694Z"},{"username":"khaduch","img":"https://avatars.githubusercontent.com/u/1930584?v=3","alltime":353,"recent":167,"lastUpdate":"2016-03-05T20:53:13.637Z"}];
// */

// ReactDOM.render(<LeaderTable
//                url30="https://fcctop100.herokuapp.com/api/fccusers/top/recent"
//                urlAT="https://fcctop100.herokuapp.com/api/fccusers/top/alltime"
//              />, document.getElementById("react-container"));

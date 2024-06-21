import axios from "axios";
import React from "react";

class Allsubscribers extends React.Component {
  constructor() {
    super();
    this.state = {
      subscribers: [],
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://crudcrud.com/api/ea3bb3d113a04cb0af45fdd57e432b54/subscribers"
      )
      .then((res) => {
        this.setState({ subscribers: res.data });
      });
  }
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>S No</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          {this.state.subscribers
            ? this.state.subscribers.map((subscriber, i) => (
                <tr>
                  <td>{++i}</td>
                  <td>{subscriber.username}</td>
                  <td>{subscriber.useremail}</td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    );
  }
}

export default Allsubscribers;

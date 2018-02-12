import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Redeem from 'material-ui/svg-icons/action/redeem';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import ActionInfo from 'material-ui/svg-icons/action/info';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import './style.css';

export default class PaymentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: []};
  }

  componentDidMount() {
    this.UserList();
  }

  UserList() {
    fetch(API_BASE_URL) // see webpack config
      .then((res) => res.json())
      .then((res) => {
        if (Object.keys(res).length > 0) {
          this.setState({data: res});
        }
      });
  }


  debitTransactionItem = () => this.state.data
    .filter(item => item._type === "DebitTransaction")
    .map((item, i) => (
      <ListItem
        primaryText={`${item.amount} ${item.currency}`}
        secondaryText={item.debtorName}
        rightIcon={<ActionInfo color="green"/>}
        key={i}
      />
    ));

  creditTransactionItem = () => this.state.data
    .filter(item => item._type === "CreditTransaction")
    .map((item, i) => (
      <ListItem
        primaryText={`${item.amount} ${item.currency}`}
        secondaryText={item.creditorName}
        leftIcon={<Redeem color="red"/>}
        key={i}
      />
    ));

  isDataEmpty = () => {
    return (this.state.data.length === 0);
  };

  render() {
    return (
      <div>
        {this.isDataEmpty() ? (
          <div className="container">No data from back-end</div>
        ) : (
          <MuiThemeProvider>
            <div className="container">
              <AppBar
                className="list"
                title="My payments"
                iconElementRight={<FlatButton label="Next"/>}
              />
              <List className="list">
                <Subheader>I purchased</Subheader>
                {this.creditTransactionItem()}
              </List>
              <Divider/>
              <List className="list">
                <Subheader>I received</Subheader>
                {this.debitTransactionItem()}
              </List>
            </div>
          </MuiThemeProvider>
        )}
      </div>
    );
  }
}
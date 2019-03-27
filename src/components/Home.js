import React, { Component } from 'react';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: [],
          usernames: [
              {
                  displayName: '',
                  url: ''
              }
          ]
        };
      }
    
      componentDidMount() {
        fetch("https://api.github.com/users")
          .then(res => res.json())
          .then(
            (result) => {
            for (const prop in result) {
                console.log(`${result[prop].url}`);
                this.setState({
                usernames: [
                    {
                        displayName: '${result[prop].login',
                        url: '${result[prop].url',
                    }
                ]
              });
              }
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }

    render() {
      return (
        <div className="Home">
          <header className="App-header">
            <strong>Home</strong>
          </header>
          <div className="container">
            <h2>
                Top 5 Github Users
            </h2>
            <p>
                Tap the username to see more information
            </p>
             this.state.usernames.map((data,i) => <a key={i} href="data">{data}</a>)
          </div>
        </div>
      );
    }
  }


  export default Home;
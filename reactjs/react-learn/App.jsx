import React from 'react';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            data: 
            [
                {
                   "id":1,
                   "name":"Foo",
                   "age":"20"
                },
                    
                {
                   "id":2,
                   "name":"Bar",
                   "age":"30"
                },
                    
                {
                   "id":3,
                   "name":"Baz",
                   "age":"40"
                }
            ]
        }
    }

    render() {
        return (
            <div>
                <Header />
                <Content data={this.state.data} />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <h1>Header</h1>
        );
    }
}

class Content extends React.Component {

    render() {
        var rows = [];
        this.props.data.forEach(function(rowData) {
            rows.push(
                <tr>
                    <td>{rowData.id}</td>
                    <td>{rowData.name}</td>
                    <td>{rowData.age}</td>
                </tr>
            );
        });
        return (
            <div>
            <h1>Content</h1>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
            </div>
        );
    }
}

export default App;
import React from 'react';
class AppPersonTable extends React.Component {
    constructor() {
        super();
        this.persons = [
            {id:1, name: 'JJ'},
            {id:2, name: 'Jai'},
            {id:3, name: 'Jay'},
            {id:4, name: 'JS'}
        ];
    }
    render() {
//        let rows = this.persons.map(person => {
//            return <PersonRow data={person}/>
//        });
//        return (
//            <div>
//                <table> 
//                    <tbody>{rows}</tbody>
//                </table>
//            </div>
//        );
        return (
            <PersonRow data={this.persons}/>
        );
    }
}

class PersonRow extends React.Component {
    render() {
        let persons = this.props.data;
        console.log(persons);
        let personRows = persons.map(person => {
            return (
                <tr>
                    <td> {person.name}</td>
                </tr>
            );
        });
        return (
//            <tr>
//                <td>{this.props.data.name}</td>
//            </tr>
            <table>
                <tbody>
                    {personRows}
                </tbody>
            </table>
        );
    };
}

export default AppPersonTable;
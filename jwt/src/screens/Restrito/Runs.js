import React, { Component } from 'react'
import ActionCreators from '../../redux/actionCreators'
import { connect } from 'react-redux'

import { Table } from 'semantic-ui-react'

class Runs extends Component{
    componentDidMount(){
        this.props.load()
    }
    renderRun(run){
        return (
            <tr>
                <td>
                    {run.friendly_name}
                </td>
                <td>
                    {run.duration}
                </td>
                <td>
                    {run.distance}
                </td>
                <td>
                    {run.created}
                </td>
            </tr>
        )
    }
    
    render() {
        const run = {
            friendly_name: 'Corrida teste',
            duration: 100,
            distance: 100,
            created: '2018-01-01 00:00:00'
        }
        return (
            <div>
                <h1>Runs</h1>
                <button onClick={() => this.props.create(run)}>Create</button>
                <Table>
                    { this.props.runs.data.map(this.renderRun)}
                </Table>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        runs: state.runs
    }
}

const mapDispatchToProps = dispatch => {
    return {
        load: () => dispatch(ActionCreators.getRunsRequest()),
        create: (run) => dispatch(ActionCreators.createRunRequest(run))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Runs) 
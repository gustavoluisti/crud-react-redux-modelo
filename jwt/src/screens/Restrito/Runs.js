import React, { Component } from 'react'
import ActionCreators from '../../redux/actionCreators'
import { connect } from 'react-redux'

import { Table, Button } from 'semantic-ui-react'

import Distance from '../elements/Distance'
import Duration from '../elements/Duration'
import DateStr from '../elements/DateStr'


class Runs extends Component{
    componentDidMount(){
        this.props.load()
    }
    renderRun(run){
        return (
            <Table.Row>
                <Table.Cell>
                    {run.friendly_name}
                </Table.Cell>
                <Table.Cell>
                <Duration duration={run.duration} />
                </Table.Cell>
                <Table.Cell>
                    <Distance distance={run.distance} metric={'metric'} />
                </Table.Cell>
                <Table.Cell>
                    <DateStr date={run.created} timezone={'America/Sao_Paulo'} />
                </Table.Cell>
            </Table.Row>
        )
    }
    
    render() {
        const run = {
            friendly_name: 'Corrida teste',
            duration: 100,
            distance: 100,
            created: ''
        }
        return (
            <div>
                <h1>Cadastro</h1>
                <Button onClick={() => this.props.create(run)}>Create</Button>
                <Table celled>
                    <Table.Header>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Duração</Table.HeaderCell>
                        <Table.HeaderCell>Distância</Table.HeaderCell>
                        <Table.HeaderCell>Data</Table.HeaderCell>
                    </Table.Header>
                    <Table.Body>
                    { this.props.runs.data.map(this.renderRun)}
                    </Table.Body>
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
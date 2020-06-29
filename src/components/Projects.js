import React from 'react'
import { ProjectsList } from '../data/projects'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Columns from 'react-columns'


export const Projects = () => {
    const Projects = ProjectsList.map(project => {

        return (
            <CardDeck>
                 <Card
                        bg="light"
                        text={"blue"}
                        className="text-center"
                        style={{ margin: "20px" }}>
                    <Card.Body>
                        <div>
                            <Card.Img variant="top" src={project.image} fluid className="image-card" />
                        </div>
                    <Card.Title>
                        <a href={project.url}>
                        <span className="contactText text-center">{project.title}</span></a>
                    </Card.Title>
                    <Card.Text>{project.description}</Card.Text>
                    </Card.Body>
                </Card>
            </CardDeck>
        )
    })
    var queries = [{
        columns: 1,
        query: 'min-width: 500px'
    }, {
            columns: 2,
            query: 'min-width: 750px'
        },
    {
        columns: 3,
        query: 'min-width: 1000px'
    }];


    return (
        <div className="projects-card" >
            <h1>Projects</h1>
            <Columns queries={queries} >
                {Projects}
            </Columns>

        </div>
    )
}
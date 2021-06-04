import React, { Component } from 'react'

const companies = [
    {name: "company one", category: "finance", start: 1981, end: 2001, stakeholders: ['gary', "rafeh", 'dennis ivy']},
    {name: "company two", category: "technology", start:2000, end:2010 },
    {name: "company three", category: "energy", start:2000, end:2010 },
    {name: "company four", category: "Biotech", start:2000, end:2010 },
    {name: "company five", category: "Retail", start:2005, end:2016 },
    {name: "company six", category: "Auto", start:2010, end:2015 },
    {name: "company seven", category: "Space", start:2003, end:2020 },
    {name: "company eight", category: "Farming", start:2000, end:2010, 
    stakeholders: ['Dominic', 'John Doe', "Bill gates"]
},
]

const age = [
    33, 12, 80, 50, 15, 20, 25, 36, 87, 65, 45, 40, 67, 32
]

export default class ArraysManipulation extends Component {

    componentDidMount () {
        for (let i = 0; i < companies.length; i++){
            console.log(companies[i])
        }

        companies.forEach(function(company){
            console.log(company.stakeholders)
        })

    }
    render() {
        return (
            <div>
                <h1>high order arrays test</h1>
            </div>
        )
    }
}

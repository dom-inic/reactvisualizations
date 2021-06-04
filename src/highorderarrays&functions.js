import React, { Component } from 'react'

const companies = [
    {name: "company one", category: "finance", start: 1981, end: 2001, stakeholders: ['gary', "rafeh", 'dennis ivy']},
    {name: "company two", category: "technology", start:2000, end:2010 },
    {name: "company three", category: "energy", start:2000, end:2010 },
    {name: "company four", category: "technology", start:2000, end:2010 },
    {name: "company five", category: "Retail", start:2005, end:2016 },
    {name: "company six", category: "technology", start:2010, end:2015 },
    {name: "company seven", category: "technology", start:2003, end:2020 },
    {name: "company eight", category: "Farming", start:2000, end:2010, 
    stakeholders: ['Dominic', 'John Doe', "Bill gates"]
},
]

const ages = [
    33, 12, 80, 50, 15, 20, 25, 36, 87, 65, 45, 40, 67, 32
]

// arrow functions 

const arithmetic = (num1, num2) => {
    console.log(num1 + num2);

    const submit= name =>{
        console.log(name)

    }
}

arithmetic(45, 10);

export default class ArraysManipulation extends Component {

    componentDidMount () {
        for (let i = 0; i < companies.length; i++){
            console.log(companies[i])
        }

        companies.forEach(function(company){
            console.log(company.stakeholders)
        })
        // filtering 
        const canDrink = ages.filter(function(age) {
            if (age >= 21){
                return true;
            }
        }); 
        console.log(canDrink)
        arithmetic(34, 80);
        // arrow function one liner

        const canDrink2 = ages.filter(age => age >= 21);
        console.log(canDrink2)

        // filter companies by category
        const techCompanies = companies.filter (tech => tech.category === 'technology');
        console.log(techCompanies)

        // creating a new arrays of items using maps function

        const allCompanies = companies.map(company => company.name);
        console.log(allCompanies);
        const companyName = companies.map(function(company){
            return company.name;

        }); 
        console.log(companyName);

        //sort companies by start year
        const sortdates = companies.sort((a, b)=> (a.start > b.start ? 1 : -1));
        console.log(sortdates);
        // sort ages
        const sortages = ages.sort((a, b)=> b-a);
        console.log(sortages);

        // resuce function 
        const ageSum =  ages.reduce((total, age) => total + age);
        console.log(ageSum);

        // combining functions 
        const combines =  ages.map(age => age * 2) .filter(age => age >= 40) .sort((a,b)=> a-b) .reduce((total, age)=> total+age);
        console.log(combines)

    }
    render() {
        return (
            <div>
                <h1>high order arrays test</h1>
            </div>
        )
    }
}

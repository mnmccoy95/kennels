import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "./LocationProvider"
import "./Location.css"
import { useParams } from "react-router-dom"

export const LocationDetail = () => {
    const { getLocationById } = useContext(LocationContext)
	
    const [location, setLocation] = useState({})
    const [animals, setAnimal] = useState([])
    const [employees, setEmployee] = useState([])
	
	
	const {id} = useParams();

    useEffect(() => {
        getLocationById(id)
        .then((response) => {
            setLocation(response)
            setAnimal(response.animals)
            setEmployee(response.employees)
		})
    }, [])


    return (
        <section className="location">
            <h3 className="location__name">{location.name}</h3>
            <div className="location__address">{location.address}</div>
            <p>Employees</p>
            <div className="location__employees">{employees.map(employee => { return <div>{employee.name}</div>})}</div>
            <p>Animals</p>
            <div className="location__animals">{animals.map(animal => { return <div>{animal.name}</div>})}</div>
        </section>
    )
}
// import React, { useContext, useEffect, useState } from "react"
// import { LocationContext } from "./LocationProvider"
// import { EmployeeContext } from "../employees/EmployeeProvider"
// import { AnimalContext } from "../animals/AnimalProvider"
// import "./Location.css"
// import { useParams, useHistory } from "react-router-dom"

// export const LocationDetail = () => {
//     const { getLocationById } = useContext(LocationContext)
	
//     const [location, setLocation] = useState({})
//     const [animals, setAnimal] = useState({})
//     const [employees, setEmployee] = useState({})
	
	
// 	const {id} = useParams();
// 	const history = useHistory();

//     useEffect(() => {
// 		console.log("useEffect", id)
//         getLocationById(id)
//         .then((response) => {
// 			console.log("response", response)
//             setLocation(response)
//             setAnimal(response.animals)
//             setEmployee(response.employees)
// 		})
//     }, [])

//     console.log(employees)
//     return (
//         <section className="location">
//             <h3 className="location__name">{location.name}</h3>
//             <div className="location__address">{location.address}</div>
//             <p>Employees</p>
//             {/* <div className="location__employees">{employees.map(employee => (<div>{employee.name}</div>))}</div> */}
//         </section>
//     )
// }
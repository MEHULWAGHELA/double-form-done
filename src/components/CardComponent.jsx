import React, { useContext, useEffect, useState } from 'react'
import { Table } from 'reactstrap'

const CardComponent = (props) => {
    const deletefunction = (id) => {
        props.value.array.splice(props.value.findIndex(x => x.id == id), 1)
        props.value.setarray([...props.value.array])
    }

    const editfunction = (id) => {
        props.value.seteditid(id)
        props.value.obj = props.value.find((x) => x.id == id)
        props.value.setobj({ ...props.value.obj })
    }

    return (
        <>
            <Table
                bordered
                dark
                responsive
                size=""
                striped
            >
                <thead>
                    {props.value.map((obj, i) => {
                        return (
                            <>
                                {i == 0 &&
                                    <tr key={i} >
                                        {Object.keys(obj).map((keys, j) => {
                                            return (
                                                <td scope="col">{keys}</td>
                                            )
                                        })
                                        }
                                        <td scope="col">Action</td>
                                    </tr>}
                            </>
                        )
                    })}
                </thead>
                <tbody>
                    {props.value.map((obj, i) => {
                        return (
                            <tr key={i}>
                                {Object.keys(obj).map((keys, j) => {
                                    if (keys == "image") {
                                        return (
                                            <td>
                                                <img src={obj[keys]} alt="" style={{ width: "100px", height: '100px', objectFit: "cover" }} />
                                            </td>
                                        )
                                    } else {
                                        return (
                                            <td scope="row" key={j}>{obj[keys]}</td>
                                        )
                                    }
                                })}
                                <td scope='col'>
                                    <button onClick={() => { editfunction(obj.id) }}>Edit</button>
                                    <button onClick={() => { deletefunction(obj.id) }}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table >
        </>
    )
}

export default CardComponent

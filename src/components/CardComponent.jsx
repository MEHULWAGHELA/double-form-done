import React, { useContext, useEffect, useState } from 'react'
import { Table } from 'reactstrap'

const CardComponent = (props) => {
    console.log(props)
    const deletefunction = (id) => {
        props.value.array.splice(props.value.array.findIndex(x => x.id == id), 1)
        props.value.setarray([...props.value.array])
    }

    const editfunction = (id) => {
        props.value.seteditid(id)
        props.value.obj = props.value.array.find((x) => x.id == id)
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
                {props.children}
                <tbody>
                    {props.value?.map((x, i) => {
                        return (
                            <tr key={i}>
                                <th scope="row">
                                    {i + 1}
                                </th>
                                <td>
                                    {x.title || x.name}
                                </td>
                                <td>
                                    {x.subtitle || x.surname}
                                </td>
                                <td>
                                    <img src={x.image || x.imagesecond} style={{ height: '50px', width: "50px", objectFit: 'cover' }} alt="" />
                                </td>
                                <td>
                                    <button>Edit</button>
                                    <button>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </>
    )
}

export default CardComponent

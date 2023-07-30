import React, { useContext, useEffect, useRef, useState } from 'react'
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import validationdata from '../JSON/validation.json'
import { Cardcontextsecond } from '../App'
import CardComponent from './CardComponent'
const SecondFormComponent = () => {
    let value = useContext(Cardcontextsecond)
    const fileref = useRef()
    let [errorobj, seterrorobj] = useState({})
    const getBase64 = (file) => new Promise(function (resolve, reject) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result)
        reader.onerror = (error) => reject('Error: ', error);
    })
    const changedata = async (e) => {
        if (e.target.name == "image") {
            value.objsecond[e.target.name] = await getBase64(e.target.files[0])
        }
        else {
            value.objsecond[e.target.name] = e.target.value
        }
        value.setobjsecond({ ...value.objsecond })
    }

    const save = (e) => {

        e.preventDefault()
        if (value.editidsecond == 0) {
            value.countsecond = value.countsecond + 1
            value.objsecond.id = value.countsecond
            value.arraysecond.push(value.objsecond)
        }
        else {
            value.editidsecond = 0;
            value.arraysecond.splice(value.arraysecond.findIndex(x => x.id == value.editidsecond), 1, value.objsecond)
        }
        value.setobjsecond({ ...value.objsecond })
        value.setarraysecond([...value.arraysecond])
        value.setcountsecond(value.countsecond)
        value.setobjsecond({ id: '', name: '', surname: '', image: '' })
        value.seteditidsecond(value.editidsecond)
        fileref.current.value = ""
    }

    return (
        <div>
            <div className="container text-bg-dark rounded-3 py-5 my-3">
                <h1 className='text-center py-3'>Second Form</h1>
                <Form className=''>
                    <Row>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="name" className='fs-5'>
                                    Name
                                </Label>
                                <Input
                                    id="name"
                                    name="name"
                                    type="text"
                                    value={value.objsecond.name || ''}
                                    placeholder='Add Name'
                                    onChange={changedata}
                                />
                                <span>{errorobj.name}</span>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="surname" className='fs-5'>
                                    Surname
                                </Label>
                                <Input
                                    id="surname"
                                    name="surname"
                                    type="text"
                                    value={value.objsecond.surname || ''}
                                    placeholder="Surname"
                                    onChange={changedata}
                                />
                                <span>{errorobj.surname}</span>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <FormGroup>
                                <Label for="image" className='fs-5'>
                                    Image
                                </Label>
                                <input
                                    id="image"
                                    name="image"
                                    type="file"
                                    placeholder='File'
                                    onChange={changedata}
                                    ref={fileref}
                                    className='form-control'
                                />
                                <span>{errorobj.image}</span>
                            </FormGroup>
                        </Col>
                    </Row>
                    <div className='text-center'>
                        <Button className='' onClick={save}>
                            Sign in
                        </Button>
                    </div>
                </Form>
            </div>
            <CardComponent value={value.arraysecond} />
        </div>
    )
}

export default SecondFormComponent

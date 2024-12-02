import React, {ChangeEvent, FormEvent, useState} from 'react'

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useAppDispatch, useAppSelector} from "../store/store";
import {createBlog} from "../features/blog/blogSlice";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

const BlogSave = () => {
    const errors = useAppSelector((state) => state.blog.errors)
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [blog, setBlog] = useState(
        {
            name: "",
            email: "",
            title: "",
            message: "",
        }
    )

    async function onSubmitFormit(event: FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault();
        const resultAction = await dispatch(createBlog(blog));
        if (createBlog.fulfilled.match(resultAction)) {
            toast.success("Successful transaction!", {
                position: "top-right",
                autoClose: 3000,
            });
            navigate('/');
        } else {
            debugger
            // @ts-ignore
            toast.error(resultAction.payload.response.data.error || errors , {
                position: "top-right",
                autoClose: 3000,
            });
             console.error(resultAction.payload || 'Update failed');
        }
    }

    function inputChange(e: FormEvent<HTMLInputElement> | any): void {
        const {name, value} = e.target;
        setBlog(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    return (
        <div>
            <Form onSubmit={onSubmitFormit}>
                <Form.Group className="mb-3">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="text" placeholder="User Name" onChange={inputChange} name="name"/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="E-mail" onChange={inputChange} name="email"/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Title" onChange={inputChange} name="title"/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Contents</Form.Label>
                    <Form.Control type="text" placeholder="Contents" onChange={inputChange} name="message"/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
};

export default BlogSave;
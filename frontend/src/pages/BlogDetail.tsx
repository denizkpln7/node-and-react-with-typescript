import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../store/store";
import {getBlogById} from "../features/blog/blogSlice";
import {Button, Card, Col, Container, Row} from 'react-bootstrap';

const BlogDetail = () => {
    const params = useParams();
    const dispatch = useAppDispatch();
    const singleBlog = useAppSelector((state) => state.blog.singleBlog);

    useEffect(() => {
        if (params?.id != null) {
            // @ts-ignore
            dispatch(getBlogById(params?.id));
        }
    }, [dispatch]);
    return (
        <div>
            <Container>
                <Card className="mt-3 mb-8">
                    <Card.Img variant="top" src="/image/blogs/blog2.svg"/>
                    <Card.Body>
                        <Card.Title>{singleBlog?.title && singleBlog?.title as String}</Card.Title>
                        <Card.Text>
                            {singleBlog?.message && singleBlog?.message as String}
                        </Card.Text>
                        <Card.Text>
                            <div className="flex flex-row gap-0.5"><p
                                className="text-black font-bold">User: </p> {singleBlog?.name && singleBlog?.name as String}
                            </div>
                            <div className="flex flex-row gap-1"><p
                                className="text-black font-bold">Date: </p> {singleBlog?.time && new Date(new Date(Number(singleBlog?.time))).toLocaleString()}
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};

export default BlogDetail;
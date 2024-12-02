import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../store/store";
import {getBlogs} from "../features/blog/blogSlice";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import {useNavigate} from "react-router-dom";
const Home = () => {

    const blog = useAppSelector((state) => state.blog.blogs)
    const dispatch = useAppDispatch()
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getBlogs());
    },[]);


    // @ts-ignore
    function goDetail(_id: string): React.MouseEventHandler<HTMLButtonElement> | undefined {
        navigate(`/blog/${_id}`)
    }


    // @ts-ignore
    return (
        <div>
            <Container>
                <Row>
                    {blog?.map((item, index) => ((
                        <Col xs={6}>
                            <Card className="mt-4">
                                <Card.Img variant="top" src="/image/blogs/blog2.svg" />
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>
                                        {item.message}
                                    </Card.Text>
                                    <Button onClick={()=>goDetail(item._id)} >Go Detail</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    )))}
                </Row>
            </Container>
        </div>
    );
};

export default Home;
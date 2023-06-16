import React from 'react'
import '../project/projects.css'
import Test from '../shared/Test'
import Nav from '../shared/Nav'
import Lower_nav from '../shared/Lower_nav'
import In_pogress from '../shared/In_pogress'
import To_do from '../shared/To_do'
import Completed from '../shared/Completed'
import { useSelector } from 'react-redux';
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { API_HOST } from '../../assets/dataconfig/dataconfig'
import Review_tasks from '../shared/Review_projects'
import Pending from '../shared/Pending'
import Revision from '../shared/Revision'
import Pending_3rdparty from '../shared/Pending_3rdparty'
import { isAccordionItemSelected } from 'react-bootstrap/esm/AccordionContext'
import Spinner from '../shared/spinner/spinner'


function ProjectTasks() {
    const [taskstodo, setTaskstodo] = useState([]);
    const [taskscompleted, setTaskscompleted] = useState([]);
    const [taskspending, setTaskspending] = useState([]);
    const [tasksall, setTasksall] = useState([]);
    const [readyforreview, setReadyforreview] = useState([]);
    const [pendingclientreview, setPendingclientreview] = useState([]);
    const [revision, setRevision] = useState([]);
    const [pendingthirdpartyaction, setPendingthirdpartyaction] = useState([]);

    const [isloading, setIsloading] = useState(false);

    const user = useSelector(state => state.loginUser.user);
    const token = user.token

    useEffect(() => {
        Completedtasks();
        Pendingtasks();
        Todotasks();
        Newtasks();
        handleReadyForReview()
        HandlePendingClientReview()
        HandlePendingThirdPartyAction()
        HandleRevision()
    }, [])

    const Completedtasks = async () => {
        setIsloading(true)
        try {
            const res = await axios({
                method: 'get',
                url: `${API_HOST}/task/getTask?status=completed`,
                data: {},
                headers: {
                    token: token
                }
            })

            setTaskscompleted(res.data.data)
            setIsloading(false)
        } catch (err) {
            console.log(err)
        }
    }
    const Todotasks = async () => {
        try {
            const res = await axios({
                method: 'get',
                url: `${API_HOST}/task/getTask?status=todo`,
                data: {},
                headers: {
                    token: token
                }
            });
            setTaskstodo(res.data.data)
        } catch (err) {
            console.log(err)
        }
    }
    const Newtasks = async () => {
        setIsloading(true)
        try {
            const res = await axios({
                method: 'get',
                url: `${API_HOST}/task/getTask?status=new`,
                data: {},
                headers: {
                    token: token
                }
            });

            setTasksall(res.data.data)
            setIsloading(false)
        } catch (err) {
            console.log(err)
        }
    }
    const Pendingtasks = async () => {
        try {
            const res = await axios({
                method: 'get',
                url: `${API_HOST}/task/getTask?status=pending`,
                data: {},
                headers: {
                    token: token
                }
            });

            setTaskspending(res.data.data)
        } catch (err) {
            console.log(err)
        }
    }
    const handleReadyForReview = async () => {
        try {
            const res = await axios({
                method: 'get',
                url: `${API_HOST}/task/getTask?status=readyforreview`,
                data: {},
                headers: {
                    token: token
                }
            });
            setReadyforreview(res.data.data)
        } catch (err) {
            console.log(err)
        }
    }
    const HandlePendingClientReview = async () => {
        try {
            const res = await axios({
                method: 'get',
                url: `${API_HOST}/task/getTask?status=pendingclientreview`,
                data: {},
                headers: {
                    token: token
                }
            });
            setPendingclientreview(res.data.data)
        } catch (err) {
            console.log(err)
        }
    }
    const HandleRevision = async () => {
        try {
            const res = await axios({
                method: 'get',
                url: `${API_HOST}/task/getTask?status=revision`,
                data: {},
                headers: {
                    token: token
                }
            });
            setRevision(res.data.data)
        } catch (err) {
            console.log(err)
        }
    }
    const HandlePendingThirdPartyAction = async () => {
        try {
            const res = await axios({
                method: 'get',
                url: `${API_HOST}/task/getTask?status=pendingthirdpartyaction`,
                data: {},
                headers: {
                    token: token
                }
            });
            setPendingthirdpartyaction(res.data.data)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            {isloading && <Spinner />}
            <div>
                <Nav />
            </div>
            <div>
                <Lower_nav data={"task Tasks"} />
            </div>
            <br></br>
            <br></br>
            <hr></hr>
            {/* Cards */}
            <div id="carouselExampleIndicators" className="carousel slide" data-interval="false" data-pause="hover" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner" style={{ marginTop: '2%' }}>
                    <div className="carousel-item active">
                        <div>
                            <Test data={tasksall} item={"Tasks"} />
                        </div>
                        <div>
                            <In_pogress data={taskspending} />
                        </div>
                        <div>
                            <To_do data={taskstodo} />
                        </div>
                        <div>
                            <Completed data={taskscompleted} />
                        </div>
                    </div>
                    <div className="carousel-item" >
                        <div>
                            <Review_tasks data={readyforreview} />
                        </div>
                        <div>
                            <Pending data={pendingclientreview} />
                        </div>
                        <div>
                            <Revision data={revision} />
                        </div>
                        <div>
                            <Pending_3rdparty data={pendingthirdpartyaction} />
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>

    )
}

export default ProjectTasks

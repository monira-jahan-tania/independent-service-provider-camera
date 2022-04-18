import React from 'react';

const Blogs = () => {
    return (
        <div className='container mx-auto mt-5 pt-5'>
            <div className='ques-1'>
                <h1>Difference between authorization and authentication</h1>
                <p>Authorization means giving access to a specific application or any page to the specific users who are already verified. On the other hand, authentication means verify a person who are trying to get access to that specific applicaion or page. It is almost like that authentication verify the users firstly, then authorizaton give permission to the user to use it.  </p>
            </div>
            <div className='ques-2'>
                <h1> Why are we using firebase? What other options do you have to implement authentication?</h1>
                <p>We usually use firebase to provide authentication and authorization to our web in a very short time and easiest way which is provided by google. <br /> There are many other platform which provide authentication. Some are: <br />
                    <ul>
                        <li>Parse – Open Source Backend Platform;</li>
                        <li>Back4app – Parse Hosting Platform;</li>
                        <li>Kinvey – Mobile Backend as a Service (mBaaS) for the Enterprise;</li>
                        <li>Backendless – Mobile Backend and API Services Platform;</li>
                        <li>Kuzzle – Backend for web, hybrid, or native mobile apps and IoT projects;</li>
                        <li>Pubnub – Real-time APIs and Global Messaging;</li>
                    </ul>
                </p>
            </div>
            <div className='ques-3'>
                <h1>What other services does firebase provide other than authentication</h1>
                <p>Some other applications to use firebase are: <br />
                    <ul>
                        <li>Firebase Databse</li>
                        <li>Firebase Cloud Storage</li>
                        <li>Firebase Cloud Messeging</li>
                        <li>Firebase remote config</li>
                    </ul>
                </p>
            </div>

        </div >
    );
};

export default Blogs;
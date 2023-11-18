import PropTypes from 'prop-types';
// import { useEffect, useState } from 'react';

const ShowBloggerUser = ({ blog, uniqueBloggerUser, setUniqueBloggerUser }) => {

    const { owner_name, owner_image, owner_Email } = blog

    // const loadUnique = uniqueBloggerUser.find(loadEmail => loadEmail.owner_Email === owner_Email)
    // setUniqueBloggerUser(loadUnique)
    // console.log(uniqueBloggerUser)

    return (
        <>
            <div>
                <div className="avatar">
                    <div className="w-8 rounded">
                        <img src={owner_image} />
                    </div>
                </div>
                <div>
                    <h1>{owner_name}</h1>
                </div>
                <div>
                    <div className="badge badge-neutral">neutral</div>
                </div>
            </div>
        </>
    );
};

ShowBloggerUser.propTypes = {
    blog: PropTypes.obj,
    uniqueBloggerUser: PropTypes.obj,
    setUniqueBloggerUser: PropTypes.func
};

export default ShowBloggerUser;
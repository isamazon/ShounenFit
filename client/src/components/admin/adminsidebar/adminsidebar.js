import React from 'react';
import './adminsidebar.css';
function AdminSideBar(props) {
  return (
    <div className="admin-sidebar-container">
      <div className="admin-sidebar">
        <img
          src="https://ik.imagekit.io/ftl5huci7lw/naruto_mgzULY1a8.png?updatedAt=1635453460445"
          alt=""
          className="anime-pic"
          onClick={props.narutoclick}
        />
        <img
          src="https://ik.imagekit.io/ftl5huci7lw/jujutsu_vnT2MlmQh_Q.png?updatedAt=1635453350645"
          alt=""
          className="anime-pic"
          onClick={props.jujutsuclick}
        />
        <img
          src="https://ik.imagekit.io/ftl5huci7lw/mha__x-9Js-UK.png?updatedAt=1635453315699"
          alt=""
          className="anime-pic"
          onClick={props.mhaclick}
        />
        <img
          src="https://ik.imagekit.io/ftl5huci7lw/aot_D8qoJdB2u.png?updatedAt=1635461337151"
          alt=""
          className="anime-pic"
          onClick={props.aotclick}
        />
        <img
          src="https://ik.imagekit.io/ftl5huci7lw/aot_dOM6VfL_yS9.png?updatedAt=1635461738499"
          alt=""
          className="anime-pic"
          onClick={props.onepunchclick}
        />
      </div>
    </div>
  );
}

export default AdminSideBar;

import React, { useEffect, useState } from 'react'

const   Profile = () => {
    const[edit, setedit]=useState(false);
    const[Uname, setname]=useState("");
    const[Profession, setProfession]=useState("");
    const user=JSON.parse(localStorage.getItem("User-info"));
     useEffect(()=>{
        setname(user.name);
        setProfession(user.Profession);
     },[])
   function set(){
    let id=user.id;
    let name=Uname;;
    let email=user.email;
    let password=user.password;
    let ob = {id,name, email,password ,Profession}
    fetch(`http://localhost:3000/Users/${id}`, {
      method: 'Put',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json'
      },
      body: JSON.stringify(ob)
    }).then((respons) => {
      respons.json().then(data => {
        localStorage.setItem("User-info", JSON.stringify(data));
        setedit(false)
      })
    })
   }
     
  return (
    <section className="vh-100" style={{backgroundColor: '#f4f5f7'}}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-lg-6 mb-4 mb-lg-0">
        <div className="card mb-3" style={{borderRadius: '.5rem'}}>
          <div className="row g-0">
            <div className="col-md-4 gradient-custom text-center text-white bg-warning">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp" alt="Avatar" className="img-fluid my-5" style={{width: 80}} />
              <h5>{user.name}</h5>
              <p>{user.Profession}</p>
              <i class="fa fa-pencil-square-o" aria-hidden="true" onClick={()=>setedit(true)} ></i>
                {
                    edit?
                    <form>
                    <input type='text' placeholder='Name' className='rounded  border-bottom-1 border-danger'required  onChange={(e)=>setname(e.target.value)} />
                    <input type='text' placeholder='profession'  className='rounded my-1 border-bottom-1 border-danger' onChange={(e)=>setProfession(e.target.value)} />
                    <button type="button" class="btn btn-info py-0" onClick={()=>set()} >set</button>
                    </form>
                    :null
                }
            </div>
            <div className="col-md-8">
              <div className="card-body p-4">
                <h6>Information</h6>
                <hr className="mt-0 mb-4" />
                <div className="row pt-1">
                  <div className="col-6 mb-3">
                    <h6>Email</h6>
                    <p className="text-muted">{user.email}</p>
                  </div>
                  <div className="col-6 mb-3">
                    <h6>Password</h6>
                    <p className="text-muted">{user.password}</p>
                  </div>
                </div>
                <h6>Projects</h6>
                <hr className="mt-0 mb-4" />
                <div className="row pt-1">
                  <div className="col-6 mb-3">
                    <h6>Recent</h6>
                    <p className="text-muted">Lorem ipsum</p>
                  </div>
                  <div className="col-6 mb-3">
                    <h6>Most Viewed</h6>
                    <p className="text-muted">Dolor sit amet</p>
                  </div>
                </div>
                <div className="d-flex justify-content-start">
                  <a href="#!"><i class="fa fa-facebook-official h4" aria-hidden="true"></i></a>
                  <a href="#!"><i class="fa fa-twitter-square h4 mx-2" aria-hidden="true"></i></a>
                  <a href="#!"><i class="fa fa-instagram h4" aria-hidden="true"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Profile

import React, { useState } from 'react'

export default function About() {

    //
    const [mystyle,setStyle]=useState({
        color:'white',
        backgroundColor:'black'
    });
    const [btntext,setbtnText]=useState("Enable Light Mode")

    const toggleStyle=()=>{
        if(mystyle.color === 'white'){
            setStyle({
                color:'black',
                backgroundColor:'white'
            })
            setbtnText("Enable dark Mode")
        }
        else{
            setStyle({
                color:'white',
                backgroundColor:'black'
            })
            setbtnText("Enable Light Mode")
        }
    }
  return (
    <>
    <div>
         <section className="container my-5"  style={mystyle}>
        <div className="row">
            <div className="col-lg-6">
                <h1>About Us</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec urna vel ex mattis ullamcorper. Sed at leo sit amet massa suscipit tincidunt. Vestibulum a nisi et libero consectetur malesuada.</p>
            </div>
            <div className="col-lg-6">
                <img src="/" alt="Our Team" className="img-fluid rounded-circle"/>
            </div>
        </div>
    </section>
    </div>
    <div className='container'>
    <button type="button" onClick={toggleStyle} class="btn btn-primary">{btntext}</button>
    </div>
      
    </>
  )
}

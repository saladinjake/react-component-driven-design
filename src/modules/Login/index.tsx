const RightSection = () =>{
    return (
    <div className="rightside">
    <h1>The Tale of the Heike</h1>
    <p>
      The sound of the Gion Shōja bells echoes the impermanence of all things; the color of the sāla flowers reveals the truth that the prosperous must decline. The proud do not endure, they are like a dream on a spring night; the mighty fall at last, they are as dust before the wind.
    </p>
 
  </div>
    )

}

const LeftSection = () =>{
return(
    <div className="leftside">
    <h1>The Tale of the Heike</h1>
    <p>
      The sound of the Gion Shōja bells echoes the impermanence of all things; the color of the sāla flowers reveals the truth that the prosperous must decline. The proud do not endure, they are like a dream on a spring night; the mighty fall at last, they are as dust before the wind.
    </p>

  </div>
)
}


const Login = () =>{
  <div className="flexbox">
    <LeftSection/>
    <RightSection/>
  </div>
}

export default Login
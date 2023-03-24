import React,{useState} from 'react'

export default function About() {
    const [mystyle, setmystyle] = useState({
        color:'black',
        backgroundColor:'white',
        border:'1px solid #7a7c7f'
    });
    const [btn, setbtn] = useState("Enable Dark Mode");

    const togglestyle=()=>{
        if(mystyle.color==='black'){
            setmystyle({
                color:'white',
                backgroundColor:'black'
            })
            setbtn("Enable Light Mode");
        }
        else{
            setmystyle({
                color:'black',
                backgroundColor:'white',
                border:'1px solid #7a7c7f'
            })
            setbtn("Enable Dark Mode");
        }
    }
  return (
    <div>
      <h2>About Us</h2>
      <div className="container my-3" style={mystyle}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae non nihil minus odit voluptatum, iusto quibusdam recusandae deleniti exercitationem atque nisi dolore eum blanditiis, dicta sunt enim ex. Voluptatibus quibusdam blanditiis explicabo cum incidunt.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores rem debitis id explicabo? Exercitationem sunt porro excepturi consequuntur provident, magni totam! Quidem quo quisquam consectetur dolores atque voluptatem unde dolorum ab architecto! Id, in.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis corporis, quasi voluptatum alias enim fugit, quam odio quisquam dolor excepturi nisi blanditiis vel velit commodi non aspernatur ad. Nostrum, dignissimos, blanditiis dolor assumenda, non nulla aut officia natus fugit possimus necessitatibus qui sequi saepe eaque!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio at atque amet sed. Beatae quis distinctio optio dolorem accusantium sint delectus illo error, qui itaque! Dolor ipsum est placeat hic optio iste nihil dignissimos, porro officia. Optio autem officiis, nihil soluta natus eum, aperiam architecto alias nemo quisquam repellendus molestiae esse sit inventore neque quaerat debitis.
        <button type='submit' onClick={togglestyle} className='btn btn-success my-3'>{btn}</button>
      </div>
    </div>
  )
}

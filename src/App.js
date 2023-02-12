import { useEffect, useState } from 'react';
import UserCard from './components/UserCard';
import styled from 'styled-components'
import Loading from './components/Loading';

import './App.css';


// <------------------------------------------Button to call the API ----------------------------------------->
const Button = styled.button`
  background: transparent;
  width:100px;
  height:40px;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: red;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  :hover{
       color:red;
       box-shadow: 10px 20px 30px solid red;
       cursor:pointer;
       }
  `;
//<---------------------------------------------Navbar/Header------------------------------------------------------------> 
  const Header = styled.header`
   display: flex;
   width:100%;
   height:auto;
   justify-content:space-between;
   padding:20px 10rem ;
   border-bottom: 1px solid grey;
   background-color: rgba(0,0,0,0.1);
      
  `;

//<----------------------------------------------Grid------------------------------------------------------------->
const Grid = styled.div`

  display:grid ;
  grid-template-columns: repeat(3, [col] 1fr);
  justify-content:center;
  align-items:center;
  width:100%;
  gap:10px;
  
  padding:50px;
  `;


//<---------------------------------------Container------------------------------------------------------------------>
const Container = styled.div`
       display:grid;
       width:100%;
       justify-content:center;
       align-items:center;
       gap:10px;
`;


//<------------------------------------------------------------------------------------------------------------------>

function App() {
   const [data,setData] = useState([]);
   const [loading,setLoading] = useState(false);


  //async function to call the api
  const handleRender= async ()=>{
      try{
          setLoading(true);
          const d = await fetch('https://reqres.in/api/users?page=1').then(res=>res.json());
          
          setData([...d.data]);  
          setLoading(false);
          
        }
        catch(e){
          setLoading(false);
          
          console.log("couldnt parse the data");
        }
}    
    
                             
    //   // useEffect(()=>{
    //   //        handleRender();  
    //   //     },[])
    //   // if(isloading) return <div class="window">loading...</div>

    
return (
    <div className="App">
      <Header>
          <div>
            <img style={{width:'60px'}} 
            src="https://th.bing.com/th/id/R.a3c44b224b15a07511a8cf106c32f418?rik=RqiFq37P2fgIZg&riu=http%3a%2f%2flogos-download.com%2fwp-content%2fuploads%2f2016%2f03%2fUnilever_logotype_emblem_logo.png&ehk=ckmaViJ4bLuazotZ%2fJjLxOFsNF2GndJHY%2buuPZlrnZw%3d&risl=&pid=ImgRaw&r=0" 
            alt="logo" />
          </div>
        <Button onClick={()=>handleRender()}>Get Users</Button>
      </Header>
     
      <Container>
          <Grid>
            { 
              loading ? <Loading isloading={loading}/>:(data.map((item)=>{
                return <div className="block" key={item.id}>
                            <UserCard item={item} /> 
                       </div> 
                   }
                ))
                
            }
          </Grid>
      </Container>
    </div>
         );
}

export default App;

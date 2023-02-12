import React from 'react'
import styled from 'styled-components'


//<-----------------------------------------UserCard-------------------------------------------------->
const Card = styled.div`
            display:flex;
            width: 300px;
            height:300px;
            background-color: white;
            border:0.1px solid grey;
            border-radius: 30px;
            z-index:-1 ;
            color:black;

            :hover{
                 transform: translateY(-10px);
                 margin-top:2px;
                 background-color:black ;
                 border:1px solid red;
                 font-family:baloo bhai;
                 font-size:20px;
                 color:white;
                 cursor:pointer;
            }

`;

//<-----------------------------------------display Email of person-------------------------------------------------->
const Email = styled.div`
    font-family: poppins;

  :hover{
     color:gold;
  }
      
`
//<---------------------------------to display each avatar on each grid---------------------------------------------->
const Image = styled.img`
      justify-content:center;
     top:0;  
    width:80px;
    height:80px;
    border-radius:30px ;
    border:2px solid black;
    :hover{
         width:85px;
         height:85px;
         border-radius:30px;
         border:2px solid white;
    }
`
//<-----------------------------------------display name of person-------------------------------------------------->
const Name = styled.div`
    font-family: poppins;
`
//<------------------------------------------------------------------------------------------------------------------>

const UserCard = ({item}) => {
  return (
        <Card>
           <div className='Person'>
            
            <Image src={item.avatar} />
            <Name>{item.first_name} {item.last_name}</Name>    
            <Email><br/>email<br/> {item.email}</Email>
            </div>
        </Card>
    )
  
}

export default UserCard
import React from 'react'
import {useState} from 'react'
import * as homeStyle from './style/home.module.css'

function Home({currentUser}) {


let fields =[]


    for (const [key, value] of Object.entries(currentUser.formFills[0])) {
        fields.push(key)
    }






    return (


        
        <div className={homeStyle.container}>
            <div className={homeStyle.instructions}>
                <p>To collect submissions, send a PUT request to the below url on form submit:
                    <span style={{fontWeight : "500"}}>https://formdatabase.herokuapp.com/data/entries</span>
                   <br/><br/> The body should be JSON key value pairs and of the format :<br/>
                    {`{
                      "apiKey" : "your api key",
                      "entry" : {
                          Your form entries in key value pairs here
                      }   
                    }\n`}<br /><br/>
                    {
                        `Your apiKey : ${currentUser.apiKey}`
                    }
                    
                </p>
            </div>
       <div className={homeStyle.subContainer}>
<p>Submissions : </p>
<div className={homeStyle.fields}>
{
    fields.map((field)=>{ field = field.toLocaleUpperCase();
        return( 
        <span>{field}</span>
        )
    })
    
}
</div>
<br/>
<div className={homeStyle.data}>
{

currentUser.formFills.map((fill)=>{

          return (<div className={homeStyle.itemDiv}>
{ fields.map((field)=>{

return (
    <span className={homeStyle.item}>{fill[field]}</span>
)

            })}
          </div>)
          
          
          
          
         
    

})

}


</div>

</div> 
        </div>
    )
}

export default Home

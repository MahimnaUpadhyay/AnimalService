import React from "react";
import './aboutus.css';

export default function aboutus()
{
    return(
    <>
    
        <div className="aboutus_container">
            <div className="image_container">
                <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt=""/>
            </div>
            <div className="content_container">
                
                <p>
                 In many countries, the local nomenclature for a veterinarian is<br/>
                 a regulated and protected term, meaning that members of the public<br/> 
                 without the prerequisite qualifications and/or license are not able<br/> 
                 to use the title. This title is selective in order to produce the most<br/> 
                 knowledgeable veterinarians that pass these qualifications. In many cases,<br/>
                 the activities that may be undertaken by a veterinarian (such as treatment<br/> 
                 of illness or surgery in animals) are restricted only to those professionals<br/>
                  who are registered as a veterinarian. For instance, in the United Kingdom,<br/> 
                  as in other jurisdictions, animal treatment may only be performed by<br/> 
                  registered veterinarians (with a few designated exceptions, such as paraveterinary<br/>
                   workers), and it is illegal for any person who is not registered to call<br/> 
                   themselves a veterinarian, prescribe any drugs, or perform treatment.<br/>
                </p>

            </div>
        </div>
    
    </>
    );
}
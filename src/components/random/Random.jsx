import React from "react";
import Meal from "../meal/Meal";

const Random = () =>{
    return(
       <div>
           <div>
                <Meal/>
           </div>
           <div>
               <button>Next</button>
               <button>Save</button>
           </div>
       </div>
    );
}

export  default Random;
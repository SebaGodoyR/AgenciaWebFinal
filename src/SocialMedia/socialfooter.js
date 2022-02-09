import React from "react"
import "./SocialMedia.scss"
import { Icon} from "semantic-ui-react"
import socialData from "./data"
import { map } from "lodash-es"



export default function Socialfooter() {

return(

    <div className="social-media2">
            

        {map(socialData, (social, index) => (


            <a href={social.link} >

                <Icon   link name={social.name} className={social.name} />
            </a>
        ))}
      
     
    </div>
)


}
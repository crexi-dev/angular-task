export class UserProfile {
    constructor(params:Partial<UserProfile>={}){
        Object.assign(
            this,
            {
                ...params
            }
        )
            
        this.profileDetailDisplay[0].value.push(this.phoneNumber)
        this.profileDetailDisplay[1].value.push(this.cellNumber)
        this.profileDetailDisplay[2].value.push(this.city,this.state)
        this.profileDetailDisplay[3].value.push(this.email)
        this.profileDetailDisplay[4].value.push(this.dateOfBirth)

    }
    cellNumber: string;
    city: string;
    dateOfBirth: string;
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    picture: string;
    state: string;
    
    id:number;

    profileDetailDisplay=Array(5)
    .fill(null)
    .map((nullVal,index0)=>{
        return{
            type:["single","single","double","single","date"][index0],
            detailKey:"profileDetail.detailKeys." + index0,
            value:[]
        }
    })
}


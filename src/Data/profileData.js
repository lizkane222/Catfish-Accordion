import React from 'react'



function profileData(props) {
    let userId = Math.floor(Math.random()* 10000000)
    let anonymousIdGen = [Math.floor(Math.random()* 10000),Math.floor(Math.random()* 10000),Math.floor(Math.random()* 10000),Math.floor(Math.random()* 10000)]
    let anonymousId = `${anonymousIdGen[0]}-${anonymousIdGen[1]}-${anonymousIdGen[2]}-${anonymousIdGen[3]}`
    let profileVersion = 0
    let data = {
        firstName : "Liz",
        lastName : "Kane",
        name : "Liz Kane",
        age : "30",
        birthday : "02/22/1991",
        version : profileVersion,
        username : "Lizay Kay",
        userId : `${userId}_${profileVersion}`,
        anonymousId : anonymousId,
        createdAt : props.createdAt,
        updatedAt : props.updatedAt
    }
}


export default profileData.data
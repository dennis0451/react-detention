
function Standards(){

    let detention_standards = [] 

    for(let i = 0; i <= 100; i++){
        detention_standards.push(<p key={i} id="bart" >"I will never mutate state or props directly"</p> )
    }
    return(
        <div>
            {detention_standards}

        </div>
    )
}

export default Standards;
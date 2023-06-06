

const ProductList = () =>{

    const whiteColor = 'white'

    const colors = ['white', 'yellow','blue','brown','pink']

    if (colors.length <10){
        return <h3>Not enough colors</h3>
    }

    return <ul>
        { 
            colors.map(color =>(
                <li style={{ backgroundColor:color }}>
                    {color} { color === whiteColor ? ' W' : '' }
                </li>
            ))
        }
        </ul>

    // return colors.lenght <10 ? (<ul>
    //     { 
    //         colors.map(color =>(
    //             <li style={{ backgroundColor:color }}>
    //                 {color} { color === whiteColor ? ' W' : '' }
    //             </li>
    //         ))
    //     }
    //     </ul>) : (<h3>Not enough colors</h3>)
}

export default ProductList
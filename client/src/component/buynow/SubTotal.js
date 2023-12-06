import React,{useState, useEffect} from 'react'

const SubTotal = ({iteam}) => {

    const [price,setPrice] = useState(0);

    useEffect(() => {
        totalAmount();
    },[iteam])


    const totalAmount = ()=>{
        let price = 0;
        iteam.map((item)=>{
            price = item.price.cost + price
        })
        setPrice(price)
    }

    ///a=item.price.cost * qun

    return (
        <>
            <div className="sub_item">
                <h3>Subtotal:<strong style={{ fontWeight: 700, color: '#111'}}>₹{price}</strong></h3>
            </div>
        </>
    )
}

export default SubTotal
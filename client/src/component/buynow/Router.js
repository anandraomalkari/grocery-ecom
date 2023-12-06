import React from 'react'

const Router = () => {
  return (
    router.post("../addcart/:id",async(req, res)=>{
        try {
            const {id} = req.params;
            const cart = Products.findOne({id:id});
            console.log(cart + "Cart value");
        } catch (error) {
            
        }
    })
  )
}

export default Router
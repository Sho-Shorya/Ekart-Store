export const addProduct = async(req,res)=>{
  try {
    const {productName,productDesc,productPrice,catagory,brand} = req.body;
    const userId = req.id;
    if(!productName || !productDesc || !productPrice || !catagory || !brand){
      return res.status(400).json({
      success:false,message:"All feids are required!"
    })
    }
    const productImg = [];
    if(req.files && req.files.length > 0){
      for (let file of req.files) {
        const fileUri = 
      }
    }
  } catch (error) {
    return res.status(500).json({
      success:false,message:error.message
    })
  }
}
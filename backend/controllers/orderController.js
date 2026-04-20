import orderModel from "../models/orderModels.js";
import userModel from "../models/userModels.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js"
import Stripe from "stripe"

// global variables
const currency = "AUD";
const deliveryCharge = 10;

// getway initialize
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)


//Placing order using COD Method

const placeOrder = asyncHandler( async (req, res) => {
     const { userId, items, amount, address } = req.body;

     if (!userId || !items || !amount || !address){
        throw new ApiError(400, "All fields are required")
     }

        const orderData = {
            userId,
            items,
            amount,
            address,
            paymentMethod: "COD",
            payment: false,
            date: Date.now()
        }

        const newOrder = new orderModel(orderData);
        await newOrder.save();

        await userModel.findByIdAndUpdate(userId, {cartData:{}})

        return res.status(201).json(
            new ApiResponse(201, newOrder, "Order placed successfully")
        );
    
}
);


// Placing order using Stripe Payment Gateway
const placeOrderStripe = asyncHandler(async (req, res) => {

  const { userId, items, amount, address } = req.body;
  const origin = req.headers.origin || "http://localhost:5173";

  if (!userId || !items || !amount || !address) {
    throw new ApiError(400, "All fields are required");
  }

  const orderData = {
    userId,
    items,
    amount,
    address,
    paymentMethod: "Stripe",
    payment: false,
    date: Date.now()
  };

  const newOrder = new orderModel(orderData);
  await newOrder.save();


  const line_items = items.map((item) => ({
    price_data: {
      currency: currency,
      product_data: {
        name: item.name,
      },
      unit_amount: item.price * 100,
    },
    quantity: item.quantity,
  }));


  line_items.push({
    price_data: {
      currency: currency,
      product_data: {
        name: "Delivery Charges",
      },
      unit_amount: deliveryCharge * 100,
    },
    quantity: 1,
  });


  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    success_url: `${origin}/verify?success=true&orderId=${newOrder._id}`,
    cancel_url: `${origin}/verify?success=false&orderId=${newOrder._id}`,
    line_items,
    mode: "payment",
  });


  return res.status(200).json(
    new ApiResponse(
      200,
      { session_url: session.url },
      "Order placed successfully"
    )
  );
});





const placeOrderRazorpay = async (req, res) => {

}


// All Order data for Admin panel

const allOrders = asyncHandler( async (req, res) => {
    
        const orders = await orderModel.find({});

        if(!orders){
            throw new ApiError(500, "Failed to retrieve orders")
        }

        return res.status(200).json(
            new ApiResponse(200, {orders}, "Orders retrieved successfully")
        );

})



// User Order data for Frontend

const userOrders = asyncHandler( async (req, res) => {
        const { userId } = req.body;

    if(!userId){
        throw new ApiError(400, "User ID is required");
    }

    const orders = await orderModel.find({ userId });

    return res.status(200).json(
        new ApiResponse(200, { orders }, "Orders retrieved successfully")
    );
});


//update order status from Admin panel
const updateStatus = asyncHandler( async (req, res) => {
    
        const { orderId, status} = req.body
        
        if(!orderId || !status){
            throw new ApiError(400, "Order ID and status are required")
        }

        await orderModel.findByIdAndUpdate(orderId, {status})
        return res.status(200).json(
            new ApiResponse(200, null, "Order status updated successfully")
        );

})

export { placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStatus }    
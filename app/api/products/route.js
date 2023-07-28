import { NextResponse } from "next/server";

import connectMongo from "@/utils/db";

import Product from "@/models/Product";

export const GET = async () => {
  try {
    await connectMongo();
    const products = await Product.find();
    let json_response = {
      status: "success",
      results: products.length,
      products,
    };
    return NextResponse.json(json_response);
  } catch (err) {
    console.log(err);
  }
};

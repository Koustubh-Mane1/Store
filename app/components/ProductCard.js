import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export default function ProductCard({ product }) {
  return (
    <Card className="w-96 m-5">
      <CardHeader color="black" className="m-3">
        <img src={product.image} alt="image" className="h-[360px] w-[360px]" />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="white" className="text-xl font-sans">
          {product.name}
        </Typography>
        <Typography>Price : {product.price}</Typography>
      </CardBody>
      <div class="rounded-pill ">
        <Button>Buy Now</Button>
      </div>
    </Card>
  );
}

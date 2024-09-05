

const DynamicProduct = ({params , searchParams}) => {
    console.log(params);
  return (
    <div>
      this is dynamic product page {params.productId}
    </div>
  )
}

export default DynamicProduct;

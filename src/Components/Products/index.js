import {
  Badge,
  Button,
  Card,
  Image,
  List,
  message,
  Rate,
  Spin,
  Typography,
  Select,
  Pagination
} from "antd";
import { useEffect, useState } from "react";
import { addToCart, getAllProducts, getProductsByCategory } from "../../API";
import { useParams } from "react-router-dom";

function Products() {
  const [loading, setLoading] = useState(false);
  const param = useParams();
  const [items, setItems] = useState([]);
  const [sortOrder, setSortOrder] = useState("az");
  const [currentPage, setCurrentPage] = useState(1);
  const [myCat,setMyCat]=useState(3);
  const [pageSize, setPageSize] = useState(myCat); // Adjust page size as needed
  // Calculate total pages based on the number of items and page size
  const totalPages = Math.ceil(items.length / pageSize);

  useEffect(() => {
    setLoading(true);
    console.log("my params",param);
   
    (param?.categoryId
      ? getProductsByCategory(param.categoryId)
      : getAllProducts()
    ).then((res) => {
      if(param.categoryId === "mens-shoes"){
        console.log("if chala");
        setItems(res.products);
        setLoading(false);
        setMyCat(3)
      }else{
        console.log("else chala");
        setItems(res.products);
        setLoading(false);
        setMyCat(10)
      }
    });
  }, [param]);

  // Function to handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const getSortedItems = () => {
    const sortedItems = [...items];
    
    
    sortedItems.sort((a, b) => {
      const aLowerCaseTitle = a.title.toLowerCase();
      const bLowerCaseTitle = b.title.toLowerCase();

      if (sortOrder === "az") {
        return aLowerCaseTitle > bLowerCaseTitle ? 1 : aLowerCaseTitle === bLowerCaseTitle ? 0 : -1;
      } else if (sortOrder === "za") {
        return aLowerCaseTitle < bLowerCaseTitle ? 1 : aLowerCaseTitle === bLowerCaseTitle ? 0 : -1;
      } else if (sortOrder === "lowHigh") {
        return a.price > b.price ? 1 : a.price === b.price ? 0 : -1;
      } else if (sortOrder === "highLow") {
        return a.price < b.price ? 1 : a.price === b.price ? 0 : -1;
      }
    });
  
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
  
    return sortedItems.slice(startIndex, endIndex);
  };

  return (
    <div className="productsContainer">
      <div>
        <Typography.Text>View Items Sorted By: </Typography.Text>
        <Select
          onChange={(value) => {
            setSortOrder(value);
          }}
          defaultValue={"az"}
          options={[
            {
              label: "Alphabetically a-z",
              value: "az",
            },
            {
              label: "Alphabetically z-a",
              value: "za",
            },
            {
              label: "Price Low to High",
              value: "lowHigh",
            },
            {
              label: "Price High to Low",
              value: "highLow",
            },
          ]}
        ></Select>
      </div>
      <List
        loading={loading}
        grid={{ column: 3 }}
        dataSource={getSortedItems()} // Use getSortedItems() for dataSource
        renderItem={(product, index) => (
          <Badge.Ribbon
            className="itemCardBadge"
            text={`${product.discountPercentage}% Off`}
            color="pink"
          >
            <Card
              className="itemCard"
              title={product.title}
              key={index}
              cover={<Image className="itemCardImage" src={product.thumbnail} />}
              actions={[
                <Rate allowHalf disabled value={product.rating} />,
                <AddToCartButton item={product} />,
              ]}
            >
              <Card.Meta
                title={
                  <Typography.Paragraph>
                    Price: ${product.price}{" "}
                    <Typography.Text delete type="danger">
                      $
                      {parseFloat(
                        product.price +
                          (product.price * product.discountPercentage) / 100
                      ).toFixed(2)}
                    </Typography.Text>
                  </Typography.Paragraph>
                }
                description={
                  <Typography.Paragraph
                    ellipsis={{ rows: 2, expandable: true, symbol: "more" }}
                  >
                    {product.description}
                  </Typography.Paragraph>
                }
              ></Card.Meta>
            </Card>
          </Badge.Ribbon>
        )}
      />
      <Pagination
        current={currentPage}
        total={items.length} // Total number of items, not total number of pages
        pageSize={pageSize}
        onChange={handlePageChange}
      />
    </div>
  );
}

function AddToCartButton({ item }) {
  const [loading, setLoading] = useState(false);
  const addProductToCart = () => {
    setLoading(true);
    addToCart(item.id).then((res) => {
      message.success(`${item.title} has been added to cart!`);
      setLoading(false);
    });
  };
  return (
    <Button
      type="link"
      onClick={() => {
        addProductToCart();
      }}
      loading={loading}
    >
      Add to Cart
    </Button>
  );
}

export default Products;
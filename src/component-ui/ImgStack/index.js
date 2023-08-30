import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const ImgStack = () => {
  return (
    <ImageList sx={{ height: "20%", m: 2}} cols={1}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <h4>{item.heading}</h4>
          <img
            src={`${item.img}?w=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <p style={{ textAlign: "justify"}}>{item.description}</p>
        </ImageListItem>
      ))}
    </ImageList>
  );
}

export default ImgStack

const itemData = [
  {
    heading: "Crypto Mining",
    img: "/img/home1.jpeg",
    title: "Breakfast",
    description:
      "Crypto mining, short for cryptocurrency mining, is the process by which new units of a cryptocurrency are created and transactions are verified and added to the blockchain. Cryptocurrencies like Bitcoin and Ethereum use a decentralized ledger technology called blockchain to record and validate transactions. Miners play a crucial role in this process by solving complex mathematical problems that validate transactions and secure the network.",
  },
  {
    heading: "Crypto & Forex Trading",
    img: "/img/home2.jpeg",
    title: "Burger",
    description:
      "Crypto and Forex trading are both types of financial trading that involve the buying and selling of assets to make a profit. However, they operate in different markets and involve different types of assets.",
  },
  {
    heading: "Crypto Education",
    img: "/img/home3.jpeg",
    title: "Camera",
    description:
      "In fact, we at Dream the Future are happy to provide you with some information about cryptocurrencies and their underlying technology, blockchain.Cryptocurrencies have gained significant attention in recent years as a new form of digital currency and a potential alternative to traditional financial systems.",
  },
  {
    heading: "Crypto investment",
    img: "/img/home4.jpeg",
    title: "Coffee",
    description:
      "Cryptocurrency investment involves buying and holding digital currencies with the expectation of making a profit. While some individuals have achieved significant gains through crypto investments, it's important to note that the crypto market is highly volatile and risky. Here are some key points to consider if you're thinking about investing in cryptocurrencies. (Research, Diversification, Risk Management, Long-Term Perspective, Regulation and Legal Considerations, Wallet Security, Market Volatility, Scams and Fraud, Market Sentiment, Stay Updated, Professional Advice).",
  },
];
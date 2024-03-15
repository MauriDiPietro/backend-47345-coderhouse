import React, { useEffect, useState } from "react";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";

const Product = () => {
  initMercadoPago("TEST-4aeab724-a58d-44d8-9b3a-18bef67d3c7d", {
    locale: "es-AR",
  });

  const [products, setProducts] = useState([]);
  const [preferenceIds, setPreferenceIds] = useState(null);

  const fetchProducts = async () => {
    try {
      const res = await fetch(
        "https://ff2040d2a1974daf88b5f27f49972ceb.api.mockbin.io/"
      ); //get all products
      const response = await res.json();
      setProducts(response);
    } catch (error) {
      console.log(error);
    }
  };

  const createPreference = async (prod) => {
    try {
      const body = {
        title: prod.name,
        quantity: 1,
        price: prod.price,
      };
      const res = await fetch("http://localhost:8080/create-preference", {
        method: "POST",
        body: JSON.stringify(body),
        headers: { "Content-Type": "application/json" },
      });
      const response = await res.json();
      console.log("response api", response);
      const { id } = response;
      return id;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    const updatePreferenceIds = async () => {
      const ids = {};
      for (const prod of products) {
        const preferenceId = await createPreference(prod);
        ids[prod.id] = preferenceId;
        console.log("ids", ids);
      }
      setPreferenceIds(ids);
    };

    if (products.length > 0) {
      updatePreferenceIds();
    }
    // console.log(preferenceIds);
  }, [products]);

  return (
    <>
      {products &&
        products.map((prod) => {
          return (
            <>
              <img src={prod.image} alt="" />
              <h3>{prod.name}</h3>
              <p>{prod.price}</p>
              {preferenceIds && (
                <Wallet
                  initialization={{ preferenceId: preferenceIds[prod.id] }}
                  customization={{ texts: { valueProp: "smart_option" } }}
                />
              )}
            </>
          );
        })}
    </>
  );
};

export default Product;

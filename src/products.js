// --- 1. Images ko Import karein ---
// Note: Agar aapki image .jpg hai to extension change kar lena (e.g., iphone.jpg)
import iphoneImg from "./assets/products/iphone.png";
import macbookImg from "./assets/products/macbook.png";
import cameraImg from "./assets/products/camera.png";
import jacketImg from "./assets/products/jacket.png";
import ledImg from "./assets/products/ledlights.png";
import airpodsImg from "./assets/products/airpods.png";

export const PRODUCTS = [
    {
        id: 1,
        productName: "iPhone 14 Pro",
        price: 999.0,
        // 2. URL ki jagah imported variable use karein
        productImage: iphoneImg,
        category: "Mobile"
    },
    {
        id: 2,
        productName: "Macbook Pro 2023",
        price: 1999.0,
        productImage: macbookImg,
        category: "Laptop"
    },
    {
        id: 3,
        productName: "Cannon EOS Camera",
        price: 699.0,
        productImage: cameraImg,
        category: "Camera"
    },
    {
        id: 4,
        productName: "Denim Jacket",
        price: 228.0,
        productImage: jacketImg,
        category: "Cloth"
    },
    {
        id: 5,
        productName: "LED Strip Lights",
        price: 19.99,
        productImage: ledImg,
        category: "Accessories"
    },
    {
        id: 6,
        productName: "AirPods Pro",
        price: 249.0,
        productImage: airpodsImg,
        category: "Accessories"
    }
];
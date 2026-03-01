export default function ProductsPage() {
  const products = [
    { name: "BPC-157", price: "$39.99", description: "5mg Peptide Vial", image: "/placeholder-bottle.png" },
    { name: "TB-500", price: "$44.99", description: "5mg Peptide Vial", image: "/placeholder-bottle.png" },
    { name: "CJC-1295", price: "$49.99", description: "2mg Peptide Vial", image: "/placeholder-bottle.png" },
    { name: "Ipamorelin", price: "$39.99", description: "2mg Peptide Vial", image: "/placeholder-bottle.png" },
    { name: "Semaglutide", price: "$59.99", description: "5mg Peptide Vial", image: "/placeholder-bottle.png" },
    { name: "AOD-9604", price: "$34.99", description: "5mg Peptide Vial", image: "/placeholder-bottle.png" },
    { name: "PT-141", price: "$49.99", description: "10mg Peptide Vial", image: "/placeholder-bottle.png" },
    { name: "Melanotan II", price: "$39.99", description: "10mg Peptide Vial", image: "/placeholder-bottle.png" },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#e3e2e2",
        padding: "40px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "48px",
          fontWeight: "bold",
          marginBottom: "40px",
        }}
      >
        Products
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "30px",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        {products.map((p, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "white",
              borderRadius: "12px",
              padding: "20px",
              textAlign: "center",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={p.image}
              alt={p.name}
              style={{
                width: "120px",
                height: "120px",
                objectFit: "contain",
                marginBottom: "16px",
              }}
            />

            <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "8px" }}>
              {p.name}
            </h2>

            <p style={{ fontSize: "16px", marginBottom: "8px" }}>{p.description}</p>

            <p style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "16px" }}>
              {p.price}
            </p>

            <a
              href={`/products/${p.name.toLowerCase().replace(/[^a-z0-9]/g, "")}`}
              style={{
                display: "inline-block",
                padding: "10px 20px",
                backgroundColor: "#2c3e50",
                color: "white",
                borderRadius: "6px",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              View Product
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

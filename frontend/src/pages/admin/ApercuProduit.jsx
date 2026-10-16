import Header from "../../components/Header";
import Footer from "../../components/Footer";

function ApercuProduit() {
  const produit = JSON.parse(sessionStorage.getItem("apercuProduit") || "{}");
  return (
    <>
      <Header />

      <main className="container admin-page">
        <div className="admin-header">
          <h1>Prévisualisation du produit</h1>
          <p>
            Voici comment le produit apparaîtra dans la boutique Moon Diamond
          </p>
        </div>

        <div className="admin-card">
          <h2>{produit.name || "produit sans nom"}</h2>
          <p>{produit.description}</p>
          <p>
            <strong>
              {produit.price
                ? `${Number(produit.price).toFixed(2)} €`
                : "prix non renseigné"}
            </strong>
          </p>
          <p>
            {produit.stock === ""
              ? "Stock non renseigné"
              : Number(produit.stock) > 0
                ? `🟢 En stock (${produit.stock} disponible${Number(produit.stock) > 1 ? "s" : ""})`
                : "🔴 Rupture de stock"}
          </p>
          <p>
            <strong>Catégorie :</strong>{" "}
            {produit.category
              ? produit.category.charAt(0).toUpperCase() +
                produit.category.slice(1)
              : "Non renseignée"}
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default ApercuProduit;

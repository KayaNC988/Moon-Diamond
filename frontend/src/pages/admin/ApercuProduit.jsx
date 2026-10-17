import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useState } from "react";
import "./AdminProduits.css";

function ApercuProduit() {
  const produit = JSON.parse(sessionStorage.getItem("apercuProduit") || "{}");
  const images = JSON.parse(sessionStorage.getItem("apercuImages") || "[]");
  const [imageActive, setImageActive] = useState(0);
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
          <div className="apercu-produit-layout">
            <div className="apercu-galerie">                      
          {images.length > 0 && (
            <div className="apercu-image-principale">
              {images.length > 1 && (
                <button
                  type="button"
                  className="apercu-fleche apercu-fleche-gauche"
                  aria-label="Photo précédente"
                  onClick={() =>
                    setImageActive(
                      (imageActive - 1 + images.length) % images.length,
                    )
                  }
                >
                  ❮
                </button>
              )}

              <img
                src={images[imageActive]}
                alt={`${produit.name || "Produit"} - Photo ${imageActive + 1}`}
              />

              {images.length > 1 && (
                <span className="apercu-compteur">
                {imageActive + 1} / {images.length}</span>
              )}

              {images.length > 1 && (
                <button
                  type="button"
                  className="apercu-fleche apercu-fleche-droite"
                  aria-label="Photo suivante"
                  onClick={() =>
                    setImageActive((imageActive + 1) % images.length)
                  }
                >
                  ❯
                </button>
              )}
            </div>
          )}
          </div>
          <div className="apercu-informations">             
          <h2>{produit.name || "produit sans nom"}</h2>
          <p>{produit.description}</p>
          <p>
            <strong>
              {produit.price
                ? `${Number(produit.price).toFixed(2)} €`
                : "prix non renseigné"}
            </strong>
          </p>
          {produit.largeur && produit.hauteur && (
            <p>
              <strong>Dimensions :</strong> {produit.largeur} x{" "}
              {produit.hauteur} cm
            </p>
          )}
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
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default ApercuProduit;

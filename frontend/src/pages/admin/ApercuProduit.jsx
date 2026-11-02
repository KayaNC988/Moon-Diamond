import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { useState } from "react";
import "./AdminProduits.css";

function ApercuProduit() {
  const produit = JSON.parse(sessionStorage.getItem("apercuProduit") || "{}");
  const images = JSON.parse(sessionStorage.getItem("apercuImages") || "[]");
  const [imageActive, setImageActive] = useState(0);
  const session = JSON.parse(
    sessionStorage.getItem("moonDiamondSession") || "null"
  );
  const token = session?.token || null;
  
  const publierProduit = async () => {
    if (!token) {
    alert("Vous devez être connecté pour accéder à cette page.");
    return;
  }
    const donneesProduit = {
  name: produit.name,
  description: produit.description,
  price: Number(produit.price),
  stock: Number(produit.stock),
  width_cm: Number(produit.largeur),
  height_cm: Number(produit.hauteur),
  category_id: {
    toiles: 1,
    kits: 2,
    accessoires: 3,
  }[produit.category],
  status: "available",
};
const formData = new FormData();
Object.entries(donneesProduit).forEach(([key, value]) => {
  formData.append(key, value);
});
for (let i = 0; i < images.length; i++) {
  const response = await fetch(images[i]);
  const blob = await response.blob();
  const extension = blob.type === "image/png" ? ".png" : blob.type === "image/webp" ? ".webp" : ".jpg";
  formData.append("images", blob, `image${i + 1}${extension}`);
}
try {
  const response = await fetch("http://localhost:3000/api/products", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${token}`,
    },
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Erreur lors de la publication du produit");
  }

  const result = await response.json();
  console.log("Produit publié avec succès :", result);
} catch (error) {
  console.error("Erreur lors de la publication du produit :", error);
  alert("Une erreur est survenue lors de la publication du produit.");
}
  };
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
          <p className="apercu-prix">
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
        <div className="apercu-actions">
          <button type="button" className="apercu-btn-modifier"
          onClick={() => window.close()}>Modifier</button>

      

          <button type="button" className="apercu-btn-publier" onClick={publierProduit}>
            Valider et publier
          </button>

          <button type="button" className="apercu-btn-annuler">Annuler</button>
        </div>
      </main>

      <Footer />
    </>
  );
}


export default ApercuProduit;

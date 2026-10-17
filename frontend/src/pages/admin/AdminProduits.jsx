import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./AdminProduits.css";
import { useState } from "react";

function AdminProduits() {
  const [afficherFormulaire, setAfficherFormulaire] = useState(false);
  const [images, setImages] = useState([]);
  const [produit, setProduit] = useState({
    name: "",
    description: "",
    largeur: "",
    longueur: "",
    price: "",
    stock: "",
    category: "",
  });

  const convertirImage = (fichier) => {
    return new Promise((resolve, reject) => {
      const lecteur = new FileReader();

      lecteur.onload = () => resolve(lecteur.result);
      lecteur.onerror = () => reject(lecteur.error);

      lecteur.readAsDataURL(fichier);
    });
  };

  return (
    <>
      <Header />

      <main className="container admin-page">
        <div className="admin-header">
          <h1>Gestion des produits</h1>
          <p>Ajoutez, modifiez et gérez les produits Moon Diamond.</p>
        </div>

        <div className="admin-products-actions">
          <button
            type="button"
            className="admin-add-button"
            onClick={() => setAfficherFormulaire(true)}
          >
            + Ajouter un produit
          </button>
        </div>


        {afficherFormulaire && (
          <div className="admin-card">
            <h2>💎 Ajouter un nouveau produit</h2>
            <p>Remplissez les informations de votre nouveau produit.</p>
            <div className="admin-form-group">
              <label htmlFor="product-name">Nom du produit</label>

              <input
                type="text"
                id="product-name"
                name="name"
                placeholder="Ex : Toile Diamond Painting – Chat"
                value={produit.name}
                onChange={(e) =>
                  setProduit({ ...produit, name: e.target.value })
                }
                required
              />
            </div>

            <div className="admin-form-group">
              <label htmlFor="description">Description du produit</label>

              <textarea
                id="description"
                name="description"
                placeholder="Déscription du produit..."
                rows="5"
                value={produit.description}
                onChange={(e) =>
                  setProduit({ ...produit, description: e.target.value })
                }
              />
            </div>
            <div className="admin-form-group">
              <label>Dimensions du produit (cm)</label>

              <div className="admin-dimensions">
                <div>
                  <label htmlFor="largeur">Largeur</label>
                  <input
                    type="number"
                    id="largeur"
                    name="largeur"
                    placeholder="Ex : 40"
                    min="0"
                    step="0.1"
                    value={produit.largeur}
                    onChange={(e) =>
                      setProduit({ ...produit, largeur: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label htmlFor="hauteur">Hauteur</label>
                  <input
                    type="number"
                    id="hauteur"
                    name="hauteur"
                    placeholder="Ex : 60"
                    min="0"
                    step="0.1"
                    value={produit.hauteur}
                    onChange={(e) =>
                      setProduit({ ...produit, hauteur: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>
            <div className="admin-form-group">
              <label htmlFor="price">Prix du produit (€)</label>
              <input
                type="number"
                id="price"
                name="price"
                placeholder="Ex : 24.90"
                min="0"
                step="0.01"
                value={produit.price}
                onChange={(e) =>
                  setProduit({ ...produit, price: e.target.value })
                }
              />
            </div>
            <div className="admin-form-group">
              <label htmlFor="stock">Stock disponible</label>
              <input
                type="number"
                id="stock"
                name="stock"
                placeholder="EX : 10"
                min="0"
                step="1"
                value={produit.stock}
                onChange={(e) =>
                  setProduit({ ...produit, stock: e.target.value })
                }
              />
            </div>
            <div className="admin-form-group">
              <label htmlFor="category">Catégorie du produit</label>
              <select
                name="category"
                id="category"
                value={produit.category}
                onChange={(e) =>
                  setProduit({ ...produit, category: e.target.value })
                }
              >
                <option value="disabled">Sélectionner une catégorie</option>
                <option value="toiles">Toiles</option>
                <option value="kits">Kits</option>
                <option value="accessoires">Accessoires</option>
              </select>
            </div>
            <div className="admin-form-group">
              <label htmlFor="images">Images du produit</label>
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                multiple
                onChange={(e) => setImages(Array.from(e.target.files))}
              />
              {images.length > 0 && (
                <>
                  <p className="admin-images-count">
                    {images.length} image{images.length > 1 ? "s" : ""}{" "}
                    sélectionnée
                    {images.length > 1 ? "s" : ""}
                  </p>

                  <div className="admin-images-preview">
                    {images.map((image, index) => (
                      <div key={index} className="admin-image-wrapper">
                        <img
                          src={URL.createObjectURL(image)}
                          alt={`Aperçu du produit ${index + 1}`}
                          className="admin-image-preview"
                        />

                        <button
                          type="button"
                          className="admin-image-remove"
                          aria-label={`Supprimer l'image ${index + 1}`}
                          onClick={() =>
                            setImages((prevImages) =>
                              prevImages.filter((_, i) => i !== index),
                            )
                          }
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
            <button
              type="button"
              className="admin-preview-button"
              onClick={async () => {
                const onglet = window.open("", "_blank");

                if (!onglet) {
                  alert(
                    "Autorise les fenêtres pop-up pour afficher la prévisualisation.",
                  );
                  return;
                }

                try {
                  const imagesConverties = await Promise.all(
                    images.map((image) => convertirImage(image)),
                  );

                  onglet.sessionStorage.setItem(
                    "apercuProduit",
                    JSON.stringify(produit),
                  );

                  onglet.sessionStorage.setItem(
                    "apercuImages",
                    JSON.stringify(imagesConverties),
                  );

                  onglet.location.href = "/admin/produits/apercu";
                } catch (erreur) {
                  console.error("Erreur de prévisualisation :", erreur);
                  onglet.close();
                  alert(
                    "Impossible de préparer la prévisualisation des images.",
                  );
                }
              }}
            >
              Prévisualiser
            </button>
            <button
              type="button"
              className="admin-cancel-button"
              onClick={() => {
                setAfficherFormulaire(false);
                setImages([]);
              }}
            >
              Annuler
            </button>
          </div>
        )}

        <div className="admin-card">
          <h2>📦 Mes produits</h2>
          <p>Retrouvez ici tous les produits de votre boutique.</p>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default AdminProduits;

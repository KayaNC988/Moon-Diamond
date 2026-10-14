import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./AdminProduits.css";
import { useState } from "react";

function AdminProduits() {
  const [afficherFormulaire, setAfficherFormulaire] = useState(false);
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
                required
              />
            </div>
            vous
            <div className="admin-form-group">
              <label htmlFor="description">Description du produit</label>

              <textarea
                id="description"
                name="description"
                placeholder="Décrivez votre produit..."
                rows="5"
              />
            </div>
            <button type="button" className="admin-cancel-button" onClick={() => setAfficherFormulaire(false)}>
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

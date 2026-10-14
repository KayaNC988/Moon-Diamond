import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./Admin.css";
import { Link } from "react-router-dom";

function Admin() {
    return (
    <>
    <Header />

    <main className="container admin-page">
  <div className="admin-header">
    <h1>Tableau de bord</h1>
    <p>Bienvenue dans l'administration Moon Diamond.</p>
  </div>

  <div className="admin-grid">
     <Link to="/admin/produits" className="admin-card admin-card-link">
  <h2>📦 Produits</h2>
  <p>Ajouter, modifier et supprimer les produits.</p>
</Link>

    <Link to="/admin/commandes" className="admin-card admin-card-link">
      <h2>🛒 Commandes</h2>
      <p>Consulter et gérer les commandes des clients.</p>
    </Link>

    <Link to="/admin/utilisateurs" className="admin-card admin-card-link">
      <h2>👥 Utilisateurs</h2>
      <p>Consulter et gérer les comptes clients.</p>
    </Link>

    <div className="admin-card">
      <h2>🗂️ Catégories</h2>
      <p>Organiser les différentes catégories de produits.</p>
    </div>

    <div className="admin-card">
      <h2>🎨 Nos créations</h2>
      <p>Ajouter et gérer les réalisations Moon Diamond.</p>
    </div>

    <div className="admin-card">
      <h2>📰 Actualités</h2>
      <p>Publier des nouveautés, promotions et annonces.</p>
    </div>
  </div>
</main>

    <Footer />
    </>
    );
}

export default Admin;
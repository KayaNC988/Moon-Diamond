import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { useState } from "react";
import "./Panier.css";

function Panier() {
  const [articles, setArticles] = useState([]);
  const augmenterQuantite = (id) => {
    setArticles((prevArticles) =>
      prevArticles.map((article) =>
        article.id === id
          ? { ...article, quantity: article.quantity + 1 }
          : article,
      ),
    );
  };

  const diminuerQuantite = (id) => {
    setArticles((prevArticles) =>
      prevArticles.map((article) =>
        article.id === id
          ? { ...article, quantity: Math.max(1, article.quantity - 1) }
          : article,
      ),
    );
  };

  const supprimerArticle = (id) => {
    setArticles((prevArticles) =>
     prevArticles.filter((article) => article.id !== id)
    );
  };

  const viderPanier = () => {
    const confirmation = window.confirm(
        "Voulez vous vraiment vider le panier ?"
    );

    if (confirmation) {
        setArticles([]);
    }
  };
  return (
    <>
      <Header />

      <main className="container panier-page">
        <div className="panier-header">
          <h1>Mon panier</h1>
          <p>Retrouvez ici les articles que vous avez sélectionnés.</p>
        </div>

        {articles.length === 0 && (
          <div className="panier-empty">
            <ShoppingBag size={45} className="panier-empty-icon" />

            <h2>Votre panier est vide</h2>

            <p>
              Vos futurs coups de cœur Moon Diamond vous attendent ! Découvrez
              prochainement nos premières collections.
            </p>

            <Link to="/boutique" className="panier-button">
              Découvrir la boutique
            </Link>
          </div>
        )}
        {articles.length > 0 && (
          <div className="panier-items">
            {articles.map((article) => (
              <div key={article.id} className="panier-item">
                <h3>{article.name}</h3>
                <p>Prix: {Number(article.price).toFixed(2)} €</p>
                <div className="panier-quantity">
                  <button
                    type="button"
                    onClick={() => diminuerQuantite(article.id)}
                    disabled={article.quantity <= 1}
                  >
                    −
                  </button>

                  <span>{article.quantity}</span>

                  <button
                    type="button"
                    onClick={() => augmenterQuantite(article.id)}
                  >
                    +
                  </button>
                  <button
                  type="button"
                  className="panier-remove"
                  onClick={() => supprimerArticle(article.id)}>
                    Supprimer
                  </button>
                </div>
              </div>
            ))}
            <button 
            type="button"
            className="panier-clear"
            onClick={viderPanier}>
                Vider le panier
            </button>
            <Link 
            to="/commande" 
            className="panier-checkout">Passer commande</Link>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}

export default Panier;

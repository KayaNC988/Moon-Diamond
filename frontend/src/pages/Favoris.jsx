import Header from '../components/Header';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Trash2 } from 'lucide-react';

import { useAuth } from '../context/useAuth';
import './Favoris.css';

function Favoris() {
  const { token, isAuthenticated } = useAuth();

  const [favoris, setFavoris] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [deletingId, setDeletingId] = useState(null);

  // Récupération des favoris
  useEffect(() => {
    if (!isAuthenticated || !token) {
      return;
    }

    const fetchFavoris = async () => {
      try {
        const response = await fetch(
          'http://localhost:3000/api/favorites',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error('Impossible de récupérer vos favoris.');
        }

        const data = await response.json();

        setFavoris(data);
        setError('');
      } catch (err) {
        console.error('Erreur favoris :', err);
        setError('Une erreur est survenue lors du chargement des favoris.');
      } finally {
        setLoading(false);
      }
    };

    fetchFavoris();
  }, [token, isAuthenticated]);

  // Suppression d'un favori
  const supprimerFavori = async (productId) => {
    if (!token || deletingId !== null) {
      return;
    }

    setDeletingId(productId);
    setError('');

    try {
      const response = await fetch(
        `http://localhost:3000/api/favorites/${productId}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error('Impossible de supprimer ce favori.');
      }

      setFavoris((previousFavoris) =>
        previousFavoris.filter(
          (favori) => favori.product_id !== productId
        )
      );
    } catch (err) {
      console.error('Erreur suppression favori :', err);
      setError('Impossible de supprimer ce favori. Réessayez.');
    } finally {
      setDeletingId(null);
    }
  };

  return (
           <>
    <Header />
    <main className="container favoris-page">

      <div className="favoris-header">
        <h1>Mes favoris</h1>

        <p>
          Retrouvez ici vos produits préférés Moon Diamond.
        </p>
      </div>

      {/* Utilisateur non connecté */}
      {!isAuthenticated ? (

        <div className="favoris-empty">
          <Heart className="favoris-empty-heart" size={45} />

          <h2>Connectez-vous pour retrouver vos favoris</h2>

          <p>
            Enregistrez vos coups de cœur et retrouvez-les
            facilement dans votre espace personnel.
          </p>

          <Link to="/connexion" className="favoris-button">
            Se connecter
          </Link>
        </div>

      ) : loading ? (

        <p className="favoris-message">
          Chargement de vos favoris...
        </p>

      ) : favoris.length === 0 ? (

        /* Liste vide */
        <div className="favoris-empty-card">

          <Heart className="favoris-empty-heart" size={45} />

          <h2>Votre liste de favoris est vide</h2>

          <p>
            Vos coups de cœur Moon Diamond apparaîtront ici.
            Découvrez prochainement nos premières collections !
          </p>

          <Link to="/boutique" className="favoris-button">
            Découvrir la boutique
          </Link>

        </div>

      ) : (

        /* Liste des produits favoris */
        <div className="favoris-grid">

          {favoris.map((favori) => (
            <article
              key={favori.id}
              className="favoris-card"
            >

              <div className="favoris-image">
                {favori.product?.images?.[0]?.image_url ? (
                  <img
                    src={favori.product.images[0].image_url}
                    alt={favori.product.name}
                  />
                ) : (
                  <span>Photo à venir</span>
                )}
              </div>

              <div className="favoris-card-content">

                <h3>
                  {favori.product?.name || 'Produit indisponible'}
                </h3>

                {favori.product?.price && (
                  <p className="favoris-price">
                    {Number(favori.product.price).toFixed(2)} €
                  </p>
                )}

                <button
                  type="button"
                  className="favoris-remove"
                  onClick={() =>
                    supprimerFavori(favori.product_id)
                  }
                  disabled={deletingId !== null}
                >
                  <Trash2 size={17} />

                  {deletingId === favori.product_id
                    ? 'Suppression...'
                    : 'Retirer des favoris'}
                </button>

              </div>
            </article>
          ))}

        </div>

      )}

      {error && (
        <p className="favoris-error" role="alert">
          {error}
        </p>
      )}

    </main>
    <Footer />
    </>
  );
}

export default Favoris;
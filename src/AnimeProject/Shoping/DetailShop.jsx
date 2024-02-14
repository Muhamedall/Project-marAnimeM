import { useContext } from 'react';
import { DataApi } from '../Components/ContextApi/Data-context-Api';
import { useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faTruck } from '@fortawesome/free-solid-svg-icons';
import { CarteContext } from './Card-shop/Carte-shop-context';

const DetailShop = () => {
    const { dataProductsNaruto, productsHero, accessoires } = useContext(DataApi);
    const { addToCart } = useContext(CarteContext);
    const { productNam } = useParams();
    const navigate = useNavigate();

    let filteredProduct = null;

    if (dataProductsNaruto) {
        filteredProduct = dataProductsNaruto.ListPrNaruto.find(data =>
            data.attributes.Title.trim().toLowerCase() === productNam.trim().toLowerCase()
        );
    }

    if (!filteredProduct && productsHero) {
        filteredProduct = productsHero.listproductHero.find(data =>
            data.attributes.Title.trim().toLowerCase() === productNam.trim().toLowerCase()
        );
    }

    if (!filteredProduct && accessoires) {
        filteredProduct = accessoires.listAcesoires.find(data =>
            data.attributes.Title.trim().toLowerCase() === productNam.trim().toLowerCase()
        );
    }

    const handleAddToCart = () => {
        if (filteredProduct) {
            addToCart(filteredProduct);
            navigate('/Carte-shop');
        }
    };

    return (
        <>
            <section className='mt-10 Information-Shop flex flex-row gap-2'>
                <div className='Product-description-general'>
                    {filteredProduct ? (
                        <>
                            <img
                                className="shadow-2xl"
                                src={`http://localhost:1337${filteredProduct.attributes.image.data.attributes.url}`}
                                alt={filteredProduct.attributes.Title}
                                style={{ maxWidth: "40%" }}
                            />
                            <div>
                                <h1 className="text-2xl font-serif">{filteredProduct.attributes.Title}</h1>
                                <div className='flex flex-row gap-3'>
                                    <span>{filteredProduct.attributes.prixHabituel} €</span>
                                    <span className='line-through text-gray-400'>{filteredProduct.attributes.prixSolde} €</span>
                                </div>
                                <h2 className='font-mono text-green-500'>
                                    <FontAwesomeIcon icon={faTruck} className='text-slate-950' /> Free Shipping
                                </h2>
                                <br />
                                <button onClick={handleAddToCart} className="shadow bg-slate-950 hover:bg-slate-700 focus:shadow-outline focus:outline-none text-white font-bold py-1 px-4 rounded">
                                    <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
                                </button>
                            </div>
                        </>
                    ) : (
                        <p>No product found</p>
                    )}
                </div>
            </section>
        </>
    );
};

export default DetailShop;

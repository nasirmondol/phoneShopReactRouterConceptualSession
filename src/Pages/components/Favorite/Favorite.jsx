import { useEffect, useState } from "react";
import FavoriteCart from "../FavoriteCart/FavoriteCart";

const Favorite = () => {
    const [favorite, setFavorite] = useState([]);
    const [notFound, setNotFound] = useState('');
    const [isShow, setIsShow] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);


    useEffect(() => {
        const getLocalItem = JSON.parse(localStorage.getItem('favorite'));
        if (getLocalItem) {
            setFavorite(getLocalItem)
            const total = getLocalItem.reduce((preValue, currentValue) => preValue + currentValue.price, 0)
            setTotalPrice(total);
        }
        else {
            setNotFound('no data found')
        }
    }, []);

    const handleFavorite = () => {
        localStorage.clear();
        setFavorite([]);
        setNotFound('no data found')
    }

    return (
        <div >
            <div className="flex justify-center items-center ">
                {favorite.length > 0 && <button className="bg-red-400 text-white px-5 py-2 rounded-md mt-5" onClick={handleFavorite}>Clear All Favorite</button>}
            </div>
            Total: {totalPrice.toFixed(2)}
            {
                notFound ? <p className="flex text-3xl font-bold items-center justify-center text-center text-red-400 h-[70vh]">{notFound}</p> : <div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {
                            isShow ? favorite?.map(fav => <FavoriteCart key={fav.id} fav={fav}></FavoriteCart>) :
                                favorite?.slice(0, 2).map(fav => <FavoriteCart key={fav.id} fav={fav}></FavoriteCart>)
                        }
                    </div>
                </div>

            }
            {
                favorite.length > 2 && <div className="flex justify-center items-center py-5">
                    <button onClick={() => setIsShow(!isShow)} className="text-white bg-green-400 px-5 py-1 rounded-lg mt-5">{!isShow ? 'See less' : 'close up'}</button>
                </div>
            }
        </div>
    );
};

export default Favorite;
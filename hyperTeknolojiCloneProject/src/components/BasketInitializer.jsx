import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadBasket } from '../redux/slices/basketSlice';

const BasketInitializer = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadBasket());
    }, [dispatch]);

    return null;
};

export default BasketInitializer;
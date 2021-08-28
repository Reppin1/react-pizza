import { Categories } from '../Categories/Catigories';
import { SortPopup } from '../SortPopup/SortPopup';
import { PizzaBlock } from '../PizzaBlock/PizzaBlock';
import { useDispatch, useSelector } from "react-redux";
import { setCategory, setSortBy } from "../../redux/actions/filter";
import { useCallback, useEffect } from "react";
import { fetchPizzas } from "../../redux/actions/pizzas";
import { PizzaBlockLoader } from "../PizzaBlock/PizzaBlockLoader";
import { addPizzaToCart } from "../../redux/actions/cart";

const categoryNames = ['Мясные', 'Вегатарианская', 'Гриль', 'Острые', 'Закрытые',]
const sortItems = [
  { name: 'популярности', type: 'rating', order: 'desc' },
  { name: 'цене', type: 'price', order: 'desc' },
  { name: 'алфавиту', type: 'name', order: 'asc' }];

const Home = () => {
  const items = useSelector((state => state.pizzas.items));
  const cartItems = useSelector(({cart}) => cart.items)
  const loading = useSelector((state => state.pizzas.isLoaded))
  const { category, sortBy } = useSelector(({filter}) => filter)
  const dispatch = useDispatch()

  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index))
  }, []);

  const onClickSortBy = useCallback((type) => {
    dispatch(setSortBy(type))
  }, [])

  const handleAddPizzaToCart = (obj) => {
    dispatch(addPizzaToCart(obj))
  }

  useEffect(() => {
    dispatch(fetchPizzas(sortBy, category));
  }, [category, sortBy]);

  return (
  <div className="container">
    <div className="content__top">
      <Categories
        onClickItem={onSelectCategory}
        items={categoryNames}
        activeCategory={category}
      />
      <SortPopup activeSortType={sortBy.type} items={sortItems} onClickSortType={onClickSortBy} />
    </div>
    <h2 className="content__title">Все пиццы</h2>
    <div className="content__items">
      {loading
        ? items.map(obj =>
          <PizzaBlock
            onAddPizza={handleAddPizzaToCart}
            key={obj.id} {...obj}
            addedCount={cartItems[obj.id] && cartItems[obj.id].items.length} />)
        : Array(12).fill(0).map((_, index) => <PizzaBlockLoader key={index} />)}
    </div>
  </div>
  );
};

export { Home };
